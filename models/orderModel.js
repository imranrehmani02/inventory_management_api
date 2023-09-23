const Sequelize = require('sequelize');
const { sequelize } = require('../database');

module.exports.Order = sequelize.define('orders',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    total: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    orderStatus: {
        type: Sequelize.STRING,
        default: 'pending',
    }
},
{
    timestamps: false
});
