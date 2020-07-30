const User = require('../schema/user')
const Stage = require('../schema/stage')
const result = require('../public/utils/result')
const moment = require('moment')
const sequelize = require('sequelize')
class userController {
    /**
     * 创建用户
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async create(ctx,next) {
        let user = await User.create({
            nickname:"linboxuan"
        })
        ctx.body = "linboxuan";
        next();
    }

    /**
     * 查询用户
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async Info(ctx,next) {
        ctx.body = await User.findOne({
            attributes: ["id","createdAt","updatedAt","nickname","integral","stage","trainTime"],
            where: {
                id:ctx.query.id,
            }
        })
        next();
    }

    /**
     * 结束训练 更新累计时间
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async endTrain(ctx,next) {
        let body = ctx.request.body;
        // 查询处训练时间
        let stage = await Stage.findById(body.stageId);
        if(!stage) {
            ctx.body = result.getResultFiled(null, "stageId is error")
            return;
        }
        // 修改用户表累计训练时间
        // UPDATE `user` SET `train_time`=train_time+90 WHERE ( `id` = '1')
        let res = await User.update({trainTime:sequelize.literal('train_time+' + stage.trainTime)},{where:{id:body.uid}})
        if(res.length[0]) {
            ctx.body = result.getResultFiled(null, "train_time is error")
            return;
        }
        let u = await User.findById(body.uid,{
            attributes: ["id","trainTime"]})
        ctx.body = result.getResultSuccess(u);
        next();
    }
}
module.exports = userController