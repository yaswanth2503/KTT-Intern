
-- basic crud operations ,constraints,keywords

create database trip;
use trip;
CREATE TABLE vehicle_trip_logs (
    trip_id SERIAL PRIMARY KEY,
    vehicle_id VARCHAR(20) NOT NULL,
    driver_id VARCHAR(20) NOT NULL,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL,
    start_location VARCHAR(255),
    end_location VARCHAR(255),
    distance_km DECIMAL(10,2),
    average_speed_kmph DECIMAL(5,2),
    max_speed_kmph DECIMAL(5,2),
    fuel_consumed_liters DECIMAL(8,2),
    engine_hours DECIMAL(8,2),
    harsh_braking_count INT DEFAULT 0,
    over_speed_count INT DEFAULT 0,
    idle_time_minutes INT DEFAULT 0,
    gps_accuracy FLOAT,
    weather_conditions TEXT,
    maintenance_flag BOOLEAN DEFAULT FALSE,
    trip_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO vehicle_trip_logs (
    vehicle_id, driver_id, start_time, end_time,
    start_location, end_location, distance_km,
    average_speed_kmph, max_speed_kmph, fuel_consumed_liters,
    engine_hours, harsh_braking_count, over_speed_count,
    idle_time_minutes, gps_accuracy, weather_conditions, trip_notes
)
VALUES
('TN12BC4567', 'DRV1234', '2025-04-09 06:00:00', '2025-04-09 12:15:00',
 'Chennai', 'Coimbatore', 498.20, 72.5, 102.4, 35.12, 8.5, 2, 3, 10, 0.95, 'Cloudy', 'No issues during trip.'),

('AP09XZ7890', 'DRV5678', '2025-04-08 14:30:00', '2025-04-08 20:00:00',
 'Vijayawada', 'Hyderabad', 275.00, 68.0, 95.0, 22.33, 5.9, 4, 2, 8, 0.92, 'Sunny', 'Minor traffic at Narketpally.'),

('MH01XY2345', 'DRV3456', '2025-04-07 07:15:00', '2025-04-07 16:45:00',
 'Mumbai', 'Pune', 145.80, 58.5, 88.6, 15.65, 4.2, 5, 1, 6, 0.96, 'Sunny', 'Delivery completed successfully.'),

('KA05MN3210', 'DRV7890', '2025-04-06 08:00:00', '2025-04-06 14:20:00',
 'Mysore', 'Bangalore', 143.60, 64.2, 92.3, 14.23, 3.8, 1, 0, 5, 0.99, 'Clear', 'On-time arrival, smooth roads.'),

('DL10AB1111', 'DRV5555', '2025-04-05 11:00:00', '2025-04-05 17:30:00',
 'Delhi', 'Agra', 231.00, 70.0, 105.0, 19.78, 5.0, 3, 6, 12, 0.90, 'Foggy', 'Visibility low during morning.'),

('RJ14CD9999', 'DRV2222', '2025-04-04 09:45:00', '2025-04-04 16:10:00',
 'Jaipur', 'Ajmer', 135.40, 60.5, 91.4, 12.90, 3.5, 2, 1, 7, 0.94, 'Clear', 'Fuel stop in mid-route.'),

('GJ01EF1212', 'DRV3333', '2025-04-03 05:50:00', '2025-04-03 11:35:00',
 'Ahmedabad', 'Surat', 265.70, 67.3, 99.1, 21.56, 4.7, 0, 3, 9, 0.97, 'Cloudy', 'No delays reported.'),

('TN10GH3434', 'DRV1212', '2025-04-02 16:00:00', '2025-04-02 22:10:00',
 'Trichy', 'Madurai', 215.90, 65.0, 97.0, 18.44, 4.4, 1, 2, 4, 0.96, 'Rainy', 'Heavy rain, speed reduced.'),

('KL07IJ5656', 'DRV8787', '2025-04-01 07:20:00', '2025-04-01 13:40:00',
 'Kochi', 'Thiruvananthapuram', 231.60, 62.1, 93.5, 20.12, 4.6, 2, 4, 11, 0.93, 'Humid', 'Driver reported drowsiness.');

select * from vehicle_trip_logs;

SET SQL_SAFE_UPDATES = 0;

update vehicle_trip_logs
set vehicle_id='123456'
where vehicle_id='KA01AB1234';

select vehicle_id from vehicle_trip_logs;
select * from vehicle_trip_logs;

delete from vehicle_trip_logs where over_speed_count>5;

alter table vehicle_trip_logs
add trip_duration_minutes int;
select trip_duration_minutes from vehicle_trip_logs;

alter table vehicle_trip_logs
modify fuel_consumed_liters decimal(10,5);
select fuel_consumed_liters from vehicle_trip_logs;

alter table vehicle_trip_logs
change trip_notes trip_remarks TEXT;

ALTER TABLE vehicle_trip_logs
RENAME TO trip_data;

select * from trip_data;

ALTER TABLE trip_data
DROP COLUMN harsh_braking_count;

ALTER TABLE trip_data
MODIFY average_speed_kmph DECIMAL(5,2) NOT NULL;

select trip_id,driver_id from trip_data where max_speed_kmph>90.00;

select driver_id,max_speed_kmph from trip_data order by max_speed_kmph desc limit 5;

update trip_data
set vehicle_id='123456'
where vehicle_id='KA05MN3210' or vehicle_id='TN10GH3434';

select * from trip_data;

select vehicle_id,sum(fuel_consumed_liters) as total_fuel_in_liters from trip_data
group by vehicle_id order by total_fuel_in_liters desc;

SELECT driver_id, AVG(average_speed_kmph) AS avg_speed
FROM trip_data GROUP BY driver_id HAVING avg_speed > 65;


-- all joins

use fleet_tracking;
CREATE TABLE vehicles (
    vehicle_id VARCHAR(10) PRIMARY KEY,
    model VARCHAR(50),
    manufacturer VARCHAR(50),
    year INT
);

INSERT INTO vehicles (vehicle_id, model, manufacturer, year) VALUES
('V001', 'Model X', 'Tesla', 2022),
('V002', 'EcoSport', 'Ford', 2020),
('V003', 'Civic', 'Honda', 2021),
('V004', 'Creta', 'Hyundai', 2022),
('V005', 'Compass', 'Jeep', 2023),
('V006', 'Fortuner', 'Toyota', 2021),
('V007', 'Altroz', 'Tata', 2020),
('V008', 'Baleno', 'Suzuki', 2022);


CREATE TABLE trip_data (
    trip_id INT AUTO_INCREMENT PRIMARY KEY,
    vehicle_id VARCHAR(10),
    driver_id VARCHAR(10),
    start_time DATETIME,
    end_time DATETIME,
    distance_km DECIMAL(6,2),
    FOREIGN KEY (vehicle_id) REFERENCES vehicles(vehicle_id)
);

INSERT INTO trip_data (vehicle_id, driver_id, start_time, end_time, distance_km) VALUES
('V001', 'DRV101', '2025-04-01 06:00:00', '2025-04-01 12:00:00', 150.25),
('V002', 'DRV102', '2025-04-02 07:00:00', '2025-04-02 11:30:00', 180.10),
('V003', 'DRV103', '2025-04-03 08:00:00', '2025-04-03 13:00:00', 205.75),
('V004', 'DRV104', '2025-04-04 06:30:00', '2025-04-04 12:30:00', 300.20),
('V002', 'DRV105', '2025-04-05 07:00:00', '2025-04-05 14:00:00', 220.60),
('V001', 'DRV106', '2025-04-06 06:45:00', '2025-04-06 11:15:00', 120.90),
('V005', 'DRV107', '2025-04-07 05:30:00', '2025-04-07 10:30:00', 275.33),
('V009', 'DRV999', '2025-04-08 06:00:00', '2025-04-08 11:00:00', 250.00); 


SELECT t.trip_id, t.vehicle_id, v.model, v.manufacturer, t.driver_id, t.distance_km
FROM trip_data t
INNER JOIN vehicles v ON t.vehicle_id = v.vehicle_id;

SELECT v.vehicle_id, v.model, t.driver_id, t.distance_km
FROM vehicles v
LEFT JOIN trip_data t ON v.vehicle_id = t.vehicle_id;

SELECT t.vehicle_id, t.driver_id, v.model, v.manufacturer
FROM trip_data t
RIGHT JOIN vehicles v ON t.vehicle_id = v.vehicle_id;

SELECT v.vehicle_id, v.model, t.driver_id, t.distance_km
FROM vehicles v
LEFT JOIN trip_data t ON v.vehicle_id = t.vehicle_id
UNION

SELECT v.vehicle_id, v.model, t.driver_id, t.distance_km
FROM vehicles v
RIGHT JOIN trip_data t ON v.vehicle_id = t.vehicle_id;

SELECT t1.trip_id AS trip1, t2.trip_id AS trip2, t1.vehicle_id, t1.driver_id AS driver1, t2.driver_id AS driver2
FROM trip_data t1
JOIN trip_data t2 ON t1.vehicle_id = t2.vehicle_id AND t1.trip_id < t2.trip_id;

SELECT t.driver_id, v.model
FROM trip_data t
CROSS JOIN vehicles v
LIMIT 20;


