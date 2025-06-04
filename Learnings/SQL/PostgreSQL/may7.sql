select * from production.product;
select * from production.productcategory;
select * from production.productcosthistory;
select * from production.productdescription;
select * from production.productdocument;
select * from production.productinventory;

-- Window Functions  
-- Rank()
select productid,locationid,shelf,rank() over(order by shelf asc) from production.productinventory;

--Dense_Rank()

select productid,locationid,dense_rank() over(order by locationid asc) from production.productinventory;


-- Percent_Rank() => window function that calculates the relative rank of a row within a partition (group of rows), expressed as a percentage.
-- PerecentRank=Rank of the row-1/Total number of rows-1
-- It returns a value between 0 and 1.
-- If there's only one row in the partition, it returns 0.

select productid,standardcost, 
percent_rank() over(order by standardcost desc) as cost_rank_in_percentage,
rank() over(order by standardcost desc) as ranks
from production.productcosthistory;
-- product rank of productid:771 =6-1/395-1=5/394=0.012690355329949238

-- Ntile(n) => is a window function that divides the ordered rows in a partition into n equal (or nearly equal) buckets (tiles) and assigns a 
-- bucket number to each row, starting from 1.

-- Performance group for overall productid
select productid,standardcost,
ntile(4) over(partition by productid order by standardcost desc) as performanceGroup
from production.productcosthistory;

-- Performance group in same product group
select productid,standardcost,
ntile(4) over(partition by productid order by standardcost desc) as performanceGroup
from production.productcosthistory;

-- Values

--Lag() => is window function that lets you access data from a previous row in the result set

CREATE TABLE EmployeeSalaries (
    EmployeeID INT,
    EmployeeName VARCHAR(100),
    Salary DECIMAL(10, 2),
    Year INT
);
INSERT INTO EmployeeSalaries (EmployeeID, EmployeeName, Salary, Year) VALUES
(1, 'Alice', 5000, 2023),
(1, 'Alice', 5500, 2024),
(2, 'Bob', 4500, 2023),
(2, 'Bob', 4800, 2024),
(3, 'Charlie', 4000, 2023),
(3, 'Charlie', 4200, 2024),
(4, 'David', 4600, 2023),
(4, 'David', 4700, 2024),
(5, 'Eva', 5200, 2023),
(5, 'Eva', 5400, 2024);

-- To find the previous year salary of each employee
select *,
lag(salary) over(partition by employeeid order by salary asc) as "previousYearSalary"
from employeesalaries;

-- Salary difference in year
select *,
lag(salary) over(partition by employeeid order by salary asc) as "previousYearSalary",
salary-lag(salary) over(partition by employeeid order by salary asc) as "salaryDifference"
from employeesalaries;


-- Lead() =>  is a window function that allows you to access data from a following row ,it just opposite to lead

CREATE TABLE SalesData (
    SaleID INT,
    EmployeeName VARCHAR(100),
    SaleAmount DECIMAL(10, 2),
    SaleDate DATE
);
INSERT INTO SalesData (SaleID, EmployeeName, SaleAmount, SaleDate) VALUES
(1, 'Alice', 5000, '2025-01-01'),
(2, 'Bob', 3000, '2025-01-02'),
(3, 'Charlie', 4000, '2025-01-03'),
(4, 'David', 4500, '2025-01-04'),
(5, 'Eva', 5500, '2025-01-05');


select saleid,employeename,saledate,saleamount,
lead(saleamount) over(order by saledate asc) as "NextMonthSaleAmount",
lead(saleamount) over(order by saledate asc)-saleamount as "SalaryDifference"
from salesdata;

-- Count the null values in the particular column
select count(*)-count(style) as "NullCount" from production.product;

-- select the persons whose name doesn't have middle name
select name from production.product where name not ilike '% %';


-- First value() =>is a window function returns the first value in a sorted window of rows.

drop table if exists EmployeeSalaries;
CREATE TABLE EmployeeSalaries (
    EmployeeID INT,
    EmployeeName VARCHAR(100),
    Salary DECIMAL(10, 2),
    Year INT
);
INSERT INTO EmployeeSalaries (EmployeeID, EmployeeName, Salary, Year) VALUES
(1, 'Alice', 5000, 2021),
(1, 'Alice', 5500, 2022),
(1, 'Alice', 6000, 2023),
(1, 'Alice', 6500, 2024),
(1, 'Alice', 7000, 2025),
(2, 'Bob', 4500, 2023),
(2, 'Bob', 4800, 2024),
(3, 'Charlie', 4000, 2023),
(3, 'Charlie', 4200, 2024),
(4, 'David', 4600, 2023),
(4, 'David', 4700, 2024),
(5, 'Eva', 5200, 2023),
(5, 'Eva', 5400, 2024);

select *,
first_value(salary) over(partition by employeeid order by year asc) as "firstSalary"
from employeesalaries;

-- Last value() => The FIRST_VALUE() window function returns the last value in a sorted window of rows.



select *,
last_value(salary) over(partition by employeeid order by year rows between current row and unbounded following) as "lastSalary",
last_value(salary) over(partition by employeeid order by year rows between current row and unbounded following)-salary as "salaryDifference"
from employeesalaries;

-- Nth value(column, n) => is used to get the n-th value in a window frame, based on an ORDER BY clause
CREATE TABLE Salaries (
    EmployeeID INT,
    EmployeeName VARCHAR(100),
	Department VARCHAR(255),
    Salary DECIMAL(10, 2),
    SalaryDate date
);

insert into salaries(employeeid,employeename,department,salary,salarydate) values
(1,'Alice','HR',5000,'2025-01-01');

insert into salaries(employeeid,employeename,department,salary,salarydate) values
(7,'Grace','HR',5500,'2025-01-07'),
(4,'David','HR',6000,'2025-01-04'),
(6,'Frank','Engineering',6500,'2025-01-06'),
(2,'Bob','Engineering',7000,'2025-01-02'),
(5,'Eva','Engineering',7500,'2025-01-05'),
(3,'Charlie','Engineering',8000,'2025-01-03'),
(8,'Hank','Engineering',8500,'2025-01-08');



select *,
nth_value(salary,3) over(partition by department order by salary desc rows between unbounded preceding and unbounded following ) as "Third Largest Salary"
from salaries;

-- Cume_Dist() =>  is a window function that calculates the relative rank of a value within its partition.
-- CUME_DIST = (Number of rows with salary ≤ current row's salary) / total rows
	
SELECT *,
CUME_DIST() OVER (PARTITION BY department ORDER BY salary) AS salary_cume_dist
FROM salaries;


-- To display all the schemas
SELECT schema_name
FROM information_schema.schemata;


-- DCL COMMANDS 
select * from person.person;

SELECT rolname FROM pg_roles; --display role names


CREATE ROLE users LOGIN;
grant select,delete on person.person to users;
grant usage on schema person to users;
ALTER ROLE users WITH PASSWORD 'root';
select * from person.person order by businessentityid asc;
revoke select on person.person from users; 

-- TCL - Trasaction control Language



begin;

select * from production.product order by productid;

update production.product set makeflag=true where productid=1;

savepoint one;

update production.product set name='yash' where productid=1;

rollback to one;

rollback;

commit;














