
## May 27, 2025

## Solving Problems in Leetcode Platform
Source: https://leetcode.com/problem-list/database/

1. 3421.Find Students Who Improved
* creation of scores table
```sql
create table scores(student_id int, subject varchar(50), score int, exam_date date, primary key(student_id, subject, exam_date));
```
* Insertion of data into scores table
```sql
insert into scores(student_id, subject, score, exam_date) values (101, 'math', 70, '2023-01-15'), (101, 'math', 85, '2023-02-15'), (101, 'physics', 65, '2023-01-15'), (101, 'physics', 60, '2023-02-15'), (102, 'math', 80, '2023-01-15'), (102, 'math', 85, '2023-02-15'), (103, 'math', 90, '2023-01-15'), (104, 'physics', 75, '2023-01-15'), (104, 'physics', 85, '2023-02-15');

```
* Write a solution to find the students who have shown improvement. A student is considered to have shown improvement if they meet both of these conditions:Have taken exams in the same subject on at least two different dates ,Their latest score in that subject is higher than their first score,Return the result table ordered by student_id, subject in ascending order
```sql
with cte as(
select distinct student_id,subject,
first_value(score) over(partition by student_id,subject order by exam_date) as firsts,
last_value(score) over(partition by student_id,subject order by exam_date ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) as lasts,
count(student_id) over(partition by student_id,subject) as diff_dates
from scores

)
select student_id,subject,firsts as first_score,lasts as latest_score from cte
where firsts<lasts and diff_dates>1
order by student_id,subject;
```
<br>

2. 3564.Seasonal Sales Analysis
creation of sales3564 and prodcuts3564 table
```sql
create table sales3564 (sale_id int, product_id int, sale_date date, quantity int, price decimal);

create table products3564 (product_id int, product_name varchar, category varchar);
```
* Insertion of data into sales3564 and products3564 table
```sql
insert into sales3564 values 
(1,1,'2023-01-15',5,10.00),(2,2,'2023-01-20',4,15.00),(3,3,'2023-03-10',3,18.00),
(4,4,'2023-04-05',1,20.00),(5,1,'2023-05-20',2,10.00),(6,2,'2023-06-12',4,15.00),
(7,5,'2023-06-15',5,12.00),(8,3,'2023-07-24',2,18.00),(9,4,'2023-08-01',5,20.00),
(10,5,'2023-09-03',3,12.00),(11,1,'2023-09-25',6,10.00),(12,2,'2023-11-10',4,15.00),
(13,3,'2023-12-05',6,18.00),(14,4,'2023-12-22',3,20.00),(15,5,'2024-02-14',2,12.00);

insert into products3564 values 
(1,'notebook','stationery'),(2,'pen','stationery'),(3,'headphones','electronics'),
(4,'monitor','electronics'),(5,'chair','furniture');
```
* Write a solution to find the most popular product category for each season. The seasons are defined as:
 Winter: December, January, February
 Spring: March, April, May
 Summer: June, July, August
 Fall: September, October, November
The popularity of a category is determined by the total quantity sold in that season. If there is a tie, select the category with the highest total revenue (quantity × price).
```sql
with cte as (select
case when extract(month from sale_date) in (1,2,12) then 'Winter'
when extract(month from sale_date) in (3,4,5) then 'Spring'
when extract(month from sale_date) in (6,7,8) then 'Summer'
when extract(month from sale_date) in (9,10,11) then 'Fall'
end as season,
            category,
            sum(quantity) as total_quantity,
            sum(quantity * price) as total_revenue
            from sales3564 s join products3564 p on s.product_id=p.product_id 
            group by 1,2
),
cte2 as(
SELECT season, category, total_quantity, total_revenue, 
RANK()OVER (PARTITION BY season ORDER BY total_quantity DESC, total_revenue DESC) AS rank
from cte)

select season, category, total_quantity, total_revenue FROM cte2
WHERE rank = 1 ORDER BY 1 asc;
```
<br>

3. 1174.Immediate Food Delivery II
* creation of delivery table
```sql
create table delivery(delivery_id int, customer_id int, order_date date, customer_pref_delivery_date date);
```
* Insertion of data into delivery table
```sql  
insert into delivery values (1,1,'2019-08-01','2019-08-02'),(2,2,'2019-08-02','2019-08-02'),(3,1,'2019-08-11','2019-08-12'),(4,3,'2019-08-24','2019-08-24'),(5,3,'2019-08-21','2019-08-22'),(6,2,'2019-08-11','2019-08-13'),(7,4,'2019-08-09','2019-08-09');
```
*If the customer's preferred delivery date is the same as the order date, then the order is called immediate; otherwise, it is called scheduled.

The first order of a customer is the order with the earliest order date that the customer made. It is guaranteed that a customer has precisely one first order.

Write a solution to find the percentage of immediate orders in the first orders of all customers, rounded to 2 decimal places.
```sql
select round(avg(
    case 
    when d.order_date=d.customer_pref_delivery_date then 1
    else 0
    end
) * 100, 2) as immediate_percentage
from Delivery d
where (customer_id, order_date) in (
    select d2.customer_id, min(d2.order_date)
    from Delivery d2
    group by d2.customer_id
)
```
<br>

4. 3497.Analyze Subscription Conversion 
* creation of useractivity table
```sql
create table useractivity(user_id int, activity_date date, activity_type varchar, activity_duration int);
```
* insertion of data into useractivity table
```sql
insert into useractivity values (1,'2023-01-01','free_trial',45),(1,'2023-01-02','free_trial',30),(1,'2023-01-05','free_trial',60),(1,'2023-01-10','paid',75),(1,'2023-01-12','paid',90),(1,'2023-01-15','paid',65),(2,'2023-02-01','free_trial',55),(2,'2023-02-03','free_trial',25),(2,'2023-02-07','free_trial',50),(2,'2023-02-10','cancelled',0),(3,'2023-03-05','free_trial',70),(3,'2023-03-06','free_trial',60),(3,'2023-03-08','free_trial',80),(3,'2023-03-12','paid',50),(3,'2023-03-15','paid',55),(3,'2023-03-20','paid',85),(4,'2023-04-01','free_trial',40),(4,'2023-04-03','free_trial',35),(4,'2023-04-05','paid',45),(4,'2023-04-07','cancelled',0);
```
* A subscription service wants to analyze user behavior patterns. The company offers a 7-day free trial, after which users can subscribe to a paid plan or cancel. Write a solution to:
Find users who converted from free trial to paid subscription
Calculate each user's average daily activity duration during their free trial period (rounded to 2 decimal places)
Calculate each user's average daily activity duration during their paid subscription period (rounded to 2 decimal places)
```sql
select user_id,trial_avg_duration,paid_avg_duration from(
select user_id,
round(avg(activity_duration) filter(where activity_type='free_trial'),2) as trial_avg_duration,
round(avg(activity_duration) filter(where activity_type='paid'),2) as paid_avg_duration
from useractivity 
group by user_id order by user_id asc)
where trial_avg_duration is not null and paid_avg_duration is not null
```

<br>

