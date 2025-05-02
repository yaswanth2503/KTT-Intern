-- creating a inventory table

create table if not exists inventory(
inventory_id integer primary key not null,
film_id	 integer not null,
store_id integer not null,
lastUpdate timestamptz not null
);

--creating a rental table
create table if not exists rental(
rental_id integer primary key not null,
rental_date timestamptz not null,
inventory_id integer not null,
customer_id integer not null,
return_date timestamptz not null,
staff_id integer not null,
lastUpdate timestamptz not null,
foreign key(inventory_id) references inventory(inventory_id)
);

-- removing not null constraint for return_date column
alter table rental 
alter column return_date drop not null;


select * from rental;
select * from inventory;

-- selecting dintinct rental_date from rental relation
select distinct rental_date from rental;

-- getting rental_id for respective store_id
select store_id,rental_id from rental
join inventory
on rental.inventory_id=inventory.inventory_id;

select store_id,return_date from rental
left outer join inventory
on rental.inventory_id=inventory.inventory_id;

select store_id,return_date from rental
right outer join inventory
on rental.inventory_id=inventory.inventory_id;

-- Aggregate functions
select count(store_id) from inventory;
select min(store_id) from inventory;
select max(store_id) from inventory;

-- Soft delete 
alter table rental
add column isdeleted boolean default false;

update rental
set isdeleted=true 
where customer_id=459;

select * from rental;

select * from rental where customer_id=459;

-- filter

select count(rental_id) as total_rental_id,
count(rental_id) filter (where isdeleted=true) as deleted_softly
from rental;

--deleting a particular row
delete from rental where inventory_id=1525;

select * from rental;

create view myview as
select store_id,rental_id from rental
join inventory
on rental.inventory_id=inventory.inventory_id;

select * from myview;
-- cannot update view table it just for visualization
-- update myview
-- set store_id=2
-- where rental_id=3;

-- for single table
-- create view exampleview as 
-- select * from rental;

-- select * from exampleview;
-- update exampleview
-- set inventory_id=2452
-- where rental_id=2;

-- select * from exampleview where inventory_id=2452;

--if any column is foreign key in a table we cant insert any rows to that table


-- Transactions
 
create table if not exists accounts(
name varchar(255) not null,
balance numeric(10,2)
);

insert into accounts(name,balance) values
('yash',1000.00),
('panneer',800.00);

insert into accounts(name,balance) values
('pragush',2000.00),
('ajith',2000.00);


select * from accounts;

begin;
update accounts set balance=balance-200 where name='ajith'; --1800
update accounts set balance=balance+200 where name='pragush'; --2200

savepoint transaction1;

update accounts set balance=balance-100 where name='pragush'; --2100
update accounts set balance=balance+100 where name='ajith'; --1900

savepoint transaction2;
select * from accounts;

rollback to transaction1;

release transaction1;
rollback;

commit;	


select * from rental;


-- Window Functions

-- Creating a shop table

create table if not exists shop(
TransationId serial primary key,
store varchar(255),
salesAmount numeric(6,2)
);

insert into shop(store,salesamount) values
('A',800),
('A',500),
('A',900),
('B',500),
('B',700);

select * from shop;	

select transationid,store,salesamount,
sum(salesamount) over (partition by store) as totalsales
from shop;

select transationid,store,salesamount,
row_number() over(partition by store order by salesamount desc) as rownum
from shop;

create table employe(
employeeid int,
name varchar(255),
department varchar(255),
hiredate date
);

INSERT INTO Employe (EmployeeID, Name, Department, HireDate)
VALUES
    (1, 'Alice', 'HR', '2020-05-01'),
    (1, 'Alice', 'HR', '2022-06-15'),
    (2, 'Bob', 'IT', '2021-07-10'),
    (3, 'Charlie', 'Finance', '2020-09-30'),
    (3, 'Charlie', 'Finance', '2022-05-22');


with employeerank as(
select *,
row_number() over(partition by employeeid order by hiredate asc) as rownum
from employe
)

select employeeid,name,department,hiredate from employeerank where rownum=1;
  

--RANK and DENSE RANK
--------------------

CREATE TABLE Students (
    StudentID INT,
    StudentName VARCHAR(100),
    ExamScore INT
);

INSERT INTO Students (StudentID, StudentName, ExamScore)
VALUES
    (1, 'Alice', 95),
    (2, 'Bob', 90),
    (3, 'Charlie', 95),
    (4, 'David', 85),
    (5, 'Eva', 90);

select studentid,studentname,examscore, 
rank() over(order by examscore desc) as scorerank from students;


select studentid,studentname,examscore, 
dense_rank() over(order by examscore desc) as scorerank from students;

select studentid,studentname,examscore, 
percent_rank() over(order by examscore desc) as scorerank from students;


