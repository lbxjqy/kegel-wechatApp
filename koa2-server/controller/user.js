const User = require('../schema/user')
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
            where: {
                id:ctx.query.id,
            },
        })
        next();
    }
}
module.exports = userController