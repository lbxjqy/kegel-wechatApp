const {Sequelize,DataTypes} = require('sequelize');
var sqlConfig = {
    host: "rm-2zev320dah3std64myo.mysql.rds.aliyuncs.com",
    user: "linboxuan",
    password: "lbxhh345",
    database: "kegel"
};
var sequelize = new Sequelize(sqlConfig.database, sqlConfig.user, sqlConfig.password, {
    host: sqlConfig.host,
    dialect: 'mysql',
    operatorsAliases: "false",
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    },
    timezone: '+08:00' //东八时区
});
module.exports = {sequelize,DataTypes}