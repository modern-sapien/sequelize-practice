-- cogs_db will house 
    -- inventory_table
    -- weekly_inventory_table
    -- cogs_weekly_table
    -- cogs_yearly_table

DROP DATABASE IF EXISTS cogs_db;
CREATE DATABASE cogs_db;

USE cogs_db;

-- USER SEEDS
INSERT INTO user (username, password, email) VALUES ("American Bar", "abacab", "americanbar@gmail.com"), ("Rock N Roll Night Club", "12354", "dominic@hotmail.com"), 
("Danny's Tires", "bald13s", "Danny@dannytires.com"), ("Wine Store", "envinvoveritas", "wineguyr@winerymail.com");

-- USER TABLE SEEDS
INSERT INTO users_table (id) VALUES (1), (2), (3), (4);

-- JOINING ALL USERS & USER TABLE at IDs
SELECT user.username, user.password, user.email, user.id AS id 
FROM user
INNER JOIN users_table ON user.id = users_table.id;

-- Displaying a single user's username, password & email
SELECT user.username, user.password, user.email, user.id AS id
FROM user
WHERE user.id = 3