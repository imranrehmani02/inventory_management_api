const Sequelize = require('sequelize');
const { sequelize } = require('../database');

module.exports.Product = sequelize.define('products',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    available_quantity:{
        type: Sequelize.INTEGER,
        allowNull: false,
        default: 0,
    }
},
{
    timestamps: false
});
