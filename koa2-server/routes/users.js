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
router.get('/info',UserController.Info)
module.exports = router
