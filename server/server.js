const express = require('express')
const path = require('path')
const fs = require('fs')

const server = express()

server.use(express.static(path.resolve(__dirname, '../dist')))
server.use(express.json())

server.use('/api/widgets', require('./routes/widgets'))
server.use('/api/*', (req, res) => {
  res.sendStatus(404)
})

server.get('*', (req, res) => {
  try {
    const html = fs.readFileSync(
      path.resolve(__dirname, '../dist/index.html'),
      'utf8'
    )
    res.send(html)
  } catch (err) {
    if (err.message.includes('no such file or directory')) {
      return res
        .status(404)
        .send('dist folder not found, try running `npm run build`')
    }
    return res.status(500).send('something went wrong')
  }
})

module.exports = server
