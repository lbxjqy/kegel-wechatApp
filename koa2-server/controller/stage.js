const Stage = require('../schema/stage')
const User = require('../schema/user')
const moment = require('moment')
const result = require('../public/utils/result')
const {Op} = require('sequelize')
class StageController {
    /**
     * 创建阶段
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async create(ctx,next) {
        console.log(ctx);
        ctx.body = "linboxuan";
        next();
    }

    /**
     * 能力测试结束
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async endTest(ctx,next) {
        let body = ctx.request.body;
        // 查询匹配区间 返回区间名字
        let stage = await Stage.findOne({
            attributes: ["id","name"],
            where: {
                [Op.and]: [
                    {"max_interval": {[Op.gte]:body.time}},
                    {"min_interval": {[Op.lte]:body.time}}
                ]
            }
        })
        // 判断时长是否为用户最高记录
        let user = await User.findById(body.uid);
        if(user) {
            // 如果测试时间大于用户时间 并且 用户阶段不等于测试结果的阶段，修改
            if(body.time > user.maxTime) {
                let updateParams = {
                    maxTime: body.time
                }
                if(user.stage != stage.id) {
                    updateParams.stage = stage.id
                }
                await User.update(updateParams,{where: {id: body.uid}});
            }
        }
        ctx.body = result.getResultSuccess({stageName:stage.name,time:body.time});
        next();
    }
}
module.exports = StageController