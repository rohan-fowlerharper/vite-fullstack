const server = require('./server')

const port = process.env.PORT || 3001

server.listen(port, () => {
  console.log(`API server listening on port ${port}`)
})
