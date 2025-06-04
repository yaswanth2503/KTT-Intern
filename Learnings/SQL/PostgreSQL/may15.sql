-- May 15

-- Relations => advisor, classroom, course, department, instructor, prereq, section, student, takes, teaches, time_slot 

-- retrieving first 20 tuples from department relation

select * from department limit 20;

-- retrieve the building which budget is less than 3000000

select building from department where budget<3000000;


-- retrieve the building which budget is greater than 3000000

select building from department where budget>3000000;

-- retrieve the building which budget is greater than 3000000

select building from department where budget>3000000;

-- retrieve the building which budget is between 3000000 and 500000

select building from department where budget between 300000 and 500000 limit 10;

-- retrieve the buldings which budget is not equal to 300000

select building from department where budget<> 300000 limit 10;

-- retrieve the distinct instructor names from instructor relation

 select distinct name from instructor;

-- retrieve the names of all instructors, along with their department names and department building name

-- In older days we join join the two or more relations this way only

select name,instructor.dept_name,building from instructor,department where instructor.dept_name=department.dept_name limit 10;


-- Rename Operation

-- rename the column

  select name as instructor_name from instructor limit 10;


-- retrieve the names of instructors along with the IDs of the courses they teach


select i.name as instructor_name,t.course_id from instructor as i,teaches as t where i.id=t.id limit 10;


--String Operations 

-- Display a string containing an apostrophe

select 'I''m Yaswanth' as my_name;

-- Display the name as uppercase

 select upper('yaswanth');

-- Display the name as lowercase

 select lower('YASWANTH');

-- Trim the white spaces in the name

sample_db=# select trim('           YASWANTH   ');


-- Comapring two Strings are equal

 select 'computer'='Computer';

-- Pattern Matching 

-- retrieve the name which ends with n

select name from instructor where name like '%n';

-- retrieve names where 'an' appears after exactly two characters, followed by any number of characters

select name from instructor where name like '__an%';


-- Retrieve instructor names containing the literal substring 'yash%'

select name from instructor where name like '%yash/%%' escape '/';


-- Ordering the Display of Tuples

-- retrieve name order it as ascending

select name from instructor order by name asc limit 10;


-- retrieve name order it as descending

select name from instructor order by name desc limit 10;


-- Set Operations (Union,Intersection,Except)


-- Retrieve all distinct course IDs offered in Fall 2017 and Spring 2018 semesters

(select course_id from section where semester = 'Fall' and year = 2017)
 union
 (select course_id from section where semester = 'Spring' and year = 2018);


-- retrieve all course IDs offered in Fall 2017 and Spring 2018 semesters, including duplicates


(select course_id from section where semester = 'Fall' and year = 2017)
union all
(select course_id from section where semester = 'Spring' and year = 2018);

-- retrieve course IDs that were offered in both Fall 2017 and Spring 2018 semesters

(select course_id from section where semester = 'Fall' and year = 2017)
intersect 
(select course_id from section where semester = 'Spring' and year = 2018);

-- retrieve all common course IDs offered in both Fall 2017 and Spring 2018 semesters,including duplicates

(select course_id from section where semester = 'Fall' and year = 2017)
intersect all
(select course_id from section where semester = 'Spring' and year = 2018);


-- retrieve course IDs that were offered in Fall 2017 but not in Spring 2018

(select course_id from section where semester = 'Fall' and year = 2017)
 except
 (select course_id from section where semester = 'Spring' and year = 2018);


-- retrieve all course IDs offered in Fall 2017 but not in Spring 2018, including duplicates


(select course_id from section where semester = 'Fall' and year = 2017)
 except all 
(select course_id from section where semester = 'Spring' and year = 2018);



-- NULL Operations

-- retrieve the name which is not null

select name from instructor where name is not null;


-- Aggregate Functions

-- Count the number of students per course_id

 select course_id, count(*) from takes group by course_id limit 10;


-- Average of students credits by department

select dept_name, avg(tot_cred) from student group by dept_name;


-- Sum of Salaries in each department

 select dept_name, sum(salary) from instructor group by dept_name limit 10;


-- minimum  Sum of Salaries in each department

 select dept_name, min(salary) from instructor group by dept_name limit 10;


-- maximum Salaries in each department

 select dept_name, max(salary) from instructor group by dept_name limit 10;


-- Count distinct instructors per department who taught in Spring 2003

select dept_name, count(distinct instructor.id) as instr_count from instructor, teaches where instructor.id = teaches.id and semester = 'spring' and year = 2003 group by dept_name;

-- return the average salary of each department with dept_name

 select dept_name,avg(salary) as avg_salary from instructor group by dept_name having avg(salary)>42000;



-- Nested Subqueries

Find all the courses taught in the both the Fall 2017 and Spring 2018 semesters.”

select distinct course_id from section where semester='Fall'and year=2008 and course_id in(select course_id from section where semester='Spring' and year=2010);

-- Find the names of all instructors whose salary is greater than at least one instructor in the Biology department

 select name from instructor where salary> some(select salary from instructor where dept_name='Biology');


-- Find the departments that have the highest average salary

 select dept_name from instructor group by dept_name having avg(salary)>= all(select avg(salary) from instructor group by dept_name);


-- Find all courses taught in both the Fall 2017 semester and in the Spring 2018 semester

SELECT s.course_id FROM section AS s WHERE semester = 'Fall' AND year = 2003 AND EXISTS (SELECT * FROM section AS t WHERE semester = 'Spring' AND year = 2008 AND s.course_id = t.course_id);


-- Find all courses that were offered at most once in 2017

 select course_id from section where year = 2007 group by course_id order by count(*) desc limit 1;

-- Find the average instructors’ salaries of those departments where the average salary is greater than $42,000

select dept_name, avg_salary from (select dept_name, avg(salary) as avg_salary from instructor group by dept_name) as dept_avg where avg_salary > 42000;


-- select instructor name, salary, and average salary of their department using lateral 

select name, salary, avg_salary from instructor i1, lateral (select avg(salary) as avg_salary from instructor i2 where i2.dept_name = i1.dept_name);

-- Number of instructors per department

select dept_name, (select count(*) from instructor where department.dept_name = instructor.dept_name) as num_instructors from department; -- get number of instructors per department


--Calculate the average number of sections taught per instructor.

select (select count (*) from teaches)/(select count (*) from instructor);




-- With clause

 -- find department(s) with the maximum budget

 with max_budget(value) as (select max(budget) from department) select budget from department,max_budget where department.budget=max_budget.value;


-- select departments whose total salary is greater than the average total salary 

with dept_total(dept_name, value) as (select dept_name, sum(salary) from instructor group by dept_name), dept_total_avg(value) as (select avg(value) from dept_total) select dept_name from dept_total, dept_total_avg where dept_total.value > dept_total_avg.value;











































