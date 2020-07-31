const moment = require('moment');
const {sequelize,DataTypes} = require('../config/db');

module.exports = sequelize.define('user', {
        // 用户ID
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        // 名
        nickname: {
            type: DataTypes.STRING,
            field: 'nickname',
        },
        // 积分
        integral: {
            type: DataTypes.INTEGER,
            field: 'integral',
        },
        // 阶段
        stage: {
            type: DataTypes.INTEGER,
            field: 'stage',
        },
        // 累计训练时常(秒)
        trainTime: {
            type: DataTypes.INTEGER,
            field: 'train_time',
        },
        // 最高测试记录(秒)
        maxTime: {
            type: DataTypes.INTEGER,
            field: 'max_time',
        },
        // 创建时间
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at',
            get() {
                return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
            }
        },
        // 更新时间
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at',
            get() {
                return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
            }
        },
        deleted_at: {
            type: DataTypes.DATE
        }
    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true,
        paranoid: true,//假的删除,
        underscored:true,
    })