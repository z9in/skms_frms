let {Sequelize, DataTypes} = require('sequelize');
let sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'users.sqlite'
});

const User = sequelize.define('User', {
    userIds: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue:'',
    },
    userPwds: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue:'',
    },
    userName: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue:'',
    },
    userRole: {
        type:DataTypes.STRING,
        allowNull: true,
    }

})

module.exports = {sequelize, User};