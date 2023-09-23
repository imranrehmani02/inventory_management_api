const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'inventory_management',
    'root',
    '',
    {
        'host': 'localhost',
        'dialect': 'mysql',
    }
)

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = {
    db,
    sequelize,
}