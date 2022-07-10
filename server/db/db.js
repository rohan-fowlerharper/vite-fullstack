const connection = require('./connection')

module.exports = {
  getWidgets,
  addWidget,
}

function getWidgets(db = connection) {
  return db('widgets').select()
}

function addWidget(widget, db = connection) {
  return db('widgets').insert(widget)
}
