const Sequelize = require('sequelize');
const { sequelize } = require('../database');

module.exports.User = sequelize.define('users',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
},
{
    timestamps: false
});
