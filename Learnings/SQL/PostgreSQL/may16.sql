-- Modification of Database

-- Delete Operation

-- delete a tuple from a relation
delete from student where name='Schrefl';

-- delete the tuples where the total_cred is less than their average credits
delete from student where tot_cred<(select avg(tot_cred) from student);


-- Insert

-- inserting a row in student relation
-- insert into student values(333,'yash','cse',100); => this query will get a error as foreign key violation error

-- insert a row in a department relation
  insert into department values('cse','Palmer',451236.23); 

-- inserting a row in student relation
 insert into student values(333,'yash','cse',100); -- by executing the above query i solved the foreign key violation error


-- Update

-- updating the salary of each person by multiplying 1.5
 update instructor set salary=salary*1.5;

-- update the salary of all instructors based on salary ranges
 update instructor
 set salary=case 
 when salary<=100000 then salary*1.05 
 when salary<=200000 then salary*1.03 
 else salary*1.01 
 end;


select * from course  order by  title asc;
select * from department order by dept_name asc;
select * from student order by name asc;
select * from instructor order by name asc;
select * from teaches;
select * from takes;
select * from section;
select * from advisor;
select * from classroom;
select * from time_slot;
select * from prereq;


-- Practise Queries

--  Find the titles of courses in the Comp. Sci. department that have 3 credits.
select title,dept_name from course where dept_name='Comp. Sci.' and credits=3;	

-- Find the names of all the instructors from Biology department
select name from instructor where dept_name='Biology';

-- Find the names of courses in Computer science department which have 3 credits
select title from course where dept_name='Comp. Sci.' and credits=3;

-- For the student with ID 12345 (or any other value), show all course_id and title of all courses registered for by the student.
select c.course_id,c.title from course as c
join takes as t
on c.course_id=t.course_id
where t.id='35';

-- As above, but show the total number of credits for such courses (taken by that student).
-- Don't display the tot_creds value from the student table, you should use SQL aggregation on courses taken by the student.

select sum(c.credits) as total_credeits from course as c
join takes as t
on c.course_id=t.course_id
where t.id='35';

-- As above, but display the total credits for each of the students, along with the ID of the student; don't bother about the name of the student.
-- (Don't bother about students who have not registered for any course, they can be omitted)
select t.id as student_id,sum(c.credits) as total_credits from course as c
join takes as t
on c.course_id=t.course_id 
group by t.id;

-- Find the names of all students who have taken any Comp. Sci. course ever (there should be no duplicate names)
select distinct name from student where dept_name='Comp. Sci.';

-- Display the IDs of all instructors who have never taught a couse (Notesad1) Oracle uses the keyword minus in place of except;
-- (2) interpret "taught" as "taught or is scheduled to teach") 
-- select id from instructor 
-- except
-- (select i.id from instructor as i
-- join teaches as t
-- on i.id=t.id

--  );
select id from instructor except (select id from teaches);


-- As above, but display the names of the instructors also, not just the IDs.
select id,name from instructor 
except
(select i.id,i.name from instructor as i
join teaches as t
on i.id=t.id
);


-- You need to create a movie database. Create three tables, one for actors(AID, name), one for movies(MID, title) and one for 
-- actor_role(MID, AID, rolename). Use appropriate data types for each of the attributes, and add appropriate primary/foreign key constraints.

create database  movie template template0;

create table if not exists actors(
aid  serial primary key ,
name varchar(255)
);

create table if not exists movies(
mid int primary key,
title varchar(255)
);

create table if not exists actor_role(
mid int,
aid int,
rolename varchar(200),
primary key(mid,aid),
constraint fk_mid foreign key(mid) references movies(mid),
constraint fk_aid foreign key(aid) references actors(aid)

);


INSERT INTO actors (name) VALUES
('Vijay'),                    -- Lead Hero
('Ajith Kumar'),              -- Lead Hero
('Vadivelu'),                 -- Comedian
('Yogi Babu'),                -- Comedian
('Samuthirakani'),            -- Hero
('Prakash Raj'),              -- Villain/Character Actor
('Soori'),                    -- Comedian/Lead in "Viduthalai"
('Trisha'),                -- heroine
('Samantha'),                -- heroine
('S.J. Suryah');              -- Villain/Character Actor

INSERT INTO actor_role (mid, aid, rolename) VALUES
(34, 1, 'Hero'),
(12, 2, 'Hero'),
(23, 3, 'Comedian'),
(90, 4, 'Comedian'),
(56, 5, 'Hero'),
(22, 6, 'Villain'),
(10, 7, 'Comedian'),
(89, 8, 'Heroine'),
(67, 9, 'Heroine'),
(55,10, 'Villain');


INSERT INTO movies (mid, title) VALUES
(34, 'Theri'),
(12, 'Good Bad Ugly'),
(23, 'Velu'),
(90, 'Bigil'),
(56, 'Appa'),
(22, 'Sivakasi'),
(10, 'Seemaraja'),
(89, 'Good Bad Ugly'),
(67, 'Theri'),
(55, 'Maanadu');

select * from actors;
select * from movies;
select * from actor_role;


-- Write a query to list all movies in which actor "Vijay" has acted, along with the number of roles he had in that movie.
select a.name,ar.rolename from actors as a
join actor_role as ar
on a.aid=ar.aid
where a.name='Vijay';

insert into actors(name) values('Vijay Sethupathi');

-- Write a query to list all actors who have not acted in any movie
select name from actors except (select distinct a.name from actors as a
join actor_role as ar
on a.aid=ar.aid);

-- List names of actors, along with titles of movies they have acted in. If they have not acted in any movie, show the movie title as null.
select a.name,m.title,ar.rolename from actors as a
left join actor_role as ar
on a.aid=ar.aid
left join movies as m
on ar.mid=m.mid;


-- List all students and their departments, sorted by department name and then student name.
select name,dept_name from student order by dept_name,name asc;


-- Find all courses with 'Intro' in their title
select title from course where lower(title) like '%intro%';

-- Count how many students are in each department. Display the department name and the count.
select dept_name,count(*) from student group by dept_name ;

-- List the names of instructors who teach in the 'Comp. Sci.' department along with their salaries.
select name,salary from instructor where dept_name='Comp. Sci.';

-- Find the course with the highest number of credits.
select title as course from course where credits=(select max(credits) as highest_no_of_credits from course) ;

-- List all students who are taking courses in the same department as their major.
select distinct s.name,s.dept_name from student as s 
join takes as t
on s.id=t.id
join course as c
on t.course_id=c.course_id
where  s.dept_name=c.dept_name
order by s.dept_name;

-- Find all instructors who teach multiple courses in the same semester and year.
select  name,t.semester,t.year from instructor as i
join teaches as t
on i.id=t.id
group by i.id,t.year,t.semester,i.name 
having count(distinct t.course_id)>1;


-- Calculate the average salary of instructors by department. Display department name and average salary, sorted by average salary in descending order.
select dept_name,avg(salary) as AvgSalary from instructor group by dept_name order by AvgSalary desc;










