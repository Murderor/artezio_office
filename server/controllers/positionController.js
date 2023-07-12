const {Position} = require('../models/models')
const ApiError = require('../error/ApiError')
class PositionController{
    async create(req, res, next){
        const {name} = req.body
        const position = await Position.create({name})
        return res.json(position)
    }

    async getAll(req, res, next){
        const position = await Position.findAll()
        return res.json(position)
    }
}
module.exports = new PositionController()