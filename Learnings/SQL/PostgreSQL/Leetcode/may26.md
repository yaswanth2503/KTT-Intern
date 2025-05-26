## May 26 2025

## Solving Problems in Leetcode Platform
Source: https://leetcode.com/problem-list/database/

1. 1934. Confirmation Rate
* creation of signups and confirmations table
```sql
create table signups(user_id int,time_stamp timestamp);
alter table signups add constraint confirmations_pk primary key(user_id);
create type actions as enum('confirmed','timeout');
create table confirmations(user_id int,time_stamp timestamp,action actions,primary key(user_id,time_stamp),constraint fk_userid_signups foreign key(user_id) references signups(user_id));
```
* Insertion of data into signups and confirmations table
```sql
 INSERT INTO signups (user_id, time_stamp) VALUES (3, '2020-03-21 10:16:13'), (7, '2020-01-04 13:57:59'), (2, '2020-07-29 23:09:44'), (6, '2020-12-09 10:39:37');

INSERT INTO confirmations (user_id, time_stamp, action) VALUES (3, '2021-01-06 03:30:46', 'timeout'), (3, '2021-07-14 14:00:00', 'timeout'), (7, '2021-06-12 11:57:29', 'confirmed'), (7, '2021-06-13 12:58:28', 'confirmed'), (7, '2021-06-14 13:59:27', 'confirmed'), (2, '2021-01-22 00:00:00', 'confirmed'), (2, '2021-02-28 23:59:59', 'timeout');
```
* The confirmation rate of a user is the number of 'confirmed' messages divided by the total number of requested confirmation messages. The confirmation rate of a user that did not request any confirmation messages is 0. Round the confirmation rate to two decimal places.Write a solution to find the confirmation rate of each user.
```sql
    select s.user_id,
    round(avg(case when action='confirmed' then 1 else 0 end),2)
    as confirmation_rate from signups s
    left join confirmations c
    on s.user_id=c.user_id
    group by s.user_id;
```
<br>

2. 1965. Employees With Missing Information
* creation of employees1965 and salaries1965 table
```sql
create table employees1965 (employee_id int, name text);
create table salaries1965 (employee_id int, salary int);
```
* Insertion of data into employees1965 and salaries1965 table
```sql
 insert into employees1965 values (2, 'crew'), (4, 'haven'), (5, 'kristian');
 insert into salaries1965 values (5, 76071), (1, 22517), (4, 63539);
```
* Write a solution to report the IDs of all the employees with missing information. The information of an employee is missing if: The employee's name is missing, or The employee's salary is missing.
```sql
select coalesce(e.employee_id,s.employee_id) as employee_id from employees1965 e
 full outer join salaries1965 s
on e.employee_id=s.employee_id
where e.name is null or s.salary is null
order by employee_id asc
```
<br>

3. 1978. Employees Whose Manager Left the Company
* creation of employees1978 table
```sql
create table employees1978 (employee_id int, name varchar, manager_id int, salary int)
```
* Insertion of data into employees1978 table
```sql
insert into employees1978 values (3, 'mila', 9, 60301), (12, 'antonella', null, 31000), (13, 'emery', null, 67084), (1, 'kalel', 11, 21241), (9, 'mikaela', null, 50937), (11, 'joziah', 6, 28485);
```
* Write a solution to report the names of all the employees whose manager left the company.
```sql
select e1.employee_id from employees1978 e1
join employees1978 e2
on e1.employee_id=e2.employee_id
 where e1.manager_id not in (select employee_id from employees1978)  and e1.salary<30000
 order by e1.employee_id;
```
<br>

4. 2356. Number of Unique Subjects Taught by Each Teacher
* creation of teacher table
```sql
  create table teacher (teacher_id int, subject_id int, dept_id int, primary key (subject_id, dept_id));
```
* Insertion of data into teacher table
```sql
  insert into teacher values (1, 2, 3), (1, 2, 4), (1, 3, 3), (2, 1, 1), (2, 2, 1), (2, 3, 1), (2, 4, 1);
```
* Write a solution to calculate the number of unique subjects each teacher teaches in the university. 
```sql
    select  teacher_id,count(distinct subject_id) as cnt from teacher
    group by teacher_id
```
<br>

5. 3220. Odd and Even Transactions
* creation of transactions3220 table
```sql
create table transactions3220 (transaction_id int, amount int, transaction_date date);
```
* Insertion of data into transactions3220 table
```sql
insert into transactions3220 values (1, 150, '2024-07-01'), (2, 200, '2024-07-01'), (3, 75, '2024-07-01'), (4, 300, '2024-07-02'), (5, 50, '2024-07-02'), (6, 120, '2024-07-03');
```
* Write a solution to find the sum of amounts for odd and even transactions for each day. If there are no odd or even transactions for a specific date, display as 0.
```sql
    select transaction_date,
    sum(case when amount%2=1  then amount else 0 end) as odd_sum,
    sum(case when amount%2=0  then amount else 0 end) as even_sum
    from transactions group by 1
    order by 1;
```
<br>

6. 180. Consecutive Numbers
* creation of logs table
```sql
create table logs(id serial primary key, num int);
```
* Insertion of data into logs table
```sql      
insert into logs values (1, '1'), (2, '1'), (3, '1'), (4, '2'), (5, '1'), (6, '2'), (7, '2');
```
* Find all numbers that appear at least three times consecutively.
``` sql 
    select distinct num as consecutivenums from 
    (select num,
    lead(num) over(order by id) as lead,
    lead(num,2) over(order by id) as lead2
    from logs)
    where num=lead and lead=lead2
```
<br>

7. 550. Game Play Analysis IV 
* creation of activity550 table
```sql
create table activity550(player_id int, device_id int, event_date date, games_played int);
```
* Insertion of data into activity550 table
```sql
insert into activity550 values (1,2,'2016-03-01',5),(1,2,'2016-03-02',6),(2,3,'2017-06-25',1),(3,1,'2016-03-02',0),(3,4,'2018-07-03',5);
```
* Write a solution to report the fraction of players that logged in again on the day after the day they first logged in, rounded to 2 decimal places. In other words, you need to count the number of players that logged in for at least two consecutive days starting from their first login date, then divide that number by the total number of players.
```sql
    select 
    round(count(player_id)::numeric/(select count(distinct player_id) from activity550),2)
    as fraction
    from activity550
    where (player_id,event_date) in
    (select player_id,min(event_date)+interval '1 day' from activity550 group by player_id)
```
<br>

8. 570. Managers with at Least 5 Direct Reports
creation of employee570 table
```sql
create table employee570(id int, name varchar, department varchar, managerid int);
```
* Insertion of data into employees570 table
```sql
insert into employee570 values (101, 'john', 'a', null), (102, 'dan', 'a', 101), (103, 'james', 'a', 101), (104, 'amy', 'a', 101), (105, 'anne', 'a', 101), (106, 'ron', 'b', 101);
```
* Write a solution to report the names of all the managers who have at least 5 direct reports.
```sql
select name from employee570 where id in (select managerId from employee570 group by managerId having count(*)>=5)
```
<br>

9. 585. Investments in 2016
* creation of insurance table
```sql
create table insurance (pid int primary key, tiv_2015 float, tiv_2016 float, lat float not null, lon float not null);
```
* Insertion of data into insurance table
```sql
insert into insurance (pid, tiv_2015, tiv_2016, lat, lon) values (1,10,5,10,10),(2,20,20,20,20),(3,10,30,20,20),(4,10,40,40,40);
```
* Write a solution to report the sum of all total investment values in 2016 tiv_2016, for all policyholders who:
have the same tiv_2015 value as one or more other policyholders, and are not located in the same city as any other policyholder (i.e., the (lat, lon) attribute pairs must be unique).
```sql
select round(sum(tiv_2016)::decimal,2) as tiv_2016 from insurance 
where (lat,lon)  in
 (select lat,lon from insurance group by lat,lon having count(*)=1)
and tiv_2015 in (select tiv_2015 from insurance group by tiv_2015 having count(*)>1)
```
<br>

10. 602. Friend Requests II: Who Has the Most Friends
* creation of requestaccepted table
```sql
  create table requestaccepted (requester_id int, accepter_id int, accept_date date);
```
* insertion of data into requestaccepted table
```sql
  insert into requestaccepted values (1,2,'2016-06-03'), (1,3,'2016-06-08'), (2,3,'2016-06-08'), (3,4,'2016-06-09');
```
* Write a solution to find the people who have the most friends and the most friends number.
```sql
    with cte as(select requester_id as id from requestaccepted 
    union all
    select accepter_id as id from requestaccepted)
    select id, count(id) as num from cte
    group by id order by num desc limit 1
```
<br>

11. 607. Sales Person
* creation of salesperson607 and company607 table
```sql
create table salesperson607(sales_id int primary key,name varchar(50),salary int,commission_rate int,hire_date date);

create table company607(com_id int primary key,name varchar(50),city varchar(50));

create table orders607(order_id int primary key,order_date date,com_id int,sales_id int,amount int,foreign key(com_id) references company607(com_id),foreign key(sales_id) references salesperson607(sales_id));
```
* Insertion of data into salesperson table
```sql
insert into salesperson607 values(1,'john',100000,6,'2006-04-01'),(2,'amy',12000,5,'2010-05-01'),(3,'mark',65000,12,'2008-12-25'),(4,'pam',25000,25,'2005-01-01'),(5,'alex',5000,10,'2007-02-03');

insert into company607 values(1,'red','boston'),(2,'orange','new york'),(3,'yellow','boston'),(4,'green','austin');

insert into orders607 values(1,'2014-01-01',3,4,10000),(2,'2014-02-01',4,5,5000),(3,'2014-03-01',1,1,50000),(4,'2014-04-01',1,4,25000);
```
* Write a solution to find the names of all the salespersons who did not have any orders related to the company with the name "RED".
```sql
    SELECT name 
    FROM SalesPerson
    WHERE sales_id NOT IN (
        SELECT sales_id 
        FROM Orders o 
        JOIN Company c ON o.com_id = c.com_id AND c.name = 'RED'
)
```
<br>

12. 1084. Sales Analysis III
* creation of sales1084 and product1084 table
```sql
create table product1084(product_id int primary key,product_name varchar(50),unit_price int);

create table sales1084(seller_id int,product_id int,buyer_id int,sale_date date,quantity int,price int);
```
* Insertion of data into sales1084 and product1084 table
```sql
insert into product1084 values(1,'s8',1000),(2,'g4',800),(3,'iphone',1400);

insert into sales1084 values(1,1,1,'2019-01-21',2,2000),(1,2,2,'2019-02-17',1,800),(2,2,3,'2019-06-02',1,800),(3,3,4,'2019-05-13',2,2800);
```
* Write a solution to report the products that were only sold in the first quarter of 2019. That is, between 2019-01-01 and 2019-03-31 inclusive.
```sql
    select distinct p.product_id,p.product_name from product1084 p
left join sales1084 s on p.product_id=s.product_id
where sale_date between '2019-01-01' and '2019-03-31'
and p.product_id not in (select distinct product_id from sales1084 where sale_date>'2019-03-31' or sale_date<'2019-01-01')

```
<br>

13. 1141. User Activity for the Past 30 Days I
* creation of activity1141 table
```sql
  create table activity(user_id int,session_id int,activity_date date,activity_type varchar(20)); 
```
* Insertion of data into activity1141 table
```sql      
   insert into activity1141 values (1,1,'2019-07-20','open_session'),(1,1,'2019-07-20','scroll_down'),(1,1,'2019-07-20','end_session'),(2,4,'2019-07-20','open_session'),(2,4,'2019-07-21','send_message'),(2,4,'2019-07-21','end_session'),(3,2,'2019-07-21','open_session'),(3,2,'2019-07-21','send_message'),(3,2,'2019-07-21','end_session'),(4,3,'2019-06-25','open_session'),(4,3,'2019-06-25','end_session');
```
* Write a solution to find the daily active user count for a period of 30 days ending 2019-07-27 inclusively. A user was active on someday if they made at least one activity on that day.
```sql
select activity_date as day ,Count(distinct user_id) active_users
from Activity
where activity_date between '2019-06-28' and '2019-07-27'
group by activity_date
```
 
14. 1164. Product Price at a Given Date
* creation of product1164 table
```sql
create table products1164 (product_id int, new_price int, change_date date, primary key (product_id, change_date));
```
* Insertion of data into product1164 table
```sql
insert into products1164 (product_id, new_price, change_date) values (1, 20, '2019-08-14'), (2, 50, '2019-08-14'), (1, 30, '2019-08-15'), (1, 35, '2019-08-16'), (2, 65, '2019-08-17'), (3, 20, '2019-08-18');
```
* Write a solution to find the prices of all products on 2019-08-16. Assume the price of all products before any change is 10.
```sql
    with cte as (
        select product_id, new_price as price
        from (
            select *, rank() over (partition by product_id order by change_date desc) as rnk
            from products1164
            where change_date <= '2019-08-16'
        ) sub
        where rnk = 1
    )
    select p.product_id, coalesce(c.price, 10) as price
    from (select distinct product_id from products1164) p
    left join cte c on p.product_id = c.product_id;

```
<br>

15. 1484. Group Sold Products By The Date
* creation of activities table
```sql
create table Activities (sell_date date, product varchar); 
```
* Insertion of data into activities table
```sql  
insert into Activities values ('2020-05-30','Headphone'),('2020-06-01','Pencil'),('2020-06-02','Mask'),('2020-05-30','Basketball'),('2020-06-01','Bible'),('2020-06-02','Mask'),('2020-05-30','T-Shirt');
```
* Write a solution to find for each date the number of different products sold and their names.
```sql
    select sell_date,
    count(distinct product) as num_sold,string_agg(distinct product,',' order by product) as products 
    from activities group by 1 
    order by 1;
```
<br>

16. 3465. Find Products with Valid Serial Numbers
* creation of products3465 table
```sql
create table products3465(product_id int primary key, product_name varchar(100), description varchar(255));
```
* Insertion of data into products3465 table
```sql
insert into products3465 values(1,'Widget A','This is a sample product with SN1234-5678'),(2,'Widget B','A product with serial SN9876-1234 in the description'),(3,'Widget C','Product SN1234-56789 is available now'),(4,'Widget D','No serial number here'),(5,'Widget E','Check out SN4321-8765 in this description');
```
* Write a solution to find all products whose description contains a valid serial number pattern. A valid serial number follows these rules:
It starts with the letters SN (case-sensitive).
Followed by exactly 4 digits.
It must have a hyphen (-) followed by exactly 4 digits.
The serial number must be within the description (it may not necessarily start at the beginning).   
```sql
select * from products345 where regexp_like(description,'( |^)SN[0-9]{4}-[0-9]{4}( |$)')
ORDER BY product_id;
```
<br>

17. 1667. Fix Names in a Table
* creation of users1667 table
```sql
create table users1667(user_id int,name varchar);
```
* Insertion of data into users1667 table
```sql
 insert into users1667 values (1, 'aLice'), (2, 'bOB');
```
* Write a solution to fix the names so that only the first character is uppercase and the rest are lowercase.
```sql
select user_id,
upper(substring(name from 1 for 1)) || lower(substring(name from 2)) as name 
from users order by 1
```
<br>

