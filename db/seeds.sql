-- creating users 
-- USER SEEDS
INSERT INTO user (username, password, email) VALUES ("American Bar", "abacab", "americanbar@gmail.com"), ("Rock N Roll Night Club", "12354", "dominic@hotmail.com"), 
("Danny's Tires", "bald13s", "Danny@dannytires.com"), ("Wine Store", "envinvoveritas", "wineguyr@winerymail.com");

-- Displaying a single user's username, password & email
SELECT user.username, user.password, user.email, user.id AS id
FROM user
WHERE user.id = 3;

-- =====================
--  INVENTORY ITEMS SEEDS // WEEKLY INVENTORY SEEDS ONCE INSERTED
-- =====================
INSERT INTO inventory_items (unit_name, unit_category, unit_price, unit_distributor, unit_count, unit_count_par, item_count, item_count_par, item_count_type, item_price, user_id) 
VALUES ("golden apples", "produce", 55, "luckys produce", 1, .75, 88, 88*.75, "individual", 55/88, 1), 
("jack daniels", "liquor", 64, "drink and smoke bev", 1, .5, 12, 12*.5, "individual", 64/12, 1),
("dukes mayonnaise", "condiments", 24, "luckys produce", 1, .5, 4, 4*.5, "individual", 24/4, 1),
("marlboro reds", "tobacoo", 30, "drink and smoke bev", 1, .25, 10, 12*.25, "individual", 30/10, 1),
("sani clean", "chemicals", 120, "chem club", 1, .4, 4, 12*.4, "individual", 120/4, 1),
("mustard", "condiments", 24, "luckys produce", 1, .25, 4, 4*.25, "individual", 24/4, 1),
("tires", "auto parts", 200, "tires 4 all", 1, .5, 8, 8*.5, "individual", 200/8, 1);

-- Master inventory sheet POPULATES WEEKLY INVENTORY SHEET leaving unit & item count columns empty
INSERT INTO weekly_inventory_table (unit_name, unit_category, unit_price, unit_distributor, unit_count_par,  item_count_par, item_count_type, item_price, user_id)
SELECT unit_name, unit_category, unit_price, unit_distributor, unit_count_par, item_count_par, item_count_type, item_price, user_id
FROM inventory_items
WHERE inventory_items.user_id = 1;

--  Updates the new inventory sheet with a DATE  (notice it is in a string)
UPDATE weekly_inventory_table SET inventory_date = "2020-10-04" WHERE inventory_date IS NULL;
-- run lines 14 to 21 again, and then run line 30 with a new date string

-- This will display a given inventory sheet on inventory_date & user ID
SELECT * FROM weekly_inventory_table WHERE inventory_date = "2020-10-04" AND user_id = 1;

-- This should be how we update specific column values at certain locations
-- UPDATE weekly_inventory_table SET ?? = ? WHERE ? = ? AND user_id = ?;

-- SELECTING A SPECIFIC USERS INVENTORY MASTER SHEET based on ID
SELECT * FROM inventory_items
WHERE inventory_items.user_id = 1;
--  FOR A USER TO UPDATE MAIN INVENTORY SHEET