module.exports = function(sequelize, DataTypes){
    const User = sequelize.define("User",  {
        username: {
            type: DataTypes.STRING,
            allowNull: false},
        password: {
            type: DataTypes.STRING,
            allowNull: false},
        email: {
            type: DataTypes.STRING,
            allowNull: false},
        inventory_table_id: {
            type: DataTypes.INTEGER,
            allowNull: true},
        },{
            freezeTableName: true,        // keeps from becoming pluralized 
            timestamps: false,            // CAN REMOVE once not using seed data
        });

    User.associate = function(models){
        // Associates User with inventory items 
        // When user is deleted, delete any associated inventory items
        User.hasMany(models.inventoryItem, {
            onDelete: "cascade"
        });
    }
}