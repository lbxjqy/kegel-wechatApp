var stage = require('../schema/stage.js');

// 同步表结构
stage.sync({
    force: true  // 强制同步，先删除表，然后新建
});