const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError')
const {Employee} = require('../models/models')
class EmployeeController{
    async create(req, res, next){
        try {
            const {name, technology_id, position_id, workspace_id} = req.body
            const{img} = req.files
            let filename = uuid.v4() + ".jpg"
            let date = new Date()
            await img.mv(path.resolve(__dirname, '..', 'static', filename))
            const employee = await Employee.create({name, img:filename, technology_id, position_id, workspace_id, employed_since: date})
            return res.json(employee)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res, next){
        try {
            const employees = await Employee.findAll()
            return res.json(employees)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}
module.exports = new EmployeeController()