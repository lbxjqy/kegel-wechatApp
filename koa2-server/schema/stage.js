const moment = require('moment');
const {sequelize,DataTypes} = require('../config/db');

module.exports = sequelize.define('stage', {
        // 阶段ID
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        // 名
        name: {
            type: DataTypes.STRING,
            field: 'name',
        },
        // 最小区间
        minInterval: {
            type: DataTypes.INTEGER,
            field: 'min_interval'
        },
        // 最大区间（各个阶段不应该重叠）
        maxInterval: {
            type: DataTypes.INTEGER,
            field: 'max_interval'
        },
        // 训练内容 格式： [{"burst":30},{"threeStage":10}]
        trainContent: {
            type: DataTypes.JSON,
            field: 'train_content'
        },
        // 训练内容所需要的时间
        trainTime: {
            type: DataTypes.INTEGER,
            field: 'train_time'
        },
        // 爆发次数
        burst: {
            type: DataTypes.INTEGER,
            field: 'burst',
        },
        // 三段次数
        threeStage: {
            type: DataTypes.INTEGER,
            field: 'three_stage',
        },
        // 耐力次数
        endurance: {
            type: DataTypes.INTEGER,
            field: 'endurance',
        },
        // 创建时间
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at',
            // get() {
            //     return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
            // }
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