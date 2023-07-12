const ApiError = require('../error/ApiError')
const {Employee} = require('../models/models')
class EmployeeController{
    async create(req, res, next){
        const {name, technology_id, position_id, workspace_id} = req.body
        const{img} = req.files
    }
}
module.exports = new EmployeeController()