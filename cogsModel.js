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
    },{
        freezeTableName: true,        // keeps from becoming pluralized 
        timestamps: false,            // CAN REMOVE once not using seed data
    });
    // USER id should be auto-incrementing & primary key

User.sync();

// USERS TABLE
const Users_table = sequelize.define("users_table",  {
    username: {
        type: Sequelize.STRING,
        allowNull: true},
    password: {
        type: Sequelize.STRING,
        allowNull: true},
    email: {
        type: Sequelize.STRING,
        allowNull: true},
    inventory_table_id: {
        type: Sequelize.INTEGER,
        allowNull: true},
    user_id: {
            type: Sequelize.INTEGER,
            allowNull: true},
},{
    freezeTableName: true,        // keeps from becoming pluralized 
    timestamps: false,            // CAN REMOVE once not using seed data
});
Users_table.sync();

// INITIAL INVENTORY CREATION
const Inventory_items = sequelize.define("inventory_item",  {
    unit_name:{
        type: Sequelize.STRING,
        allowNull: false
    }, 
    unit_category:{
        type: Sequelize.STRING,
        allowNull: false
    }, 
    unit_price:{
        type: Sequelize.INTEGER,   // change to decimal?
        allowNull: false
    }, 
    unit_distributor:{
        type: Sequelize.STRING,
        allowNull: false
    },
     unit_count:{
        type: Sequelize.INTEGER,
        allowNull: true
    }, 
    unit_count_par:{
        type: Sequelize.DECIMAL (10,2),
        allowNull: true
    },
    item_count:{
        type: Sequelize.DECIMAL (10,2),
        allowNull: false
    },
    item_count_type:{               // possibly replace with measurement?
        type: Sequelize.STRING,
        allowNull: false
    },
    item_price:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    item_count_par:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: true},
    // INVENTORY TABLE id should be auto-incrementing, but only used as a reference, should not necessarily be more than one reference table for MVP
},{
    freezeTableName: false,        // IS PLURALIZED
    timestamps: false,            // CAN REMOVE once not using seed data
});
Inventory_items.sync();

// WEEKLY INVENTORY INPUT
const Weekly_inventory_table = sequelize.define("weekly_inventory_table",  {
    unit_name:{
        type: Sequelize.STRING,
        allowNull: true
    }, 
    unit_category:{
        type: Sequelize.STRING,
        allowNull: true
    }, 
    unit_price:{
        type: Sequelize.INTEGER,   // change to decimal?
        allowNull: true
    }, 
    unit_distributor:{
        type: Sequelize.STRING,
        allowNull: true
    },
     unit_count:{
        type: Sequelize.INTEGER,
        allowNull: true
    }, 
    unit_count_par:{
        type: Sequelize.DECIMAL (10,2),
        allowNull: true
    },
    item_count:{
        type: Sequelize.DECIMAL (10,2),
        allowNull: true
    },
    item_count_type:{               // possibly replace with measurement?
        type: Sequelize.STRING,
        allowNull: true
    },
    item_price:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    item_count_par:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    current_item_count:{
        type: Sequelize.INTEGER,
        allowNull: true
    }, 
    item_in_use_count:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    inventory_total_value: {              // THIS IS WHERE inventory_items & weekly inventory changes
        type: Sequelize.INTEGER,
        allowNull: true
    }, 
    projected_order_cost: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    inventory_date: {
        type: Sequelize.DATEONLY,
        allowNull: true                         // user will give date to use
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    cogs_weekly_table_id: {                     // foreign key situation? where when a user assigns it to a week, it accepts that ID as a value?
        type: Sequelize.INTEGER,
        allowNull: true
    },
    },{
        freezeTableName: true,        // keeps from becoming pluralized 
        timestamps: false,            // CAN REMOVE once not using seed data
    });
Weekly_inventory_table.sync();

// WEEKLY COGS INPUT
const Cogs_weekly_table = sequelize.define("cogs_weekly_table",  {
    // SHOULD WE INCLUDE A DATE COLUMN?
    starting_date: Sequelize.DATE,                 // this comes from inventory ID inventory date column, user can change?
    starting_total_inventory: Sequelize.INTEGER,  // THIS value needs to come from a reference INVENTORY "total value" ID
    weekly_cost: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    weekly_sales: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    ending_date: Sequelize.DATE,                            // this comes from weekly inventory_date                     
    ending_total_inventory: Sequelize.INTEGER,              // THIS value needs to come from a reference INVENTORY "total value" ID
    cost_of_goods_weekly: Sequelize.INTEGER,          // TOTAL COST OF GOODS for the week, starting and purchased MINUS ending
    operational_cost_weekly: Sequelize.DECIMAL,       // cost of goods weekly DIVIDED by sales
    user_id: Sequelize.INTEGER,                       // USER ID
    // COGS WEEKLY INVENTORY TABLE id should be auto-incrementing
},{
    freezeTableName: true,        // keeps from becoming pluralized 
    timestamps: false,            // CAN REMOVE once not using seed data
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
},{
    freezeTableName: true,        // keeps from becoming pluralized 
    timestamps: false,            // CAN REMOVE once not using seed data
});
Cogs_yearly_table.sync();

const Cogsdb = {
    User: User,
    Users_table: Users_table,
    Inventory_items: Inventory_items,
    Weekly_inventory_table: Weekly_inventory_table,
    Cogs_weekly_table: Cogs_weekly_table,
    Cogs_yearly_table: Cogs_yearly_table
}
module.exports = Cogsdb;

// User, Users_table, Inventory_items, Weekly_inventory_table, Cogs_weekly_table, Cogs_yearly_table];


// THIS IS DIFFERENT