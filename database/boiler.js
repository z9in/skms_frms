let {Sequelize, DataTypes} = require('sequelize');
let sequelize1 = new Sequelize({
    dialect: 'sqlite',
    storage: 'boiler.sqlite'
});

const Boiler = sequelize1.define('Boiler', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    last_month: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    yesterday: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    today: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    value: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    value_month: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    state: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
    }
})

const Boiler2 = sequelize1.define('Boiler2', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    last_month: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    yesterday: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    today: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    value: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    value_month: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    state: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
    }
})

module.exports = {sequelize1, Boiler, Boiler2};