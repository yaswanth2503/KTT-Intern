select * from person.person;
select * from person.address;
select * from person.emailaddress;
select * from person.password;

select * from person.person limit 10 offset 5;

-- subquery with join
select firstname,lastname,emailaddress,passwordhash from person.person pe
join person.emailaddress ea
on ea.businessentityid=pe.businessentityid
join person.password p
on p.businessentityid=ea.businessentityid
where emailaddress in(select emailaddress from person.emailaddress where emailaddress ilike 'm%')
order by lastname desc;	


SELECT table_schema,table_name,  table_type FROM information_schema.tables WHERE table_schema = 'person'; -- base table

SELECT table_schema,table_name,  table_type FROM information_schema.tables WHERE table_schema = 'pr';  -- viewing purpose and reserved for future development
  
-- correlated subquery => a correlated subquery is a subquery that references the columns from the outer query.
SELECT firstname, lastname
FROM person.person p
WHERE 1 = (
    SELECT COUNT(*)
    FROM person.person p2
    WHERE p2.firstname = p.firstname
);

-- Common table expressions => It is a temporary result set
select * from person.person;

WITH name AS (
  SELECT 
    firstname, 
    lastname,
    firstname || ' ' || lastname AS fullname
  FROM person.person
  WHERE firstname ILIKE 'a%' AND lastname ILIKE 'a%'
)
SELECT distinct * FROM name; 

-- Recursive Common table expression is a powerful feature in PostgreSQL used to perform hierarchical or tree-structured queries

CREATE TABLE PersonHierarchy (
    PersonID INT PRIMARY KEY,
    FirstName TEXT,
    LastName TEXT,
    ManagerID INT  
	);

	INSERT INTO PersonHierarchy (PersonID, FirstName, LastName, ManagerID) VALUES
(1, 'John', 'Smith', NULL),       -- Top-level manager
(2, 'Alice', 'Jones', 1),         -- Reports to John
(3, 'Bob', 'White', 2),           -- Reports to Alice
(4, 'Carol', 'Green', 2),         -- Reports to Alice
(5, 'Dave', 'Black', 3);          -- Reports to Bob


with recursive persontree as (
select personid,firstname,lastname,managerid,1 as level from personhierarchy where personid=1

union all
select ph.personid,ph.firstname,ph.lastname,ph.managerid,pt.level+1 
from personhierarchy ph 
join persontree pt
on ph.managerid=pt.personid

)

select * from persontree order by level;


-- Window Functions

-- Aggregate Functions
select persontype,sum(emailpromotion) over(partition by persontype) 
from person.person;

select persontype,avg(emailpromotion) over(partition by persontype) 
from person.person;

select persontype,min(emailpromotion) over(partition by persontype) 
from person.person;

select persontype,max(emailpromotion) over(partition by persontype) 
from person.person;

select persontype,count(emailpromotion) over(partition by persontype) 
from person.person;

-- Ranking

--RowNumber() => Assigns a unique row number to each row within the partition.
select persontype,row_number() over(partition by persontype) as row_num from person.person;

drop table if exists Employees;
CREATE TABLE Employees (
    EmployeeID INT,
    Name VARCHAR(100),
    Department VARCHAR(50),
    HireDate DATE
);


INSERT INTO Employees (EmployeeID, Name, Department, HireDate)
VALUES
    (1, 'Alice', 'HR', '2020-05-01'),
    (1, 'Alice', 'HR', '2022-06-15'),
    (2, 'Bob', 'IT', '2021-07-10'),
    (3, 'Charlie', 'Finance', '2020-09-30'),
    (3, 'Charlie', 'Finance', '2022-05-22');

with employeerank as (select EmployeeID,Name,Department,HireDate , 
ROW_NUMBER() over ( partition by EmployeeID  order by hiredate asc) as rownum 
from employees 
)
select EmployeeID,Name,Department,HireDate from employeerank where rownum=1;



--Rank() => Assigns a rank to each row. Rows with the same values receive the same rank, but the next ranks will be skipped 
SELECT persontype,RANK() OVER (PARTITION BY persontype ORDER BY emailpromotion ASC) AS row_num FROM person.person;

--DenseRank() => Assigns a rank to each row. Rows with the same values receive the same rank, but rank is continuous
select persontype,dense_rank() over(partition by persontype) as row_num from person.person;








