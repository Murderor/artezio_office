const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Employee = sequelize.define('employee',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING,},
    img:{type:DataTypes.STRING, allowNull: false},
    technology_id:{type: DataTypes.INTEGER, allowNull: false},
    position_id:{type:DataTypes.INTEGER, allowNull:false},
    workspace_id:{type:DataTypes.INTEGER, allowNull:true},
    employed_since:{type:DataTypes.DATEONLY, allowNull:false}
})

const Workspace = sequelize.define('workspace',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement: true}
})

const Position = sequelize.define('position',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    name:{type:DataTypes.STRING, unique:true, allowNull:false}
})

const Technology = sequelize.define('technology',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    name:{type:DataTypes.STRING, unique:true, allowNull:false}
})

Workspace.hasMany(Employee)
Employee.belongsTo(Workspace)

Position.hasMany(Employee)
Employee.belongsTo(Position)

Technology.hasMany(Employee)
Employee.belongsTo(Technology)

module.exports={
    Employee,
    Workspace,
    Position,
    Technology
}