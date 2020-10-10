-- creating users 
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
WHERE user.id = 3;

--  INVENTORY ITEMS SEEDS
-- =====================
INSERT INTO inventory_items (unit_name, unit_category, unit_price, unit_distributor, unit_count, unit_count_par, item_count, item_count_par, item_count_type, item_price, item_in_use_count) 
VALUES ("golden apples", "produce", 55, "luckys produce", 1, .75, 88, 88*.75, "individual", 55/88, 5), 
("jack daniels", "liquor", 64, "drink and smoke bev", 1, .5, 12, 12*.5, "individual", 64/12, 0),
("dukes mayonnaise", "condiments", 24, "luckys produce", 1, .5, 4, 4*.5, "individual", 24/4, 0),
("marlboro reds", "tobacoo", 30, "drink and smoke bev", 1, .25, 10, 12*.25, "individual", 30/10, 0),
("sani clean", "chemicals", 120, "chem club", 1, .4, 4, 12*.4, "individual", 120/4, 0);

-- WEEKLY INVENTORY SEEDS
-- ====================
INSERT INTO weekly_inventory_table (user_id) VALUES (1), (2), (3), (4);
-- corresponds to user data


-- SELECTING A SPECIFIC USERS INVENTORY based on ID
SELECT * FROM inventory_items
WHERE inventory_items.user_id = 1;
--  FOR A USER TO UPDATE MAIN INVENTORY SHEET

-- INNER JOIN inventory_items & Weekly Inventory Table where the user_id matches
SELECT * FROM inventory_items
INNER JOIN weekly_inventory_table ON inventory_items.user_id = weekly_inventory_table.user_id; 

-- This is how we will insert information from the base inventory sheet into the WEEKLY INVENTORY COLUMN leaving count columns empty
INSERT INTO weekly_inventory_table (unit_name, unit_category, unit_price, unit_distributor, unit_count_par,  item_count_par, item_count_type, item_price, item_in_use_count, user_id)
SELECT unit_name, unit_category, unit_price, unit_distributor, unit_count_par, item_count_par, item_count_type, item_price, item_in_use_count, user_id
FROM inventory_items
WHERE inventory_items.user_id = 1;