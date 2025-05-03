--DDL Commands

-- create
create table if not exists product(
 productid int primary key,
 productname varchar(255),
 model varchar(255),
 category varchar(255)
 );

--alter

alter table product
alter column productid set not null;

--truncate

truncate table product;

-- drop

drop table product;


--DQL

select * from product;.

-- Constraints
-- primary key
create table if not exists product(
 productid int primary key,
 productname varchar(255),
 model varchar(255),
 category varchar(255)
 );

-- not null,check,foreign key,unique
create table if not exists purchase(
productid int unique not null check (productid>0),
purchasedfrom varchar(255),
foreign key(productid) references product(productid)
 );


-- DML

-- insert

insert into product(productid,productname,category,model) values
(12,'Mobile','Electronics','Samsung'),
(13,'Laptop','Electronics','HP'),
(14,'Tablet','Gadgets','Realme'),
(15,'Airdopes','Gadgets','Boat'),
(16,'Mouse','Electronics','Zebronics');


insert into product(productid,productname,category,model) values
(17,'Mobile','Electronics','Redme');

insert into product(productid,productname,category,model) values
(18,'Mobile','Electronics','Realme'),
(19,'Laptop','Electronics','Asus');

select * from product;

insert into purchase(productid,purchasedfrom) values
(12,'Flipkart');

insert into purchase(productid,purchasedfrom) values
(13,'Amazon'),
(14,'Flipkart'),
(15,'Shopshy'),
(16,'Localstore');



select * from purchase;

-- update

update purchase 
set purchasedfrom='Meesho' where productid=15;


-- delete

delete from product where productid=17;

-- where, and
select * from product where category='Electronics' and productname='Mobile';

-- OR
select * from product where category='Electronics' OR productname='Mobile';

--Order by

select * from product order by category,model asc;

select * from product order by category,model desc;

alter table purchase add column price numeric(10,2);

select * from purchase;

update purchase set price=12000 where productid=12;
update purchase set price=50000 where productid=13;
update purchase set price=25000 where productid=14;
update purchase set price=20000 where productid=15;
update purchase set price=2000 where productid=16;

-- group by and aggregate functions

select category,count(model) from product group by category;

select min(price) from purchase;
select max(price) from purchase;
select avg(price) from purchase;
select sum(price) from purchase;

insert into purchase(productid,purchasedfrom,price)
values
(18,'Meesho',20000),
(19,'Meesho',22000);


select * from product;
select * from purchase;

-- join and group by
select pd.model,pr.price from product as pd
join purchase as pr
on pd.productid=pr.productid
group by pd.model,pr.price;

-- having,group by,join
select pd.model,sum(pr.price) as price from product as pd
join purchase as pr
on pd.productid=pr.productid
group by pd.model having sum(pr.price)<60000;
















