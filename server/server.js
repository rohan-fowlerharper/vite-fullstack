const express = require('express')
const path = require('path')

const server = express()

const widgetsRoutes = require('./routes/widgets')

server.use(express.static(path.resolve(__dirname, '../client', 'dist')))
server.use(express.json())

server.use('/api/widgets', widgetsRoutes)

server.get('/api', (req, res) => {
  res.json({ message: 'Hello World!' })
})

server.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client', 'dist', 'index.html'))
})

module.exports = server
