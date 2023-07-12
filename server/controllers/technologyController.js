const {Technology} = require('../models/models')
const ApiError = require('../error/ApiError')
class TechnologyController{
    async create(req, res, next){
        const {name} = req.body
        const technology = await Technology.create({name})
        return res.json(technology)
    }
}
module.exports = new TechnologyController()