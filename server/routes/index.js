const Router = require("express")
const router = new Router()
const employeeRouter = require('./employeeRouter')
const positionRouter = require('./positionRouter')
const technologyRouter = require('./technologyRouter')
const workspaceRouter = require('./worspaceRouter')

router.use('/employee', employeeRouter)
router.use('/position', positionRouter)
router.use('/technology',technologyRouter)
router.use('/workspace', workspaceRouter)


module.exports = router