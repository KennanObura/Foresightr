'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Action extends Model {

    actionstatus(){
        return this.hasOne('App/Models/Actionstatus')
    }

    tag(){
        return this.hasMany('App/Models/Tag')
    }

    user(){
        return this.belongsToMany('App/Models/User')
    }
}

module.exports = Action
