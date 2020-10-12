-- cogs_db will house 
    -- inventory_table
    -- weekly_inventory_table
    -- cogs_weekly_table
    -- cogs_yearly_table

DROP DATABASE IF EXISTS cogs_db;
CREATE DATABASE cogs_db;

USE cogs_db;

-- creating users 
-- USER SEEDS
INSERT INTO users (username, password, email) VALUES ("American Bar", "abacab", "americanbar@gmail.com"), ("Rock N Roll Night Club", "12354", "dominic@hotmail.com"), 
("Danny's Tires", "bald13s", "Danny@dannytires.com"), ("Wine Store", "envinvoveritas", "wineguyr@winerymail.com");

-- USER TABLE SEEDS
INSERT INTO users (id) VALUES (1), (2), (3), (4);

-- JOINING ALL USERS & USER TABLE at IDs
-- SELECT user.username, user.password, user.email, user.id AS id 
-- FROM users
-- INNER JOIN users ON user.id = users.id;

-- Displaying a single user's username, password & email
SELECT user.username, user.password, user.email, user.id AS id
FROM users
WHERE user.id = 3;

--  INVENTORY ITEMS SEEDS // WEEKLY INVENTORY SEEDS ONCE INSERTED
-- =====================
INSERT INTO inventory_items (unit_name, unit_category, unit_price, unit_distributor, unit_count, unit_count_par, item_count, item_count_par, item_count_type, item_price, user_id) 
VALUES ("golden apples", "produce", 55, "luckys produce", 1, .75, 88, 88*.75, "individual", 55/88, 1), 
("jack daniels", "liquor", 64, "drink and smoke bev", 1, .5, 12, 12*.5, "individual", 64/12, 1),
("dukes mayonnaise", "condiments", 24, "luckys produce", 1, .5, 4, 4*.5, "individual", 24/4, 1),
("marlboro reds", "tobacoo", 30, "drink and smoke bev", 1, .25, 10, 12*.25, "individual", 30/10, 1),
("sani clean", "chemicals", 120, "chem club", 1, .4, 4, 12*.4, "individual", 120/4, 1);

select * from inventory_items;


-- This is how we will insert information from the base inventory sheet into the WEEKLY INVENTORY COLUMN leaving count columns empty
INSERT INTO weekly_inventories (unit_name, unit_category, unit_price, unit_distributor, unit_count_par,  item_count_par, item_count_type, item_price, user_id)
SELECT unit_name, unit_category, unit_price, unit_distributor, unit_count_par, item_count_par, item_count_type, item_price, user_id
FROM inventory_items
WHERE inventory_items.user_id = 1;

select * from weekly_inventories;

-- SELECTING A SPECIFIC USERS INVENTORY based on ID
SELECT * FROM inventory_items
WHERE inventory_items.user_id = 1;
--  FOR A USER TO UPDATE MAIN INVENTORY SHEET
