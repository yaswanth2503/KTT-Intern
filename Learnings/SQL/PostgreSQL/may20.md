# May 20, 2025

# Created a Student Database in PostgreSQL
# Now Inserting remaining data into the tables

1.Inserting data into the tables
```sql
INSERT INTO course (course_id, course_name, credits, dept_id) VALUES 
(111, 'Operating Systems', 4, 1), (112, 'Computer Networks', 3, 1), (113, 'Algorithms', 4, 1), (114, 'Object Oriented Programming', 3, 1), (115, 'Compiler Design', 4, 1),
(116, 'Thermodynamics', 4, 2), (117, 'Fluid Mechanics', 3, 2), (118, 'Strength of Materials', 3, 2), (119, 'Machine Design', 4, 2), (120, 'Heat Transfer', 3, 2),
(121, 'Electromagnetic Fields', 3, 3), (122, 'Control Systems', 4, 3), (123, 'Power Systems', 3, 3), (124, 'Digital Electronics', 3, 3), (125, 'Electrical Machines Lab', 2, 3),
(126, 'Concrete Technology', 3, 4), (127, 'Geotechnical Engineering', 4, 4), (128, 'Transportation Engineering', 3, 4), (129, 'Surveying', 3, 4), (130, 'Environmental Engineering', 4, 4),
(131, 'Microbiology', 3, 5), (132, 'Bioprocess Engineering', 4, 5), (133, 'Cell Biology', 3, 5), (134, 'Molecular Biology', 4, 5), (135, 'Immunology', 3, 5),
(136, 'Cybersecurity Fundamentals', 4, 6), (137, 'Mobile App Development', 3, 6), (138, 'Internet of Things', 3, 6), (139, 'System Programming', 4, 6), (140, 'Virtualization Techniques', 3, 6),
(141, 'Information Security', 4, 7), (142, 'Web Technologies', 3, 7), (143, 'Data Warehousing and Mining', 4, 7), (144, 'IT Infrastructure Management', 3, 7), (145, 'Human Computer Interaction', 3, 7),
(146, 'Analog Electronics', 3, 8), (147, 'Digital Signal Processing', 4, 8), (148, 'Embedded Systems', 4, 8), (149, 'Microcontrollers', 3, 8), (150, 'Electronic Circuits Lab', 2, 8),
(151, 'Natural Language Processing', 4, 9), (152, 'Big Data Analytics', 3, 9), (153, 'Reinforcement Learning', 4, 9), (154, 'AI Ethics', 3, 9), (155, 'Data Visualization', 3, 9),
(156, 'Neural Networks', 4, 10), (157, 'Computer Vision', 4, 10), (158, 'Pattern Recognition', 3, 10), (159, 'AI in Robotics', 3, 10), (160, 'AI Algorithms', 4, 10);


INSERT INTO student (firstame, middlename, dept_id, dob, gender, email, phone_number) VALUES 
('Ravi', '', 2, '2003-06-15', 'male', 'ravi_mech@gmail.com', '9876543220'),
('Karthik', 'Rajan', 2, '2003-03-11', 'male', 'karthik_mech@gmail.com', '9876543221'),
('Sathish', '', 2, '2003-07-29', 'male', 'sathish_mech@gmail.com', '9876543222'),
('Naveen', 'Raj', 2, '2003-12-01', 'male', 'naveen_mech@gmail.com', '9876543223'),
('Bharath', '', 2, '2003-08-17', 'male', 'bharath_mech@gmail.com', '9876543224'),
('Gokul', '', 2, '2003-09-10', 'male', 'gokul_mech@gmail.com', '9876543225'),
('Vijay', 'Kumar', 2, '2003-04-27', 'male', 'vijay_mech@gmail.com', '9876543226'),
('Suresh', '', 2, '2003-10-30', 'male', 'suresh_mech@gmail.com', '9876543227'),
('Kavin', '', 2, '2003-05-06', 'male', 'kavin_mech@gmail.com', '9876543228'),

('Ramesh', '', 3, '2003-01-12', 'male', 'ramesh_eee@gmail.com', '9876543230'),
('Deepa', '', 3, '2003-03-14', 'female', 'deepa_eee@gmail.com', '9876543231'),
('Anand', 'Raj', 3, '2003-08-25', 'male', 'anand_eee@gmail.com', '9876543232'),
('Kavitha', '', 3, '2003-09-19', 'female', 'kavitha_eee@gmail.com', '9876543233'),
('Manoj', '', 3, '2003-04-18', 'male', 'manoj_eee@gmail.com', '9876543234'),
('Divya', '', 3, '2003-10-05', 'female', 'divya_eee@gmail.com', '9876543235'),
('Vimal', 'Kumar', 3, '2003-11-16', 'male', 'vimal_eee@gmail.com', '9876543236'),
('Kiran', '', 3, '2003-12-07', 'male', 'kiran_eee@gmail.com', '9876543237'),
('Meena', '', 3, '2003-06-23', 'female', 'meena_eee@gmail.com', '9876543238'),


('Surya', '', 4, '2003-01-10', 'male', 'surya_civil@gmail.com', '9876543240'),
('Hari', 'Prasad', 4, '2003-02-11', 'male', 'hari_civil@gmail.com', '9876543241'),
('Bala', '', 4, '2003-07-09', 'male', 'bala_civil@gmail.com', '9876543242'),
('Mithun', '', 4, '2003-11-12', 'male', 'mithun_civil@gmail.com', '9876543243'),
('Sanjay', 'Kumar', 4, '2003-05-14', 'male', 'sanjay_civil@gmail.com', '9876543244'),
('Jaya', '', 4, '2003-03-15', 'female', 'jaya_civil@gmail.com', '9876543245'),
('Rekha', '', 4, '2003-04-20', 'female', 'rekha_civil@gmail.com', '9876543246'),
('Vinoth', '', 4, '2003-06-22', 'male', 'vinoth_civil@gmail.com', '9876543247'),
('Radha', '', 4, '2003-12-25', 'female', 'radha_civil@gmail.com', '9876543248'),

('Saravanan', '', 5, '2003-01-01', 'male', 'saravanan_bio@gmail.com', '9876543250'),
('Latha', '', 5, '2003-02-02', 'female', 'latha_bio@gmail.com', '9876543251'),
('Pravin', 'Kumar', 5, '2003-03-03', 'male', 'pravin_bio@gmail.com', '9876543252'),
('Keerthi', '', 5, '2003-04-04', 'female', 'keerthi_bio@gmail.com', '9876543253'),
('Swaminathan', '', 5, '2003-05-05', 'male', 'swami_bio@gmail.com', '9876543254'),
('Megha', '', 5, '2003-06-06', 'female', 'megha_bio@gmail.com', '9876543255'),
('Vidhya', '', 5, '2003-07-07', 'female', 'vidhya_bio@gmail.com', '9876543256'),
('Ragul', '', 5, '2003-08-08', 'male', 'ragul_bio@gmail.com', '9876543257'),
('Nithya', '', 5, '2003-09-09', 'female', 'nithya_bio@gmail.com', '9876543258'),

INSERT INTO student (firstame, middlename, dept_id, dob, gender, email, phone_number) VALUES 

('Aravind', '', 6, '2003-01-10', 'male', 'aravind_ct@gmail.com', '9876543260'),
('Vikram', 'Raja', 6, '2003-03-15', 'male', 'vikram_ct@gmail.com', '9876543261'),
('Harish', '', 6, '2003-04-19', 'male', 'harish_ct@gmail.com', '9876543262'),
('Sathya', '', 6, '2003-06-12', 'male', 'sathya_ct@gmail.com', '9876543263'),
('Bhavya', '', 6, '2003-09-23', 'female', 'bhavya_ct@gmail.com', '9876543264'),
('Krishna', 'Mohan', 6, '2003-11-04', 'male', 'krishna_ct@gmail.com', '9876543265'),
('Aishwarya', '', 6, '2003-05-26', 'female', 'aish_ct@gmail.com', '9876543266'),
('Gautham', '', 6, '2003-08-11', 'male', 'gautham_ct@gmail.com', '9876543267'),
('Revathi', '', 6, '2003-12-28', 'female', 'revathi_ct@gmail.com', '9876543268'),

('Pradeep', '', 7, '2003-01-05', 'male', 'pradeep_it@gmail.com', '9876543270'),
('Sivakumar', '', 7, '2003-03-16', 'male', 'siva_it@gmail.com', '9876543271'),
('Priya', 'Anand', 7, '2003-06-21', 'female', 'priya_it@gmail.com', '9876543272'),
('Rahul', '', 7, '2003-09-30', 'male', 'rahul_it@gmail.com', '9876543273'),
('Shruthi', '', 7, '2003-05-12', 'female', 'shruthi_it@gmail.com', '9876543274'),
('Kishore', '', 7, '2003-10-09', 'male', 'kishore_it@gmail.com', '9876543275'),
('Lavanya', 'Sree', 7, '2003-04-14', 'female', 'lavanya_it@gmail.com', '9876543276'),
('Nandakumar', '', 7, '2003-07-17', 'male', 'nanda_it@gmail.com', '9876543277'),
('Pooja', '', 7, '2003-11-11', 'female', 'pooja_it@gmail.com', '9876543278'),

('Sandeep', '', 8, '2003-02-24', 'male', 'sandeep_ece@gmail.com', '9876543280'),
('Kavya', '', 8, '2003-05-01', 'female', 'kavya_ece@gmail.com', '9876543281'),
('Yogesh', 'Kumar', 8, '2003-07-04', 'male', 'yogesh_ece@gmail.com', '9876543282'),
('Nisha', '', 8, '2003-09-15', 'female', 'nisha_ece@gmail.com', '9876543283'),
('Rajesh', '', 8, '2003-11-20', 'male', 'rajesh_ece@gmail.com', '9876543284'),
('Anitha', '', 8, '2003-12-10', 'female', 'anitha_ece@gmail.com', '9876543285'),
('Srinath', '', 8, '2003-06-03', 'male', 'srinath_ece@gmail.com', '9876543286'),
('Pavani', '', 8, '2003-08-08', 'female', 'pavani_ece@gmail.com', '9876543287'),
('Varun', 'Raja', 8, '2003-03-27', 'male', 'varun_ece@gmail.com', '9876543288'),


('Tejas', '', 9, '2003-01-01', 'male', 'tejas_aiml@gmail.com', '9876543290'),
('Meera', '', 9, '2003-02-15', 'female', 'meera_aiml@gmail.com', '9876543291'),
('Rithik', 'Krishna', 9, '2003-03-03', 'male', 'rithik_aiml@gmail.com', '9876543292'),
('Sneha', '', 9, '2003-04-04', 'female', 'sneha_aiml@gmail.com', '9876543293'),
('Aditya', '', 9, '2003-05-05', 'male', 'aditya_aiml@gmail.com', '9876543294'),
('Divakar', '', 9, '2003-06-06', 'male', 'divakar_aiml@gmail.com', '9876543295'),
('Keerthana', '', 9, '2003-07-07', 'female', 'keerthana_aiml@gmail.com', '9876543296'),
('Ritika', '', 9, '2003-08-08', 'female', 'ritika_aiml@gmail.com', '9876543297'),
('Sahil', '', 9, '2003-09-09', 'male', 'sahil_aiml@gmail.com', '9876543298'),


('Ajay', '', 10, '2003-01-21', 'male', 'ajay_aiml@gmail.com', '9876543300'),
('Jothi', '', 10, '2003-02-22', 'female', 'jothi_aiml@gmail.com', '9876543301'),
('Renu', '', 10, '2003-03-23', 'female', 'renu_aiml@gmail.com', '9876543302'),
('Arjun', 'Das', 10, '2003-04-24', 'male', 'arjun_aiml@gmail.com', '9876543303'),
('Devi', '', 10, '2003-05-25', 'female', 'devi_aiml@gmail.com', '9876543304'),
('Yuvan', '', 10, '2003-06-26', 'male', 'yuvan_aiml@gmail.com', '9876543305'),
('Ramya', '', 10, '2003-07-27', 'female', 'ramya_aiml@gmail.com', '9876543306'),
('Saranya', 'Lakshmi', 10, '2003-08-28', 'female', 'saranya_aiml@gmail.com', '9876543307'),
('Mahesh', '', 10, '2003-09-29', 'male', 'mahesh_aiml@gmail.com', '9876543308');


INSERT INTO grade (id, course_id, grade, semester, year) VALUES
(1, 111, 'A', 1, 2023), (2, 112, 'B', 1, 2023), (3, 113, 'A', 1, 2023), (4, 114, 'C', 1, 2023), (5, 115, 'B', 1, 2023),
(6, 116, 'A', 2, 2023), (7, 117, 'B', 2, 2023), (8, 118, 'C', 2, 2023), (9, 119, 'A', 2, 2023), (10, 120, 'B', 2, 2023),
(11, 121, 'B', 1, 2024), (12, 122, 'A', 1, 2024), (13, 123, 'C', 1, 2024), (14, 124, 'B', 1, 2024), (15, 125, 'A', 1, 2024),
(16, 126, 'B', 2, 2024), (17, 127, 'A', 2, 2024), (18, 128, 'C', 2, 2024), (19, 129, 'B', 2, 2024), (20, 130, 'A', 2, 2024),
(21, 131, 'C', 1, 2025), (22, 132, 'B', 1, 2025), (23, 133, 'A', 1, 2025), (24, 134, 'B', 1, 2025), (25, 135, 'C', 1, 2025),
(26, 136, 'A', 2, 2025), (27, 137, 'B', 2, 2025), (28, 138, 'C', 2, 2025), (29, 139, 'A', 2, 2025), (30, 140, 'B', 2, 2025),
(31, 141, 'A', 1, 2023), (32, 142, 'C', 1, 2023), (33, 143, 'B', 1, 2023), (34, 144, 'A', 1, 2023), (35, 145, 'B', 1, 2023),
(36, 146, 'C', 2, 2023), (37, 147, 'B', 2, 2023), (38, 148, 'A', 2, 2023), (39, 149, 'B', 2, 2023), (40, 150, 'C', 2, 2023),
(41, 151, 'A', 1, 2024), (42, 152, 'B', 1, 2024), (43, 153, 'A', 1, 2024), (44, 154, 'C', 1, 2024), (45, 155, 'B', 1, 2024),
(46, 156, 'A', 2, 2024), (47, 157, 'B', 2, 2024), (48, 158, 'C', 2, 2024), (49, 159, 'A', 2, 2024), (50, 160, 'B', 2, 2024);


```

2.List students who have received the same grade in more than one course.

```sql
select s.firstame ,count(g.grade) from student s join grade g on s.id=g.id  group by g.grade,s.firstame,s.id having count(g.grade)>1;
```

3.Find the number of distinct students per department who have taken at least one course.

```sql
select d.dept_id,d.dept_name,count(distinct s.id) as no_of_students from student s join department d on s.dept_id=d.dept_id join course c on d.dept_id=c.dept_id group by d.dept_id,d.dept_name having count(c.course_id)>=1;
```

4.Which department offers the most number of courses?

```sql
with temp as
( select d.dept_id,d.dept_name,count(c.course_id) as max_count_course from department d join course c on d.dept_id=c.dept_id   group by d.dept_id,d.dept_name)
 select dept_name,max_count_course from temp where max_count_course=(select max(max_count_course) from temp);
```

5.List all courses where no student has received a grade of 'A'.

```sql
select course_id,course_name from course where course_id not in(select course_id from grade where grade='A');
```

6.List all students who have received every grade from A to F at least once.

```sql
select s.firstname from student s join grade g on s.id=g.id group by s.id,s.firstname having count(distinct g.grade)=6;
```

7.List all students who have received every grade from A to F at least once.

```sql
select s.firstname from student s join grade g on s.id=g.id group by s.id,s.firstname having count(distinct g.grade)=6;
```

8.List all students along with their department names.

```sql
 select s.firstname,d.dept_name from student s join department d on s.dept_id=d.dept_id ;
```

9.Find all students who have not been assigned any address yet.

```sql 
 select s.firstname from student s join address a on s.id=a.id where address is null limit 10;
```

10.Retrieve the list of students and their corresponding grades for the course 'Data Structures'

```sql
select s.firstname,d.dept_name,c.course_name,g.grade from student s join department d on s.dept_id=d.dept_id join course c on d.dept_id=c.dept_id join grade g on s.id=g.id where c.course_name='Data Structures' ;
```

11.List each course and the number of students enrolled in it (i.e., having a grade entry).

```sql 
select d.dept_name,count(c.course_id) from department d join course c on d.dept_id=c.dept_id group by d.dept_name limit 20;
```

12.Get all students who scored an 'A' grade in more than 2 courses.

```sql
select s.firstname,count(g.grade) filter (where g.grade='A') as A_count from student s join grade g on s.id=g.id group by s.firstname having count(g.grade) filter (where g.grade='A')>2;
```

13.Find the department with the highest number of students.

```sql
with temp as (select d.dept_name as dept_name,count(s.id) as dept_count from student s join department d on s.dept_id=d.dept_id group by d.dept_name) select dept_name,dept_count from temp where dept_count=(select max(dept_count) from temp);
```

14.List all students who have received the same grade in at least 2 different courses

```sql
 select s.firstname,count(g.grade) as grade_count from student s join grade g on s.id=g.id group by s.firstname,g.grade having count(g.grade)>=2;
```

15.List the top 3 students (by number of A grades) across all departments.

```sql
 with temp as(select s.firstname,d.dept_name,count(*) filter (where g.grade='A') as a_count from student s join department d on s.dept_id=d.dept_id join grade g on s.id=g.id group by s.firstname,s.id,d.dept_name) ,  ranked as(select firstname,dept_name,a_count,dense_rank() over(partition by dept_name order by a_count desc) as rank from temp) select firstname,dept_name,rank from ranked where rank<=3;
```

# Started to solve problems on leetcode platform [reference](https://leetcode.com/problemset/database/)

16.Article Views I
* Write a solution to find all the authors that viewed at least one of their own articles.

```sql
select distinct author_id as id from views where author_id=viewer_id;
```

17.Market Analysis I
* Write a solution to find for each user, the join date and the number of orders they made as a buyer in 2019

```sql
WITH TEMP AS (SELECT * FROM orders
WHERE order_date BETWEEN '2019-01-01' AND '2019-12-31')

SELECT u.user_id AS buyer_id, u.join_date, COUNT(t.buyer_id) AS orders_in_2019 FROM users u
LEFT JOIN temp t
ON u.user_id = t.buyer_id
GROUP BY u.user_id, u.join_date
```


# Worked Out String Functions 

```sql
select format('%s %s',firstname,middlename) as fullname from student;

select format('%s',round(3.43534,2));

select length('yahs7434./=-`');

select char_length('🤬');

SELECT length(E'\\xDEADBEEF'::bytea);

SELECT char_length(E'\\xDEADBEEF'::bytea); -- error

SELECT INITCAP('hello world');

select concat(firstname,' ',middlename) from student;

select firstname || ' ' || middlename from student;

select substring(firstname from 1 for 2) from student limit 5;

select left('Postgresql',4);

select right('Postgresql',4);

select trim('    yash    ');

select trim(leading from'    yash    ');

select trim(trailing from'    yash    ');

select replace(firstname,'yaswanth','yash') from student where id=2;

with temp as (select firstname || ' ' || middlename as fullname from student where id=1) select replace(fullname,'Selvam','Bro') from temp;

select replace('I am Yash','Yash','Yaswanth');

select reverse(firstname) from student limit 5;

select reverse('6264874');

select overlay(firstname placing 'CSE' FROM 1) FROM STUDENT;

select overlay(gender placing 'm' from 1) from student where dept_id=2;

select overlay(gender placing 'm' from 1) from student where dept_id=1;

select overlay(gender placing 'cse' from 1 for 2) from student where dept_id=1;

select overlay('abcdef' placing '123' from 1 for 2);

select overlay('abcdef' placing '123' from 1 for 10);

select overlay(firstname placing 'cse' from 1 for 30) from student where dept_id=1;

select count(grade) filter (where grade='A') from grade group by grade having count(grade)=6;

select id,count(grade) filter (where grade='A') from grade group by grade,id having count(grade)=1;

select id,count(grade) filter (where grade='B') from grade group by grade,id having count(grade)=1;

```









