# May 17, 2025

```sql
 Chapter 3 - Practise Exercises

 These are the relations that i have using currently
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


 -- Find the titles of courses in the Comp. Sci. department that have 3 credits.
 select title from course where dept_name='Comp. Sci.' and credits=3;
 
-- Find the IDs of all students who were taught by an instructor named Arias; make sure there are no duplicates in the result.
select distinct s.id from student as s 
join instructor as i
on s.dept_name=i.dept_name
where i.name='Arias';

-- Find the highest salary of any instructor
select name,salary from instructor order by salary desc limit 1;

-- Find all instructors earning the highest salary (there may be more than one with the same salary).
select name,salary from instructor where salary=(select max(salary) from instructor);

-- Find the enrollment of each section that was offered in Spring 2010.
select s.sec_id,count(t.id) from section as s
join takes as t
on s.sec_id=t.sec_id
where s.semester='Spring' and s.year=2010
group by s.semester,s.year,s.sec_id;

-- Find the maximum enrollment, across all sections, in Spring 2010.
select s.sec_id,count(t.id) from section as s
join takes as t
on s.sec_id=t.sec_id
where s.semester='Spring' and s.year=2010
group by s.semester,s.year,s.sec_id;

--  Find the sections that had the maximum enrollment in Spring 2010.
select s.sec_id,count(t.id) from section as s
join takes as t
on s.sec_id=t.sec_id
where s.semester='Spring' and s.year=2010
group by s.sec_id
having count(id) = (
                  select count(t2.id) from section as s2
                  join takes as t2
				  on s2.sec_id=t2.sec_id
				  where s2.semester='Spring' and s2.year=2010
				  group by s2.sec_id
				  order by count(t2.id) desc
				  limit 1
);


-- Increase the salary of each instructor in the Comp. Sci. department by 10%.
update instructor 
set salary=salary*1.1
where dept_name='Comp. Sci.'

select * from instructor;

-- Delete all courses that have never been offered (that is, do not occur in the section relation).
delete from course where course_id not in(select course_id from section);-- when i run this i got foreign key violation error

alter table prereq
drop constraint prereq_prereq_id_fkey,
add constraint prereq_prereq_id_fkey foreign key(prereq_id) references course(course_id) on delete cascade; -- after altering table 

delete from course where course_id not in(select course_id from section); -- now works

-- Find  every student whose tot cred attribute is greater than 100 as an instructor in the same department, with a salary of $10,000
select s.name from student as s 
join instructor as i
on s.id = i.id
where s.tot_cred>100 and i.salary=10000;

Started solve problems on leetcode
 [reference](https://leetcode.com/problem-list/database/)

 175. Combine Two Tables
    select firstName,lastName,city,state from person as p
    left join address as a
    on p.personid=a.personid;

176. Second Highest Salary
    SELECT 
   (SELECT DISTINCT salary 
   FROM Employee 
   ORDER BY salary DESC 
   LIMIT 1 OFFSET 1) AS SecondHighestSalary;

178. Rank Scores
select score ,dense_rank() over( order by score desc) as rank from Scores;

181. Employees Earning More Than Their Managers
select e1.name as Employee from Employee as e1
join Employee as e2
on e1.managerid=e2.id
where e1.salary>e2.salary;

182. Duplicate Emails
select distinct email as Email from person where email in( select email from person group by email having count(email)>1);

183. Customers Who Never Order
select name as Customers from customers where id not in (select customerid from orders);


183. Customers Who Never Order
select name as Customers from customers where id not in (select customerid from orders);

184. Department Highest Salary
select department_name as department,
       employee_name as employee,
       salary as salary
from (
    select d.name as department_name,
           e.name as employee_name,
           e.salary as salary,
           rank() over (partition by d.id order by e.salary desc) as rk
    from employee as e
    join department as d on e.departmentid = d.id
) as ranked
where rk = 1;

185. Department Top Three Salaries
-- Write your PostgreSQL query statement below
select department_name as department,
       employee_name as employee,
       salary as salary
from (
    select d.name as department_name,
           e.name as employee_name,
           e.salary as salary,
           dense_rank() over (partition by d.id order by e.salary desc) as rk
    from employee as e
    join department as d on e.departmentid = d.id
) as ranked
where rk <=3;

196. Delete Duplicate Emails

-- Write your PostgreSQL query statement below;

DELETE FROM Person
WHERE id NOT IN (
    SELECT MIN(id)
    FROM Person
    GROUP BY email
);

197. Rising Temperature
select w.id from weather w
join weather w1
on w.recorddate=w1.recorddate+1
where w.temperature>w1.temperature;


Code
Testcase
Test Result
Test Result
511. Game Play Analysis I
-- Write your PostgreSQL query statement below

with ranktb as
(select player_id,event_date as first_login ,
rank() over(partition by player_id order by event_date asc) as rank
from activity 
)
select player_id,first_login from ranktb where rank=1;

577. Employee Bonus
select e.name,b.bonus from employee e
left outer join bonus b
on e.empid=b.empid
where b.bonus<1000 or b.bonus is null;





```