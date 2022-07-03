const express = require('express')
const path = require('path')

const { createServer: createViteServer } = require('vite')

const createServer = async function () {
  const server = express()

  server.use(express.static(path.resolve(__dirname, '../dist')))
  server.use(express.json())

  server.use('/api/widgets', require('./routes/widgets'))

  server.get('/api', (req, res) => {
    res.json({ message: 'Hello World!' })
  })

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: 'html' },
    })
    server.use(vite.middlewares)
  } else {
    server.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../dist/index.html'))
    })
  }

  return server
}

module.exports = createServer
