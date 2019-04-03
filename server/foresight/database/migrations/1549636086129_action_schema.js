'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ActionSchema extends Schema {
  up () {
    this.create('actions', (table) => {
      table.increments()
      table.string('action_name', 200)
      table.string('action_code', 200).unique()
      table.text('action_desc', 'mediumtext')
      table.integer('tag_id').unsigned().references('id').inTable('tags')
      table.integer('user_id').unsigned().references('id').inTable('usres')
      table.timestamps()
    })
  }

  down () {
    this.drop('actions')
  }
}

module.exports = ActionSchema
