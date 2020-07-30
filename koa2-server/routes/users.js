const router = require('koa-router')()
const UserController = require('../controller/user')
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post('/create', UserController.create);
// 获取用户信息
router.get('/info',UserController.Info)
// 结束训练
router.post('/endTrain',UserController.endTrain)
module.exports = router
