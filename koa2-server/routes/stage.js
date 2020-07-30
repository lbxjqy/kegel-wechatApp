const router = require('koa-router')()
const StageController = require('../controller/stage')
router.prefix('/stage')

router.post('/endTest', StageController.endTest);
module.exports = router
