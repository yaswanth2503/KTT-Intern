## May 21, 2025

## Started to practise queries based on adventureworks database [reference](https://www.w3resource.com/sql-exercises/adventureworks/adventureworks-exercises.php)


1.write a query in SQL to retrieve all rows and columns from the employee table in the Adventureworks database. Sort the result set in ascending order on jobtitle.

```sql
select * from humanresources.employee order by jobtitle asc limit 10;
```


2.write a query in SQL to retrieve all rows and columns from the person table using table aliasing in the Adventureworks database. Sort the output in ascending order on lastname.

```sql
select * from person.person order by lastname limit 5;
```


3.write a query in SQL to return all rows and a subset of the columns (FirstName, LastName, businessentityid) from the person table in the AdventureWorks database. The third column heading is renamed to Employee_id. Arranged the output in ascending order by lastname.

```sql
select firstname,lastname,businessentityid as employee_id from person.person order by lastname limit 5;
```


4.write a query in SQL to return only the rows for product that have a sellstartdate that is not NULL and a productline of T. Return productid, productnumber, and name. Arranged the output in ascending order on name.

```sql
select productid,productnumber,name as productname from production.product where sellstartdate is not null and productline='T' order by name asc limit 5;
```


5.write a query in SQL to return all rows from the salesorderheader table in Adventureworks database and calculate the percentage of tax on the subtotal have decided. Return salesorderid, customerid, orderdate, subtotal, percentage of tax column. Arranged the result set in ascending order on subtotal.

```sql
select salesorderid,customerid,orderdate,subtotal,(taxamt*100)/subtotal as tax_percent from sales.salesorderheader order by subtotal asc limit 5;
```


6.write a query in SQL to create a list of unique jobtitles in the employee table in Adventureworks database. Return jobtitle column and arranged the resultset in ascending order.

```sql
select distinct jobtitle from humanresources.employee order by jobtitle asc limit 5;
```


7.write a query in SQL to calculate the total freight paid by each customer. Return customerid and total freight

```sql
select customerid,sum(freight) as total_freight from sales.salesorderheader group by customerid order by customerid asc limit 5;
```


8.write a query in SQL to find the average and the sum of the subtotal for every customer. Return customerid, average and sum of the subtotal. Grouped the result on customerid and salespersonid. Sort the result on customerid column in descending order.

```sql
select customerid,salespersonid,avg(subtotal) as avg_subtotal,sum(subtotal) as sum_subtotal from sales.salesorderheader group by customerid,salespersonid order by customerid desc limit 5;
```


9.write a query in SQL to retrieve total quantity of each productid which are in shelf of 'A' or 'C' or 'H'. Filter the results for sum quantity is more than 500. Return productid and sum of the quantity. Sort the results according to the productid in ascending order.

```sql
select productid,sum(quantity) as total_quantity from production.productinventory where shelf in('A','C','H') group by productid having sum(quantity)>500 order by productid asc limit 5;
```


10.write a query in SQL to find the total quentity for a group of locationid multiplied by 

```sql
select sum(quantity) as total_quantity from production.productinventory group by (locationid*10) limit 5;
```


11.write a query in SQL to find the persons whose last name starts with letter 'L'. Return BusinessEntityID, FirstName, LastName, and PhoneNumber. Sort the result on lastname and firstname.

```sql
select p.businessentityid,p.firstname,p.lastname,pp.phonenumber from person.personphone pp join person.person p on p.businessentityid=pp.businessentityid where p.lastname like 'L%' order by p.lastname,p.firstname  limit 6;
 ```
 

 12.write a query in SQL to find the sum of subtotal column. Group the sum on distinct salespersonid and customerid. Rolls up the results into subtotal and running total. Return salespersonid, customerid and sum of subtotal column i.e. sum_subtotal.

 ```sql
  SELECT salespersonid, customerid, sum(subtotal) AS sum_subtotal FROM sales.salesorderheader s GROUP BY ROLLUP (salespersonid, customerid) limit 20;
  ```
  

  13.write a query in SQL to find the sum of the quantity of all combination of group of distinct locationid and shelf column. Return locationid, shelf and sum of quantity as TotalQuantity.

  ```sql
  select locationid,shelf,sum(quantity) as total_quantity from production.productinventory group by rollup(locationid,shelf) limit 5;
  ```
  

  14.write a query in SQL to find the sum of the quantity with subtotal for each locationid. Group the results for all combination of distinct locationid and shelf column. Rolls up the results into subtotal and running total. Return locationid, shelf and sum of quantity as TotalQuantity.

  ```sql
   select locationid,shelf,sum(quantity) totalquantity from production.productinventory group by rollup(locationid,shelf) limit 10;
   ```


   15.write a query in SQL to find the total quantity for each locationid and calculate the grand-total for all locations. Return locationid and total quantity. Group the results on locationid.

   ```sql
   select locationid,sum(quantity) totalquantity from production.productinventory group by rollup(locationid) limit 10;
   ```
 
    
 
    16.Write a query in SQL to retrieve the number of employees for each City. Return city and number of employees. Sort the result in ascending order on city.

    ```sql
    select a.city, count(distinct a.addressid) as total_count 
    from person.address a 
    join person.businessentityaddress b on a.addressid = b.addressid 
    group by a.city 
    order by a.city asc 
    limit 5;
    ```

17.Write a query in SQL to retrieve the total sales for each year. Return the year part of order date and total due amount. Sort the result in ascending order on year part of order date.

    ```sql
    select date_part('year', orderdate) as year, sum(totaldue) as orderamount 
    from sales.salesorderheader 
    group by date_part('year', orderdate) 
    order by date_part('year', orderdate) 
    limit 5;
    ```

18.write a query in SQL to retrieve the total sales for each year. Filter the result set for those orders where order year is on or before 2016. Return the year part of orderdate and total due amount. Sort the result in ascending order on year part of order date.

```sql
select date_part('year',orderdate) as yearoforderdate,sum(totaldue) as totaldueorder from sales.salesorderheader where date_part('year',orderdate)<=2016 group by date_part('year',orderdate) order by date_part('year',orderdate) asc;
```

19.write a query in SQL to find the contacts who are designated as a manager in various departments. Returns ContactTypeID, name. Sort the result set in descending order.

```sql
select contacttypeid,name from person.contacttype where name like '%Manager%' order by contacttype desc;
```

20.write a query in SQL to make a list of contacts who are designated as 'Purchasing Manager'. Return BusinessEntityID, LastName, and FirstName columns. Sort the result set in ascending order of LastName, and FirstName.

```sql
 SELECT pp.BusinessEntityID, LastName, FirstName   FROM Person.BusinessEntityContact AS pb INNER JOIN Person.ContactType AS pc   ON pc.ContactTypeID = pb.ContactTypeID  INNER JOIN Person.Person AS pp ON pp.BusinessEntityID = pb.PersonID  WHERE pc.Name = 'Purchasing Manager' ORDER BY LastName, FirstName;
```
