module.exports = function(sequelize, DataTypes){
    var Inventory_item = sequelize.define("Inventory_item",  {
        unit_name:{
            type: DataTypes.STRING,
            allowNull: false
        }, 
        unit_category:{
            type: DataTypes.STRING,
            allowNull: false
        }, 
        unit_price:{
            type: DataTypes.DECIMAL (10,2),   // change to decimal?
            allowNull: false
        }, 
        unit_distributor:{
            type: DataTypes.STRING,
            allowNull: false
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
            allowNull: false
        },
        item_count_type:{               // possibly replace with measurement?
            type: DataTypes.STRING,
            allowNull: false
        },
        item_price:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        item_count_par:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true},
        // INVENTORY TABLE id should be auto-incrementing, but only used as a reference, should not necessarily be more than one reference table for MVP
    },{
        // freezeTableName: false,        // IS PLURALIZED
        timestamps: false,            // CAN REMOVE once not using seed data
    });
    return Inventory_item;
};