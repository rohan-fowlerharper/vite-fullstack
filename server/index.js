const createServer = require('./server')

const port = process.env.PORT || 3001

createServer()
  .then((server) => {
    server.listen(port, () => {
      console.log(`API server listening on port ${port}`)
    })
  })
  .catch((err) => {
    process.exit(1)
    console.error(err)
  })
