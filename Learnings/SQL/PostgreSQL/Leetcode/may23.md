## May 23 2025

## Solving Problems in Leetcode Platform
Source: https://leetcode.com/problem-list/database/

1. 1581. Customer Who Visited but Did Not Make Any Transactions
* Creation of visits and transactions table
```sql
create table visits (visit_id int primary key, customer_id int);

create table transactions (transaction_id int primary key, visit_id int, amount int);
```
* Insertion of data into visits and transactions table
```sql
 insert into visits values (1,23),(2,9),(4,30),(5,54),(6,96),(7,54),(8,54);

 insert into transactions values (2,5,310),(3,5,300),(9,5,200),(12,1,910),(13,2,970);
```
* Write a solution to find the IDs of the users who visited without making any transactions and the number of times they made these types of visits.
```sql
    select v.customer_id,count(v.customer_id) as count_no_trans from visits v
    left join transactions t 
    on v.visit_id=t.visit_id
    where t.transaction_id is null
    group by v.customer_id;
```
<br>

2. 1587. Bank Account Summary II
* creation of users1587 and transactions1587 table
```sql

```
* Insertion of data into users1587 and transactions1587 table
```sql

```
* Write a solution to report the name and balance of users with a balance higher than 10000. The balance of an account is equal to the sum of the amounts of all transactions involving that account.
```sql
    select u.name,sum(t.amount) as balance from users u
    join transactions t
    on u.account=t.account
    group by u.name
    having sum(t.amount)>10000;
```
<br>

3. 1633. Percentage of Users Attended a Contest
* creation of users1633 and register1633 table
```sql

```
* Insertion of data into users1633 and register1633 table
```sql

```
* Write a solution to find the percentage of users who attended the contest.
```sql
with cte as (
    select r.contest_id as contest_id,
    round((count(r.contest_id)*1.0/(select count(*) from users))*100.0,2) as percentage
    from register r
    join users u 
    on r.user_id=u.user_id
    group by  r.contest_id
    order by percentage desc,r.contest_id asc
)
select contest_id,percentage from cte;
```
<br>

4. 1661. Average Time of Process per Machine
* creation of activity1661 table
```sql
create type activity_enum as enum ('start','end');

 create table activity1661 (machine_id int, process_id int, activity_type activity_enum, timestamp float, primary key (machine_id, process_id, activity_type));
```
* Insertion of data into activity1661 table
```sql
insert into activity1661 values (0,0,'start',0.712),(0,0,'end',1.520),(0,1,'start',3.140),(0,1,'end',4.120),(1,0,'start',0.550),(1,0,'end',1.550),(1,1,'start',0.430),(1,1,'end',1.420),(2,0,'start',4.100),(2,0,'end',4.512),(2,1,'start',2.500),(2,1,'end',5.000);
```
* Write a solution to find the average time each machine takes to complete a process.

The time to complete a process is the 'end' timestamp minus the 'start' timestamp. The average time is calculated by the total time to complete every process on the machine divided by the number of processes that were run.

The resulting table should have the machine_id along with the average time as processing_time, which should be rounded to 3 decimal places.
```sql
WITH cte AS (
    SELECT 
        machine_id, 
        process_id, 
        MAX(timestamp) FILTER (WHERE activity_type = 'end') AS ed, 
        MAX(timestamp) FILTER (WHERE activity_type = 'start') AS st
    FROM activity
    GROUP BY machine_id, process_id
)
SELECT 
    machine_id, 
    ROUND(AVG(ed - st) ::numeric, 3) AS processing_time
FROM cte
GROUP BY machine_id;

```
<br>

5. 1667. Fix Names in a Table
* creation of users1667 table
```sql
create table users1667(user_id int,name varchar);
```
* Insertion of data into users1667 table
```sql
 insert into users1667 values (1, 'aLice'), (2, 'bOB');
```
* Write a solution to fix the names in the table. The names should be fixed by replacing all the spaces with underscores and all the underscores with spaces.
```sql
select user_id,
upper(substring(name from 1 for 1)) || lower(substring(name from 2)) as name 
from users1667 ;
```
<br>

6. 1683. Invalid Tweets
* creation of tweets table
```sql
create table tweets (tweet_id int primary key, content varchar);
```
* Insertion of data into tweets table
```sql
insert into tweets values (1, 'Let us Code'), (2, 'More than fifteen chars are here!');
```
* Write a solution to find the IDs of the invalid tweets. The tweet is invalid if the number of characters used in the content of the tweet is strictly greater than 15.
```sql
select tweet_id from tweets where char_length(content)>15;
```

7. 1693. Daily Leads and Partners
* creation of dailysales table
```sql
create table dailysales (date_id date, make_name varchar, lead_id int, partner_id int);
```
* Insertion of data into dailysales table
```sql
insert into dailysales values('2020-12-8','toyota',0,1),('2020-12-8','toyota',1,0),('2020-12-8','toyota',1,2),('2020-12-7','toyota',0,2),('2020-12-7','toyota',0,1),('2020-12-8','honda',1,2),('2020-12-8','honda',2,1),('2020-12-7','honda',0,1),('2020-12-7','honda',1,2),('2020-12-7','honda',2,1);
```
* Write a solution to report the daily sales of each product. The daily sales is the sum of the sales for each day in the month.
```sql
    select date_id,make_name,count(distinct lead_id) as unique_leads,
    count( distinct partner_id) as unique_partners
    from dailysales
    group by date_id,make_name,date_id;
 ```
<br>

8. 1729. Find Followers Count
* creation of followers table
```sql
create table followers(user_id int, follower_id int, primary key(user_id, follower_id));
```
* Insertion of data into followers table
```sql
insert into followers(user_id, follower_id) values (0, 1), (1, 0), (2, 0), (2, 1);
```
* Write a solution that will, for each user, return the number of followers.
```sql
select user_id,count(follower_id) as followers_count from followers group by user_id order by user_id;
```
<br>

9. 1731. The Number of Employees Which Report to Each Employee
* creation of employees1731 table
```sql
create table employees1731(employee_id int primary key, name varchar, reports_to int, age int);
```
* Insertion of data into employees1731 table
```sql       
 insert into employees1731(employee_id, name, reports_to, age) values (9, 'Hercy', null, 43), (6, 'Alice', 9, 41), (4, 'Bob', 9, 36), (2, 'Winston', null, 37);
```
* Write a solution to report the ids and the names of all managers, the number of employees who report directly to them, and the average age of the reports rounded to the nearest integer.
```sql
    select e1.employee_id,e1.name,count(*) as reports_count,
    round(avg(e2.age)) as average_age
    from employees e1 join employees e2 
    on e1.employee_id=e2.reports_to
    group by e1.name,e1.employee_id
    order by e1.employee_id;
```
<br>

10. 1741. Find Total Time Spent by Each Employee
* creation of employees1741 table
```sql
 create table employees1741(emp_id int,event_day date,in_time int,out_time int);
```
* Insertion of data into employees1741 table
```sql
 insert into employees1741 values(1,'2020-11-28',4,32),(1,'2020-11-28',55,200),(1,'2020-12-03',1,42),(2,'2020-11-28',3,33),(2,'2020-12-09',47,74);
```
* Write a solution to calculate the total time in minutes spent by each employee on each day at the office. Note that within one day, an employee can enter and leave more than once. The time spent in the office for a single entry is out_time - in_time.
```sql
with cte as(
select event_day as day ,emp_id,sum(out_time)-sum(in_time) as total_time
from employees group by event_day,emp_id
)
select day,emp_id,total_time from cte
```
<br>

11. 1789. Primary Department for Each Employee
* creation of employees1789 table
```sql
create table employees1789(employee_id int, department_id int, primary_flag varchar);
```
* Insertion of data into employees1789 table
```sql
insert into employees1789 values (1,1,'n'),(2,1,'y'),(2,2,'n'),(3,3,'n'),(4,2,'n'),(4,3,'y'),(4,4,'n');
```
* Write a solution to report all the employees with their primary department. For employees who belong to one department, report their only department.
```sql
select employee_id,department_id from employee1789 
where primary_flag='Y' or employee_id in(
    select employee_id from employee1789 group by employee_id
    having count(employee_id)=1
)
```

12. 1795. Rearrange Products Table
* creation of products1795 table
```sql
create table products1795(product_id int, store1 int, store2 int, store3 int);
```
* Insertion of data into products1795 table
```sql
insert into products1795 values(0,95,100,105),(1,70,null,80);
```
* Write a solution to rearrange the products table. The products table should be rearranged so that the products with the highest price are at the top, followed by the products with the second highest price, and so on.
```sql
    select product_id,store,price from
    (
        select product_id,
        unnest(array['store1','store2','store3']) as store,
        unnest(array[store1,store2,store3]) as price
        from products1795
        
    ) as unpivot
    where price is not null;

```
<br>

13. 1873. Calculate Special Bonus
* creation of employees1873 table
```sql
create table employees1873(employee_id int,name varchar,salary int);
```
* Insertion of data into employees1873 table
```sql
insert into employees1873 values (2,'Meir',3000), (3,'Michael',3800), (7,'Addilyn',7400), (8,'Juan',6100), (9,'Kannon',7700);
```
* Write a solution to calculate the bonus of each employee. The bonus of an employee is 100% of their salary if the ID of the employee is an odd number and the employee's name does not start with the character 'M'. The bonus of an employee is 0 otherwise.
```sql
    select employee_id,
    case when employee_id%2=1 and substring(name from 1 for 1)!='M' then salary
    else 0
    end as bonus
    from employees1873
    order by employee_id;
```

14. 1890. The Latest Login in 2020
* creation of logins1890 table
```sql
create table logins(user_id int, time_stamp timestamp);
```
* Insertion of data into logins1890 table
```sql
 insert into logins values (6, '2020-06-30 15:06:07'), (6, '2021-04-21 14:06:06'), (6, '2019-03-07 00:18:15'), (8, '2020-02-01 05:10:53'), (8, '2020-12-30 00:46:50'), (2, '2020-01-16 02:49:50'), (2, '2019-08-25 07:59:08'), (14, '2019-07-14 09:00:00'), (14, '2021-01-06 11:59:59');
```
* Write a solution to report the latest login for all users in the year 2020. Do not include the users who did not login in 2020.
```sql
     select  user_id,max(time_stamp) as last_stamp from logins where 
     date_part('year',time_stamp)='2020'
     group by user_id
```
<br>


