### May 27, 2025

## Warranty Tracker - Database Design

Main Tables:
* Employee_Credentials
* Asset_Inventory

Sub Tables: 
* Warranty_Extensions
* Warranty_History_Log

<br>

### create a database called SampleWarrantyTracker
```sql
  create database SampleWarrantyTracker template template0;
```

### Employee_Credentials
 ```sql
create table employee_credentials( employee_id int primary key not null,password varchar(50) not null);
```
<br>

### Asset_Inventory
```sql
create table asset_inventory (
  asset_id varchar(50) primary key not null,
  employee_id int unique not null, 
  serial_number varchar(50) unique not null, 
  category varchar(50) not null, 
  brand varchar(50) not null,
  model varchar(50) not null, 
  purchased_from varchar(50), 
  purchased_date timestamp not null, 
  warranty_start_date timestamp not null,
  warranty_end_date timestamp not null check (warranty_end_date > warranty_start_date),
  iswarranty_extendable varchar(3) check (iswarranty_extendable in ('yes', 'no')), 
  asset_price numeric(10,2) not null, 
  asset_images bytea not null, 
  constraint fk_employee_id_employee_credentials foreign key (employee_id) references employee_credentials(employee_id));
```
<br>

### Warranty_Extensions
```sql
create table warranty_extensions(
   extension_id serial primary key,
   asset_id varchar(50) not null,
   serial_number varchar(50) not null,
   purchased_date timestamp not null,
   warranty_start_date timestamp not null,
   warranty_end_date timestamp not null,
   warranty_extension_price numeric(10,2) not null,
   warranty_extension_in_months integer not null,
   constraint fk_assetid_assetinventory foreign key(asset_id) references asset_inventory(asset_id));
```
<br>

### Warranty_History_Log
```sql
create table warranty_history_log(
    history_id serial primary key not null,
    extension_id int not null,
    asset_id varchar(50) not null,
    serial_number varchar(50) not null,
    warranty_start_date timestamp not null,
    warranty_end_date timestamp not null,
    extended_warranty_date timestamp not null,
    constraint fk_extensionid_warrantyextension foreign key(extension_id) references warranty_extensions(extension_id));
```