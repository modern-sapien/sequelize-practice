// Dependencies
// =============================================================
const { INTEGER } = require("sequelize");
const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");


// Require the sequelize library
// Require the connection to the database (connection.js)

// INITIAL USER CREATION
const User = sequelize.define("User",  {
    username: {
        type: Sequelize.STRING,
        allowNull: false},
    password: {
        type: Sequelize.STRING,
        allowNull: false},
    email: {
        type: Sequelize.STRING,
        allowNull: false},
    inventory_table_id: {
        type: Sequelize.INTEGER,
        allowNull: true},
    define: {
        freezeTableName: true,        // keeps from becoming pluralized 
        timestamps: false,            // CAN REMOVE once not using seed data              
    }
    // USER id should be auto-incrementing & primary key
});
User.sync();

// USERS TABLe
const Users_table = sequelize.define("users_table",  {
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    email: Sequelize.STRING,
    inventory_table_id: Sequelize.INTEGER,
    users_id: Sequelize.INTEGER,
    newUser_id: Sequelize.INTEGER
});
Users_table.sync();

// INITIAL INVENTORY CREATION
const Inventory_table = sequelize.define("inventory_table",  {
    unit_name: Sequelize.STRING,
    unit_category: Sequelize.STRING,
    unit_price: Sequelize.STRING,
    unit_distributor: Sequelize.INTEGER,
    item_count: Sequelize.INTEGER,
    item_count_type: Sequelize.STRING,
    item_price: Sequelize.INTEGER,
    item_count_par: Sequelize.INTEGER,
    unit_count: Sequelize.INTEGER,
    current_item_count: Sequelize.INTEGER,
    item_in_use_count: Sequelize.INTEGER,
    inventory_total_value: Sequelize.INTEGER,
    projected_order_cost: Sequelize.INTEGER,
    user_id: Sequelize.INTEGER,
    // INVENTORY TABLE id should be auto-incrementing, but only used as a reference, should not necessarily be more than one reference table for MVP
});
Inventory_table.sync();

// WEEKLY INVENTORY INPUT
const Weekly_inventory_table = sequelize.define("weekly_inventory_table",  {
    unit_name: Sequelize.STRING,
    unit_category: Sequelize.STRING,
    unit_price: Sequelize.STRING,
    unit_distributor: Sequelize.INTEGER,
    item_count: Sequelize.INTEGER,
    item_count_type: Sequelize.STRING,
    item_price: Sequelize.INTEGER,
    item_count_par: Sequelize.INTEGER,
    unit_count: Sequelize.INTEGER,
    current_item_count: Sequelize.INTEGER,
    item_in_use_count: Sequelize.INTEGER,
    inventory_total_value: Sequelize.INTEGER,
    projected_order_cost: Sequelize.INTEGER,
    user_id: Sequelize.INTEGER,     // USER ID
    cogs_weekly_table: Sequelize.INTEGER   // COGS TABLE
     // WEEKLY INVENTORY TABLE id should be auto-incrementing
});
Weekly_inventory_table.sync();

// WEEKLY COGS INPUT
const Cogs_weekly_table = sequelize.define("cogs_weekly_table",  {
    // SHOULD WE INCLUDE A DATE COLUMN?
    weekly_cost: Sequelize.INTEGER,
    weekly_sales: Sequelize.INTEGER,
    starting_inventory: Sequelize.INTEGER,            // THIS value needs to come from a reference INVENTORY "total value" ID
    ending_inventory: Sequelize.INTEGER,              // THIS value needs to come from a reference INVENTORY "total value" ID
    cost_of_goods_weekly: Sequelize.INTEGER,          // TOTAL COST OF GOODS for the week, starting and purchased MINUS ending
    operational_cost_weekly: Sequelize.DECIMAL,       // cost of goods weekly DIVIDED by sales
    user_id: Sequelize.INTEGER,                       // USER ID
    weekly_inventory_table: Sequelize.INTEGER         // COGS TABLE
    // COGS WEEKLY INVENTORY TABLE id should be auto-incrementing
});
Cogs_weekly_table.sync();

// COGS YEARLY TABLE INPUT
const Cogs_yearly_table = sequelize.define("cogs_yearly_table",  {
    week_id: Sequelize.INTEGER,                         // 1 - 52
    starting_inventory: Sequelize.INTEGER,              // THIS value needs to come from a reference INVENTORY "total value" ID
    ending_inventory: Sequelize.INTEGER,                // THIS value needs to come from a reference INVENTORY "total value" ID
    weekly_cost: Sequelize.INTEGER,
    cost_of_goods_weekly: Sequelize.INTEGER,          // TOTAL COST OF GOODS for the week, starting and purchased MINUS ending
    weekly_sales: Sequelize.INTEGER,
    operational_cost_weekly: Sequelize.DECIMAL,       // cost of goods weekly DIVIDED by sales
    user_id: Sequelize.INTEGER,                       // USER ID
    weekly_inventory_table: Sequelize.INTEGER         // COGS TABLE
    // COGS WEEKLY INVENTORY TABLE id should be auto-incrementing
});
Cogs_yearly_table.sync();


module.exports = User, Users_table, Inventory_table, Weekly_inventory_table, Cogs_weekly_table, Cogs_yearly_table;


