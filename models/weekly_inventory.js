module.exports = function(sequelize, DataTypes){
    const Weekly_inventory= sequelize.define("weekly_inventory",  {
        unit_name:{
            type: DataTypes.STRING,
            allowNull: true
        }, 
        unit_category:{
            type: DataTypes.STRING,
            allowNull: true
        }, 
        unit_price:{
            type: DataTypes.INTEGER,   // change to decimal?
            allowNull: true
        }, 
        unit_distributor:{
            type: DataTypes.STRING,
            allowNull: true
        },
         unit_count:{
            type: DataTypes.INTEGER,
            allowNull: true
        }, 
        unit_count_par:{
            type: DataTypes.DECIMAL (10,2),
            allowNull: true
        },
        item_count:{
            type: DataTypes.DECIMAL (10,2),
            allowNull: true
        },
        item_count_type:{               // possibly replace with measurement?
            type: DataTypes.STRING,
            allowNull: true
        },
        item_price:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        item_count_par:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        current_item_count:{
            type: DataTypes.INTEGER,
            allowNull: true
        }, 
        item_in_use_count:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        inventory_total_value: {              // THIS IS WHERE inventory_items & weekly inventory changes
            type: DataTypes.INTEGER,
            allowNull: true
        }, 
        projected_order_cost: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        inventory_date: {
            type: DataTypes.DATEONLY,
            allowNull: true                         // user will give date to use
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        cogs_weekly_table_id: {                     // foreign key situation? where when a user assigns it to a week, it accepts that ID as a value?
            type: DataTypes.INTEGER,
            allowNull: true
        },
        },{
            // freezeTableName: true,        // keeps from becoming pluralized 
            timestamps: false,            // CAN REMOVE once not using seed data
        });
    return Weekly_inventory;
}