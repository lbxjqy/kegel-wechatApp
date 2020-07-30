const User = require('../schema/user')
const Stage = require('../schema/stage')
const result = require('../public/utils/result')
const moment = require('moment')
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
        let stage = await Stage.findById(body.stageId);
        if(!stage) {
            ctx.body = result.getResultFiled(null, "stageId is error")
            // return 不执行后面操作
            return;
        }
        let u = await User.findOne({
            attributes: ["id","createdAt","updatedAt","nickname","integral","stage","trainTime"],
            where: {
                id:ctx.query.uid,
            }
        })
        u.trainTime += body.time
        next();
    }
}
module.exports = userController