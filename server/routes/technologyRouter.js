const Router = require("express")
const technologyController = require('../controllers/technologyController')
const router = new Router()


router.post('/',technologyController.create)
router.get('/',)
router.get('/:id',)


module.exports = router