## May 22 2025

## Solving Problems in Leetcode Platform
Source: https://leetcode.com/problem-list/database/

## Creation of Database 
```sql
create database leetcode template template0;
```

1.  1321.Restaurant Growth
* Creation of customer table
 ```sql
 create table if not exists customer (customer_id int,name varchar,visited_on date,amount int,primary key(customer_id,visited_on));
 ```
   * Insertion of data into customer table
 ```sql
 insert into customer(customer_id,name,visited_on,amount) 
 values
 (1,'Jhon','2019-01-01',100),
 (2,'Daniel','2019-01-02',110),
 (3,'Dhanush','2019-01-03',120), 
 (4,'Panneer','2019-01-04',130),
 (5,'Yaswanth','2019-01-05',140),
 (6,'Ajith','2019-01-06',150);
 (7,'Aruna','2019-01-07',110),
 (8,'Pragushpathi','2019-01-08',80),
 (9,'Obuli','2019-01-09',50),
 (1,'Pavithra','2019-01-10',120),
 (3,'Swetha','2019-01-10',110);
 ```
 * Compute the moving average of how much the customer paid in a seven days window (i.e., current day + 6 days before). average_amount should be rounded to two decimal places.
 ```sql
 select visited_on,
sum(sum(amount)) over(order by visited_on rows between 6 preceding and current row)
as amount,
round(avg(sum(amount)) over(order by visited_on rows between 6 preceding and current row),2)
as average_amount
from customer
group by visited_on
order by visited_on
offset 6 rows; 
```
<br>

2. 1179. Reformat Department Table
* Creation of Department table
```sql
create table department(id int,revenue int,month varchar check (month in('Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec')));
```
* Insertion of data into Department table
```sql
 insert into department(id,revenue,month) values(1,8000,'Jan'),(2,9000,'Jan'),(3,10000,'Feb'),(1,7000,'Feb'),(1,6000,'Mar');
 ```
 * Reformat the table such that there is a department id column and a revenue column for each month.
 ```sql
 select id,
sum(case when month='Jan' then revenue else null end) as Jan_revenue,
sum(case when month='Feb' then revenue else null end) as Feb_revenue,
sum(case when month='Mar' then revenue else null end) as Mar_revenue,
sum(case when month='Apr' then revenue else null end) as Apr_revenue,
sum(case when month='May' then revenue else null end) as May_revenue,
sum(case when month='Jun' then revenue else null end) as Jun_revenue,
sum(case when month='Jul' then revenue else null end) as Jul_revenue,
sum(case when month='Aug' then revenue else null end) as Aug_revenue,
sum(case when month='Sep' then revenue else null end) as Sep_revenue,
sum(case when month='Oct' then revenue else null end) as Oct_revenue,
sum(case when month='Nov' then revenue else null end) as Nov_revenue,
sum(case when month='Dec' then revenue else null end) as Dec_revenue
from department group by id;
```
<br>

3. 1204. Last Person to Fit in the Bus
* Creation of queue table
```sql
 create table queue(person_id int,person_name varchar,weight int ,turn int,primary key(person_id));
 ```
 * Insertion of data into queue table
 ```sql
   insert into queue(person_id,person_name,weight,turn) values(5,'Alice',250,1),(4,'Bob',175,5),(3,'Alex',350,2),(6,'Jhon Cena',400,3),(1,'Winston',500,6),(2,'Marie',200,4);
```
* Write a solution to find the person_name of the last person that can fit on the bus without exceeding the weight limit. The test cases are generated such that the first person does not exceed the weight limit.
```sql
select person_name from (select person_name,
    sum(weight)
    over(order by turn asc) as total_weight
    from queue) temp  
    where total_weight<=1000 order by total_weight desc limit 1;
```
<br>

4. 1211.Queries Quality and Percentage
* Creation of queries table
```sql
create table queries(query_name varchar,result varchar,position int,rating int);
```
* Insertion of data into queries table
```sql
insert into queries(query_name,result,position,rating) values('Dog','Golden retriever',1,5),('Dog','German Shepard',2,5),('Dog','Mule',200,1),('Cat','Shirazi',5,2),('Cat','Siamese',5,2),('Cat','Sphynx',7,4);
```
* We define query quality as:

The average of the ratio between query rating and its position.

We also define poor query percentage as:

The percentage of all queries with rating less than 3.

Write a solution to find each query_name, the quality and poor_query_percentage.

Both quality and poor_query_percentage should be rounded to 2 decimal places.

```sql
select query_name,round(avg(rating*1.0/position),2)  quality,
round(avg(case when rating <3 then 1 else 0 end)*100.0,2)  as poor_query_percentage from queries
group by query_name;
```
<br>

5. 1251. Average Selling Price
* Creation of prices and unitssold table
```sql
create table prices(product_id int ,start_date date,end_date date,price int,primary key(product_id,start_date,end_date));

create table unitssold(product_id int,purchase_date date,units int);
```
* Insertion of data into prices and unitssold table
```sql
insert into prices(product_id,start_date,end_date,price) values(1,'2019-02-17','2019-02-28',5),(1,'2019-03-01','2019-03-22',20),(2,'2019-02-01','2019-02-20',15)(2,'2019-02-21','2019-03-31',30);

insert into unitssold(product_id,purchase_date,units) values(1,'2019-02-25',100),(1,'2019-03-01',15),(1,'2019-02-10',200),(1,'2019-03-22',30);
 ```
 * Write a solution to find the average selling price for each product. average_price should be rounded to 2 decimal places. If a product does not have any sold units, its average selling price is assumed to be 0.
 ```sql
 SELECT p.product_id, COALESCE(ROUND(SUM(p.price * u.units * 1.0) / SUM(u.units), 2), 0) AS average_price
FROM Prices p
LEFT JOIN UnitsSold u 
    ON p.product_id = u.product_id
    AND purchase_date BETWEEN start_date AND end_date
GROUP BY p.product_id;
```
<br>

6. 1280.Students and Examinations
* Creation of students ,subjects and examinations table
```sql
create table students(student_id int,student_name varchar);

create table subjects(subject_name varchar);

create table examinations(student_id int,subject_name varchar);
```
* Insertion of data into students ,subjects and examinations table
```sql
insert into students(student_id,student_name) values(1,'Alice'),(2,'Bob'),(13,'Jhon'),(6,'Alex');

insert into subjects(subject_name) values('Math'),('Physics'),('Programming');

insert into examinations(student_id,subject_name) values(1,'Math'),(1,'Physics'),(1,'Programming'),(2,'Programming'),(1,'Physics'),(1,'Math'),(13,'Math'),(13,'Programming'),(13,'Physics'),(2,'Math'),(1,'Math');

```
* Write a solution to find the number of times each student attended each exam.
```sql
select st.student_id,st.student_name,su.subject_name,count(e.student_id) as attended_exams from students st 
cross join subjects su
left join examinations e on st.student_id=e.student_id and su.subject_name=e.subject_name
group by st.student_id,su.subject_name,st.student_name 
order by st.student_id,su.subject_name;
```
<br>

7. 1327. List the Products Ordered in a Period
* Creation of products and orders table
```sql
create table products(product_id int primary key,product_name varchar,product_category varchar);

create table orders(product_id int,order_date date,unit int,constraint fk_order_product_id foreign key(product_id) references products(product_id));
```
* Insertion of data into products and orders table
```sql
insert into products(product_id,product_name,product_category) values(1,'Leetcode Solutions','Book'),(2,'Jewels of Stringology','Book'),(3,'HP','Laptop'),(4,'Lenevo','Laptop'),(5,'Leetcode Kit','T-Shirt');
 
insert into orders(product_id,order_date,unit) values(1,'2020-02-05',60),(1,'2020-02-10',70),(2,'2020-01-18',30),(2,'2020-02-11',80),(3,'2020-02-17',2),(3,'2020-02-24',3),(4,'2020-03-01',20),(4,'2020-03-04',30),(4,'2020-03-04',60),(5,'2020-02-25',50),(5,'2020-02-27',50),(5,'2020-03-01',50);
```
* Write a solution to get the names of products that have at least 100 units ordered in February 2020 and their amount 
```sql
select p.product_name,sum(o.unit) unit from products p 
join orders o
on p.product_id=o.product_id
where o.order_date between '2020-02-01' and '2020-02-29'
group by p.product_id,p.product_name
having sum(o.unit)>=100; 
```
<br>

8. 1341. Movie Rating
* Creation of movies,users and movierating tables
```sql
 create table movies(movie_id int,title varchar);

 create table users(user_id int,name varchar);

 create table movierating(movie_id int,user_id int,rating int,created_at date);
```
* Insertion of data into movies,users and movierating table
```sql
insert into movies(movie_id,title) values(1,'Avengers'),(2,'Frozon 2'),(3,'Joker');

insert into users(user_id,name) values(1,'Daniel'),(2,'Monica'),(3,'Maria'),(4,'James');

insert into movierating (movie_id, user_id, rating, created_at) values
(1, 1, 3, '2020-01-12'),(1, 2, 4, '2020-02-11'),(1, 3, 2, '2020-02-12'),(1, 4, 1, '2020-01-01'),
(2, 1, 5, '2020-02-17'),(2, 2, 2, '2020-02-01'),(2, 3, 2, '2020-03-01'),(3, 1, 3, '2020-02-22'),
(3, 2, 4, '2020-02-25');
```
* Write a solution to:

Find the name of the user who has rated the greatest number of movies. In case of a tie, return the lexicographically smaller user name.
Find the movie name with the highest average rating in February 2020. In case of a tie, return the lexicographically smaller movie name.

```sql
(select u.name as results from users u
join movierating mr
on u.user_id = mr.user_id
group by u.name, u.user_id
order by count(*) desc, u.name asc limit 1)
union all
(select m.title as results from movies m
join movierating mr
on m.movie_id = mr.movie_id
where mr.created_at between '2020-02-01' and '2020-02-29'
group by m.movie_id, m.title
order by avg(mr.rating) desc, m.title asc limit 1);
```
<br>

9. 1393. Capital Gain/Loss
* Creation of stocks table
```sql
create type operation_enum as enum('Buy','Sell');

create table stocks(stock_name varchar,operation operation_enum,operation_day int,price int,primary key(stock_name,operation_day));
```
* Insertion of data into stocks table
```sql
insert into stocks(stock_name,operation,operation_day,price) values
('Leetcode','Buy',1,1000),('Corona Masks','Buy',2,10),('Leetcode','Sell',5,9000),('Hand Bags','Buy',17,30000),('Corona Masks','Sell',3,1010),('Corona Masks','Buy',4,1000),('Corona Masks','Sell',5,500),('Corona Masks','Buy',6,1000),('Hand Bags','Sell',29,7000),('Corona Masks','Sell',10,10000);
```
* Write a solution to report the Capital gain/loss for each stock.The Capital gain/loss of a stock is the total gain or loss after buying and selling the stock one or many times.
```sql
with temp as (
    select stock_name,sum(price) filter(where operation='Buy') as buy,
    sum(price) filter(where operation='Sell') as sell from stocks
    group by stock_name
)
select stock_name,sell-buy as capital_gain_loss from temp;
```
<br>

10. 1407. Top Travellers
* Creation of users1407 and rides table
```sql
create table users1407(id int primary key, name varchar);

create table rides(id int primary key, user_id int, distance int, foreign key(user_id) references users1407(id));
```
* Insertion of data into users1407 and rides table
```sql
 insert into users1407(id, name) values (1, 'Alice'), (2, 'Bob'), (3, 'Charlie');

 insert into rides(id, user_id, distance) values (1, 1, 120), (2, 2, 90), (3, 1, 30), (4, 3, 60);
```
* Write a solution to report the distance traveled by each user.
```sql
select u.name as name,coalesce(sum(r.distance),0) as travelled_distance from
users u left join rides r on u.id=r.user_id
group by u.id,u.name
order by travelled_distance desc,name asc;
```
<br>

11. 1517. Find Users With Valid E-Mails
* Creation of users1517 table
```sql
 create table users1517(user_id int,name varchar,mail varchar);
```
* Insertion of data into users1517 table
```sql
 insert into users1517(user_id, name, mail) values (1, 'Winston', 'winston@leetcode.com'), (2, 'Jonathan', 'jonathanisgreat'), (3, 'Annabelle', 'bella-@leetcode.com'), (4, 'Sally', 'sally.come@leetcode.com'), (5, 'Marwan', 'quarz#2020@leetcode.com'), (6, 'David', 'david69@gmail.com'), (7, 'Shapiro', '.shapo@leetcode.com');
 ```
 * Write a solution to find the users who have valid emails.

    A valid e-mail has a prefix name and a domain where:

    The prefix name is a string that may contain letters (upper or lower case), digits, underscore '_', period '.', and/or dash '-'. The prefix name must start with a letter.
    The domain is '@leetcode.com'
    
```sql
select user_id,name,mail from users where mail ~* '^[a-z]+[a-z0-9_.-]*@leetcode\.com$'
```

12. 1527. Patients With a Condition
* Creation of patients table
```sql
create table patients(patient_id int primary key, patient_name varchar, conditions varchar);
``` 
* Insertion of data into patients table
```sql
insert into patients(patient_id, patient_name, conditions) values 
(1, 'Daniel', 'YFEV COUGH'), 
(2, 'Alice', ''), 
(3, 'Bob', 'DIAB100 MYOP'), 
(4, 'George', 'ACNE DIAB100'), 
(5, 'Alain', 'DIAB201');
```
* Write a solution to find the patient_id, patient_name, and conditions of the patients who have Type I Diabetes. Type I Diabetes always starts with DIAB1 prefix.
```sql
select patient_id,patient_name,conditions from patients where conditions ilike 'diab1%' or conditions ilike '%\ diab1%' escape '\';
```