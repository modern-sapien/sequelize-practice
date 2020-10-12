module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("user",  {
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
            // freezeTableName: true,        // keeps from becoming pluralized 
            timestamps: false,            // CAN REMOVE once not using seed data
        });
    return User;
}