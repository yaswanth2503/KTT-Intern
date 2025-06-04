# May 19, 2025



## Practise Exercises from Leet code [Reference](https://leetcode.com/problemset/database/)


1.Friend Requests II: Who Has the Most Friends
* Write a solution to find the people who have the most friends and the most friends number.
 ```sql
with temp as
(select requester_id as id from requestaccepted
union all
select accepter_id as id from requestaccepted)

select id,count(id) as num from temp group by id order by num desc limit 1
```

2.Triangle Judgement
* Report for every three line segments whether they can form a triangle.
```sql
select *,
case 
when x+y>z and x+z>y and y+z>x then 'Yes'
                                else 'No'
end as triangle 
from triangle
```

3.Biggest Single Number
* Find the largest single number. If there is no single number, report null.
```sql
select max(num) as num from (select max(num) as num from mynumbers group by num having count(num)=1)
```

4.Not Boring Movies
* Write a solution to report the movies with an odd-numbered ID and a description that is not "boring".
```sql
select * from cinema where id%2=1 and description<>'boring' order by rating desc
```

5.Exchange Seats
 * Write a solution to swap the seat id of every two consecutive students. If the number of students is odd, the id of the last student is not swapped.

 ```sql
 select * from (select 
               case 
               when id%2=1 then least(id+1,(select max(id) from seat))
               else id-1
               end
               id,student
               from  seat
               ) s
        order by id;
```

6.Swap Salary
* Write a solution to swap all 'f' and 'm' values (i.e., change all 'f' values to 'm' and vice versa) with a single update statement and no intermediate temporary tables.

```sql
 update salary
    set sex=
    case when sex='f' then 'm'
        when sex='m' then 'f'
        end
```

7.Customers Who Bought All Products
* Write a solution to report the customer ids from the Customer table that bought all the products in the Product table

```sql
select customer_id from customer group by customer_id
having count(distinct product_key)=(select count(distinct product_key) from product)
```

8.Actors and Directors Who Cooperated At Least Three Times
* Write a solution to find all the pairs (actor_id, director_id) where the actor has cooperated with the director at least three times.

```sql
select actor_id,director_id from actordirector group by actor_id,director_id having count(director_id)>=3
```

9.Product Sales Analysis 
* Write a solution to report the product_name, year, and price for each sale_id in the Sales table.

```sql
select p.product_name,s.year,s.price from sales as s
join product as p
on s.product_id=p.product_id
```

10.Product Sales Analysis III
* Write a solution to select the product id, year, quantity, and price for the first year of every product sold. If any product is bought multiple times in its first year, return all sales separately.

```sql
with temp as (
    select product_id,min(year) as minyear from sales group by product_id
)

select s1.product_id,s1.year as first_year,s1.quantity,s1.price 
from sales s1
join temp s2
on s2.product_id=s1.product_id and s1.year=s2.minyear;
```

11.Project Employees I
* Write an SQL query that reports the average experience years of all the employees for each project, rounded to 2 digits.

```sql
select p.project_id,round(avg(e.experience_years),2) as average_years from project p
join employee e
on p.employee_id=e.employee_id
group by p.project_id
```

# Creating a Student Database in PostgreSQL

- Created a table for student  
- Created a table for course  
- Created a table for department  
- Created a table for address  
- Created a table for grade

1.Creating the tables
```sql
create table student(id serial primary key,firstame varchar(255),middlename varchar(255),dept_id int unique,dob date,gender varchar(10) check( gender in ('male','female')),email varchar(255),phone_number varchar(12),CONSTRAINT fk_dept_id foreign key(dept_id) references department(dept_id));

create table course(course_id int primary key,course_name varchar(255),credits smallint ,dept_id int,constraint fk_course_deptid foreign key(dept_id) references department(dept_id));

create table if not exists department(dept_id int primary key,dept_name varchar(255));

create table address(id int primary key,address varchar(255),district varchar(255),state varchar(255),country varchar(255),constraint fk_id foreign key(id) references student(id));

create table grade(id int,course_id int,grade varchar(1) check(grade in('A','B','C','D','E','F')),semester varchar(1) check(semester in('1','2','3','4','5','6','7','8')),year int,constraint fk_grade_id foreign key(id) references student(id),constraint fk_grade_courseid foreign key(course_id) references course(course_id));


```

2.Inserting data into the tables

```sql
INSERT INTO student (firstame, middlename, dept_id, dob, gender, email, phone_number) VALUES ('Panner', 'Selvam', 1, '2003-05-09', 'male', 'panneerselvam@gmail.com', '9876543210'), ('Yaswanth', '', 2, '2003-11-25', 'male', 'yaswanth@gmail.com', '9876543211'), ('Aruna', 'Devi', 3, '2003-05-05', 'female', 'aruna@gmail.com', '9876543212'), ('Obuli', 'Deva', 4, '2003-09-18', 'male', 'obulideva@gmail.com', '9876543213'), ('Dhanush', 'Kumar', 5, '2003-10-01', 'male', 'dhanush@gmail.com', '9876543214'), ('Ajith', 'Kumar', 6, '2003-04-22', 'male', 'ajith@gmail.com', '9876543215'), ('Pragushpathi', '', 7, '2002-06-25', 'male', 'pragushpathi@gmail.com', '9876543216'), ('Swetha', '', 8, '2004-12-19', 'female', 'swetha@gmail.com', '9876543217'), ('Pavithra', '', 9, '2004-08-03', 'female', 'pavithra@gmail.com', '9876543218'), ('Ragavi', '', 10, '2003-04-11', 'female', 'ragavi@gmail.com', '9876543219');

INSERT INTO course (course_id, course_name, credits, dept_id) VALUES (101, 'Data Structures', 4, 1), (102, 'Database Management System', 3, 1), (103, 'Circuits', 3, 3), (104, 'Structural Analysis', 3, 4), (105, 'Genetics', 4, 5), (106, 'Cloud Computing', 3, 6), (107, 'Software Engineering', 3, 7), (108, 'Circuits', 4, 8), (109, 'Deep Learning', 3, 9), (110, 'Machine Learning', 3, 10);


INSERT INTO department (dept_id, dept_name) VALUES (1, 'Computer Science'), (2, 'Mechanical Engineering'), (3, 'Electrical Engineering'), (4, 'Civil Engineering'), (5, 'Biotechnology'), (6, 'Computer Technology'), (7, 'Information Technology'), (8, 'Electronics Engineering'), (9, 'Artificial Intelligence and Data Science'), (10, 'Artificial Intelligence and Machine Learning');

INSERT INTO grade (id, course_id, grade, semester, year) VALUES (1, 101, 'A', '1', 2021), (2, 102, 'B', '2', 2021), (3, 103, 'C', '3', 2022), (4, 104, 'A', '2', 2022), (5, 105, 'B', '4', 2023), (6, 106, 'C', '3', 2022), (7, 107, 'A', '5', 2023), (8, 108, 'B', '6', 2023), (9, 109, 'D', '2', 2021), (10, 110, 'A', '1', 2021);

INSERT INTO address (id, address, district, state, country) VALUES (1, '123 Main St', 'Bangalore', 'Karnataka', 'India'), (2, '456 Park Ave', 'Chennai', 'Tamil Nadu', 'India'), (3, '789 Lake Rd', 'Hyderabad', 'Telangana', 'India'), (4, '321 Hill St', 'Pune', 'Maharashtra', 'India'), (5, '654 Ocean Dr', 'Mumbai', 'Maharashtra', 'India'), (6, '987 River Ln', 'Kolkata', 'West Bengal', 'India'), (7, '111 Sun St', 'Delhi', 'Delhi', 'India'), (8, '222 Moon Rd', 'Jaipur', 'Rajasthan', 'India'), (9, '333 Star Ln', 'Lucknow', 'Uttar Pradesh', 'India'), (10, '444 Cloud Dr', 'Bhopal', 'Madhya Pradesh', 'India');

```
