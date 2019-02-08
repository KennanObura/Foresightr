'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ActionSchema extends Schema {
  up () {
    this.create('actions', (table) => {
      table.increments()
      table.string('action_name', 200)
      table.string('action_desc', 200)
      table.string('action_code', 200).unique()
      table.string('action_purpose', 200)
      table.text('action_comment', 'mediumtext')
      table.timestamps()
    })
  }

  down () {
    this.drop('actions')
  }
}

module.exports = ActionSchema
