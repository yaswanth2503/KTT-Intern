
## May 28, 2025

## Solving Problems in Leetcode Platform
Source: https://leetcode.com/problem-list/database/

1. 3374.First Letter Capitalization II
* creation of usercontent table
```sql
create table usercontent(content_id int, content_text varchar);
```
* Insertion of data into usercontent table
```sql
insert into usercontent (content_id, content_text) values (1, 'hello world of sql'), (2, 'the quick-brown fox'), (3, 'modern-day data science'), (4, 'web-based front-end development');
```
* Write a solution to transform the text in the content_text column by applying the following rules:

    Convert the first letter of each word to uppercase and the remaining letters to lowercase
    Special handling for words containing special characters:
    For words connected with a hyphen -, both parts should be capitalized (e.g., top-rated → Top-Rated)
    All other formatting and spacing should remain unchanged
    ```sql
    select content_id,content_text as original_text, initcap(content_text) as converted_text from usercontent;
    ```
    <br>

2. 608.Tree Node
* creation of tree table
```sql
create table tree (id int primary key, p_id int);
```
* Insertion of data into tree table
```sql
insert into tree (id, p_id) values (1, null), (2, 1), (3, 1), (4, 2), (5, 2);
```
* Each node in the tree can be one of three types:

"Leaf": if the node is a leaf node.
"Root": if the node is the root of the tree.
"Inner": If the node is neither a leaf node nor a root node.
Write a solution to report the type of each node in the tree.
```sql
    select id,
    case when p_id is null then 'Root'
    when id not in (select p_id from tree where p_id is not null) then 'Leaf'
    else 'Inner' end as type
    from tree
```
<br>

3. 3475.DNA Pattern Recognition 
* creation of samples table
```sql
create table samples (sample_id int primary key, dna_sequence varchar, species varchar);
```
* insertion of data into samples table
```sql
insert into samples (sample_id, dna_sequence, species) values (1, 'atgctagctagctaa', 'human'), (2, 'gggtcaatcatc', 'human'), (3, 'atatatcgtagcta', 'human'), (4, 'atggggtcatcataa', 'mouse'), (5, 'tcagtcagtcag', 'mouse'), (6, 'atatcgcgctag', 'zebrafish'), (7, 'cgtatgcgtcgta', 'zebrafish');
```
* Biologists are studying basic patterns in DNA sequences. Write a solution to identify sample_id with the following patterns:

Sequences that start with ATG (a common start codon),
Sequences that end with either TAA, TAG, or TGA (stop codons),
Sequences containing the motif ATAT (a simple repeated pattern),
Sequences that have at least 3 consecutive G (like GGG or GGGG),
Return the result table ordered by sample_id in ascending order.
```sql
    select sample_id,dna_sequence,species,
    coalesce(case when left(dna_sequence,3)='atg' then 1 end ,0) 
    as has_start,
    coalesce(case when right(dna_sequence,3) in ('taa','tag','tga') then 1 end, 0) 
    as has_stop,
    case when dna_sequence like '%atat%' then 1 else 0 end
    as has_atat,
    case when dna_sequence ~ 'g{3,}' then 1 else 0 end
    as has_ggg
    from samples 
    group by 1,2,3
    order by 1
```
<br>

4. 177.Nth Highest Salary
* creation of employee177 table
```sql
create table employee177 (id int primary key, salary int);
```
* Insertion of data into employee177 table
```sql
insert into employee177 (id, salary) values (1, 100), (2, 200), (3, 300);
```
* Write a solution to find the nth highest distinct salary from the Employee table. If there are less than n distinct salaries, return null.
```sql
    CREATE OR REPLACE FUNCTION NthHighestSalary(N INT) RETURNS TABLE (Salary INT) AS $$
    BEGIN
    if n<1 then
    return query(select null::int as salary);
    else
    RETURN QUERY (
    select distinct employee.salary from employee order by salary desc 
    offset n-1 limit 1
        
    );
    end if;
    END;
    $$ LANGUAGE plpgsql;
```
<br>

5. 3451.Find Invalid IP Addresses
* creation of log3451 table
```sql
create table log3451(log_id int, ip varchar, status_code int);
```
* Insertion of data into log3451 table
```sql
insert into log3451 values (1,'192.168.1.1',200),(2,'256.1.2.3',404),(3,'192.168.001.1',200),(4,'192.168.1.1',200),(5,'192.168.1',500),(6,'256.1.2.3',404),(7,'192.168.001.1',200);
```
* Write a solution to find invalid IP addresses. An IPv4 address is invalid if it meets any of these conditions:

Contains numbers greater than 255 in any octet,
Has leading zeros in any octet (like 01.02.03.04),
Has less or more than 4 octets,
Return the result table ordered by invalid_count, ip in descending order respectively. 
```sql
SELECT ip,
       count(*) AS invalid_count
  FROM log3451
 WHERE ip !~ '^(?:[1-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:[.](?:[1-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3}$'
 GROUP BY ip
 ORDER BY invalid_count DESC,
          ip DESC;

```
<br>

6. 601.Human Traffic of Stadium
* creation of stadium table
```sql
create table stadium(id int, visit_date date, people int);
```
* Insertion of data into stadium table
```sql
insert into stadium values (1,'2017-01-01',10),(2,'2017-01-02',109),(3,'2017-01-03',150),(4,'2017-01-04',99),(5,'2017-01-05',145),(6,'2017-01-06',1455),(7,'2017-01-07',199),(8,'2017-01-09',188);
```
* Write a solution to display the records with three or more rows with consecutive id's, and the number of people is greater than or equal to 100 for each.
```sql
    with cte as(
    select id,visit_date,people,
    row_number() over() as row_num,
    id-row_number() over() as diff
    from stadium where people>=100
    )
    select id,visit_date,people from cte
    where diff in (select diff from cte group by diff having count(*)>=3)
    order by visit_date asc
```
<br>

7. 262.Trips and Users
* creation of trips262 and users262 table
```sql
create table trips262(id int, client_id int, driver_id int, city_id int, status varchar, request_at varchar);

create table users262(users_id int, banned varchar, role varchar);
```
* Insertion of data into trips262 and users262 table
```sql
insert into trips262 values (1,1,10,1,'completed','2013-10-01'),(2,2,11,1,'cancelled_by_driver','2013-10-01'),(3,3,12,6,'completed','2013-10-01'),(4,4,13,6,'cancelled_by_client','2013-10-01'),(5,1,10,1,'completed','2013-10-02'),(6,2,11,6,'completed','2013-10-02'),(7,3,12,6,'completed','2013-10-02'),(8,2,12,12,'completed','2013-10-03'),(9,3,10,12,'completed','2013-10-03'),(10,4,13,12,'cancelled_by_driver','2013-10-03');

insert into users262 values (1,'No','client'),(2,'Yes','client'),(3,'No','client'),(4,'No','client'),(10,'No','driver'),(11,'No','driver'),(12,'No','driver'),(13,'No','driver');
```
* Write a solution to find the cancellation rate of requests with unbanned users (both client and driver must not be banned) each day between "2013-10-01" and "2013-10-03" with at least one completed trip. Round Cancellation Rate to two decimal points.
```sql
    select 
        distinct
        t.request_at
        as "Day"
    , round(
            count(*) filter(where t.status like 'cancelled%')
            over(partition by t.request_at)::decimal
            /
            count(*) 
            over(partition by t.request_at)::decimal
        , 2)
        as "Cancellation Rate"

    from 
        Trips t
        left join Users u
        on u.users_id = t.client_id
        left join Users s
        on s.users_id = t.driver_id
    where 
            1=1
        and u.banned = 'No'
        and s.banned = 'No'
        and request_at in (   '2013-10-01' 
                            , '2013-10-02' 
                            , '2013-10-03' )
```
<br>

8. 3521.Find Product Recommendation Pairs
* creation of productpurchases and productinfo tables
```sql
create table productpurchases (user_id int, product_id int, quantity int);

create table productinfo (product_id int, category varchar, price decimal);
```
* Insertion of data into productpurchases and productinfo tables
```sql      
insert into productpurchases values (1,101,2),(1,102,1),(1,103,3),(2,101,1),(2,102,5),(2,104,1),(3,101,2),(3,103,1),(3,105,4),(4,101,1),(4,102,1),(4,103,2),(4,104,3),(5,102,2),(5,104,1);

insert into productinfo values (101,'electronics',100),(102,'books',20),(103,'clothing',35),(104,'kitchen',50),(105,'sports',75);
```
* Amazon wants to implement the Customers who bought this also bought... feature based on co-purchase patterns. Write a solution to :

Identify distinct product pairs frequently purchased together by the same customers (where product1_id < product2_id).
For each product pair, determine how many customers purchased both products.
A product pair is considered for recommendation if at least 3 different customers have purchased both products.

Return the result table ordered by customer_count in descending order, and in case of a tie, by product1_id in ascending order, and then by product2_id in ascending order.
```sql
with propair as (
    select 
        p1.product_id as product1, p1.category as category1,
        p2.product_id as product2, p2.category as category2
    from 
        productinfo p1
        join productinfo p2 on p1.product_id < p2.product_id
)

    select 
        c.product1 as product1_id,
        c.product2 as product2_id,
        c.category1 as product1_category,
        c.category2 as product2_category,
        count(p1.user_id) as customer_count
    from 
        propair c
        join productpurchases p1 on c.product1 = p1.product_id
        join productpurchases p2 on c.product2 = p2.product_id
    where 
        p1.user_id = p2.user_id
    group by 
        c.product1, c.product2, c.category1, c.category2
    having 
        count(p1.user_id) >= 3
    order by 
        count(p1.user_id) desc, c.product1, c.product2;

```
<br>

9. 3554.Find Category Recommendation Pairs
* creation of productpurchases3554 and productinfo3554 tables
```sql
create table productpurchases3554(user_id int, product_id int, quantity int);

create table productinfo3554(product_id int, category varchar, price decimal);
```
* insertion of data into productpurchases3554 and productinfo3554 tables
```sql
insert into productpurchases3554 values(1,101,2),(1,102,1),(1,201,3),(1,301,1),(2,101,1),(2,102,2),(2,103,1),(2,201,5),(3,101,2),(3,103,1),(3,301,4),(3,401,2),(4,101,1),(4,201,3),(4,301,1),(4,401,2),(5,102,2),(5,103,1),(5,201,2),(5,202,3);

insert into productinfo3554 values(101,'electronics',100),(102,'books',20),(103,'books',35),(201,'clothing',45),(202,'clothing',60),(301,'sports',75),(401,'kitchen',50)
```
* Amazon wants to understand shopping patterns across product categories. Write a solution to:

Find all category pairs (where category1 < category2),
For each category pair, determine the number of unique customers who purchased products from both categories.
A category pair is considered reportable if at least 3 different customers have purchased products from both categories.

Return the result table of reportable category pairs ordered by customer_count in descending order, and in case of a tie, by category1 in ascending order lexicographically, and then by category2 in ascending order.
```sql
  with format_product as (
    select user_id, category
    from productpurchases p
    inner join productinfo p1 on p.product_id = p1.product_id
), main_proccess as (
    select p.category as category1, p1.category as category2, count(distinct p.user_id) customer_count
    from format_product p
    inner join format_product p1 on p.category < p1.category and p.user_id = p1.user_id
    group by p.category, p1.category
    having count(distinct p.user_id) > 2
)
select category1, category2, customer_count
from main_proccess m
order by customer_count desc, category1, category2;

```
<br>

10. 3482.Analyze Organization Hierarchy
* creation of employees3482 table
```sql
create table employees3482 (employee_id int, employee_name varchar, manager_id int, salary int, department varchar);
```
* Insertion of data into employees3482 table
```sql
insert into employees3482 values (1, 'alice', null, 12000, 'executive'), (2, 'bob', 1, 10000, 'sales'), (3, 'charlie', 1, 10000, 'engineering'), (4, 'david', 2, 7500, 'sales'), (5, 'eva', 2, 7500, 'sales'), (6, 'frank', 3, 9000, 'engineering'), (7, 'grace', 3, 8500, 'engineering'), (8, 'hank', 4, 6000, 'sales'), (9, 'ivy', 6, 7000, 'engineering'), (10, 'judy', 6, 7000, 'engineering');
```
* Write a solution to analyze the organizational hierarchy and answer the following:

Hierarchy Levels: For each employee, determine their level in the organization (CEO is level 1, employees reporting directly to the CEO are level 2, and so on).
Team Size: For each employee who is a manager, count the total number of employees under them (direct and indirect reports).
Salary Budget: For each manager, calculate the total salary budget they control (sum of salaries of all employees under them, including indirect reports, plus their own salary).
Return the result table ordered by the result ordered by level in ascending order, then by budget in descending order, and finally by employee_name in ascending order.

```sql
with recursive a as (
    select employee_id,1 as level,employee_name,salary,array[employee_id] as team   
    from employees3482 
    where manager_id is null
    union
    select e.employee_id, a.level + 1,e.employee_name,e.salary,a.team || e.employee_id   
    from a inner join employees3482 e on a.employee_id = e.manager_id
), 
b as (
    select e.employee_id,a.employee_id as sub_employee,a.salary  from a 
    inner join employees3482 e on e.employee_id = any(a.team)
    ), 
c as (
    select employee_id,count(*) - 1 as team_size,sum(salary) as budget  from b group by employee_id
), 
d as (
    select a.employee_id, a.employee_name,a.level,coalesce(c.team_size, 0) as team_size,coalesce(c.budget, 0) as budget from a left join c on a.employee_id = c.employee_id  
) 
select * from d order by level, budget desc, employee_name;

```
<br>


