const Router = require("express")
const positionController = require('../controllers/positionController')
const router = new Router()


router.post('/',positionController.create)
router.get('/',positionController.getAll)
router.get('/:id',)


module.exports = router