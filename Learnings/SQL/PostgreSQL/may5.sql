select * from humanresources.department;
select * from humanresources.employee;   
select * from humanresources.employeedepartmenthistory;   
select * from humanresources.employeepayhistory;  
select * from humanresources.jobcandidate;      
select * from humanresources.shift;   
select * from person.person;   

SELECT ctid, * FROM humanresources.employee;

-- How many employees in each department
select employee.jobtitle,count(employee.jobtitle) from humanresources.employee
group by employee.jobtitle;


-- How Many Employees Are Paid Hourly in Each Department
select employee.jobtitle,count(employee.salariedflag) as salaryhourwise from humanresources.employee
group by employee.jobtitle,employee.salariedflag having employee.salariedflag=false;

-- How Many Employees Are Paid monthly in Each Department
select employee.jobtitle,count(*) as salaryhourwise from humanresources.employee
group by employee.jobtitle,employee.salariedflag having employee.salariedflag=true;


select employee.jobtitle,count(*) as employeehourlywages,avg(employee.vacationhours) as AvgVacationHours
from humanresources.employee where employee.salariedflag=false
group by employee.jobtitle having count(*)<2;


-- List each employee's businessentityid along with their assigned departmentid.	
SELECT e.businessentityid, d.name AS department_name
FROM humanresources.employee AS e
JOIN humanresources.employeedepartmenthistory AS edh
  ON e.businessentityid = edh.businessentityid
JOIN humanresources.department AS d
  ON edh.departmentid = d.departmentid
WHERE edh.enddate IS NULL; 

-- Display each employee's jobtitle along with their current shift name
select e.jobtitle,s.name from humanresources.employee as e
join humanresources.employeedepartmenthistory as edh
on e.businessentityid=edh.businessentityid
join humanresources.shift as s
on edh.shiftid=s.shiftid
where edh.enddate is null;

-- Get the distinct shift names used in the organization.
select distinct name from humanresources.shift;


-- Show each current employee's businessentityid, department name, and shift name.
select e.businessentityid,d.name,s.name
from humanresources.employee as e
join humanresources.employeedepartmenthistory as edh
on e.businessentityid=edh.businessentityid
join humanresources.department as d
on edh.departmentid=d.departmentid
join humanresources.shift as s
on edh.shiftid=s.shiftid
where edh.enddate is null;

-- Count how many employees are currently in each shift.
select s.name,count(*) from humanresources.shift as s 
join humanresources.employeedepartmenthistory as edh
on s.shiftid=edh.shiftid
where edh.enddate is null
group by s.name order by s.name asc;

-- List departments where more than 3 employees are currently working.
select d.name,count(*) from humanresources.department d
join humanresources.employeedepartmenthistory as edh
on d.departmentid=edh.departmentid
where edh.enddate is null
group by d.name
having count(*)>3;

-- Find the average vacation hours grouped by department for current employees only.
select d.name,avg(e.vacationhours) from humanresources.department d
join humanresources.employeedepartmenthistory edh
on d.departmentid=edh.departmentid
join humanresources.employee e
on e.businessentityid=edh.businessentityid
where edh.enddate is null
group by d.name;

-- List  department names, and pay rates for only non-salaried (hourly) employees.

SELECT d.Name AS DepartmentName,eph.Rate AS PayRate
FROM HumanResources.Department AS d
JOIN HumanResources.EmployeeDepartmentHistory AS edh
ON d.DepartmentID = edh.DepartmentID
JOIN HumanResources.Employee AS e
ON edh.BusinessEntityID = e.BusinessEntityID
JOIN HumanResources.EmployeePayHistory AS eph
ON e.BusinessEntityID = eph.BusinessEntityID
WHERE e.SalariedFlag = false  
AND edh.EndDate IS NULL
AND eph.RateChangeDate = (
SELECT MAX(RateChangeDate)
FROM HumanResources.EmployeePayHistory
WHERE BusinessEntityID = e.BusinessEntityID);

-- List all employees along with their department names, even if the employee is not currently assigned to any department.

select e.businessentityid, e.jobtitle, d.name as department_name
from humanresources.employee e
left join humanresources.employeedepartmenthistory edh 
on e.businessentityid = edh.businessentityid and edh.enddate is null
left join humanresources.department d on edh.departmentid = d.departmentid;

-- Show all departments and the employees in them (include departments even if they have no employees

select d.name as department_name, e.businessentityid
from humanresources.department d
left join humanresources.employeedepartmenthistory edh 
on d.departmentid = edh.departmentid and edh.enddate is null
left join humanresources.employee e 
on edh.businessentityid = e.businessentityid;


-- List all department names and any assigned employee names .
select d.name as department_name, p.firstname, p.lastname
from humanresources.employeedepartmenthistory edh
right join humanresources.department d on edh.departmentid = d.departmentid
left join humanresources.employee e on edh.businessentityid = e.businessentityid
left join person.person p on e.businessentityid = p.businessentityid
where edh.enddate is null;

-- show all shifts and employees assigned to them, including shifts with no employees

select s.name as shift_name, p.firstname, p.lastname
from humanresources.shift s
left join humanresources.employeedepartmenthistory edh on s.shiftid = edh.shiftid
left join humanresources.employee e on edh.businessentityid = e.businessentityid
left join person.person p on e.businessentityid = p.businessentityid
where edh.enddate is null or edh.businessentityid is null;


-- List all departments and the employees currently assigned to them.
-- Also, show departments that have no employees and employees that are not assigned to any department.
select d.name as department_name,e.businessentityid as employee_id
from humanresources.department d
full outer join humanresources.employeedepartmenthistory edh
on d.departmentid = edh.departmentid and edh.enddate is null
full outer join humanresources.employee e
on edh.businessentityid = e.businessentityid;


-- List all pairs of employees who have the same job title (excluding self-pairs)
select e1.businessentityid as employee1,e2.businessentityid as employee2,e1.jobtitle
from humanresources.employee e1
join humanresources.employee e2
on e1.jobtitle = e2.jobtitle
and e1.businessentityid < e2.businessentityid;


-- Subqueries
select name from humanresources.department
where name in(select name from humanresources.department where groupname='Research and Development');






