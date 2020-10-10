-- cogs_db will house 
    -- inventory_table
    -- weekly_inventory_table
    -- cogs_weekly_table
    -- cogs_yearly_table

DROP DATABASE IF EXISTS cogs_db;
CREATE DATABASE cogs_db;

USE cogs_db;

-- CREATE TABLE users
-- (
-- 	id INT AUTO_INCREMENT NOT NULL,
-- 	username varchar(200),
-- 	password varchar(200),
--     email varchar(200),
-- 	inventory_table_id INTEGER,
-- 	PRIMARY KEY (id)
-- );

-- CREATE TABLE users_table
-- (
-- 	id INT AUTO_INCREMENT NOT NULL,
-- 	username varchar(200),
-- 	password varchar(200),
--     email varchar(200),
-- 	inventory_table_id INTEGER,
--     users_id INTEGER,
-- 	PRIMARY KEY (id)
-- );