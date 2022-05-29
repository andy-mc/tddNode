const app = require("./app")
const http = require("http")
const config = require("./utils/config")
const logger = require("./utils/logger")
const db = require("./db")

const server = http.createServer(app)

db.connect()
  .then(() => {
    server.listen(config.PORT, () => {
      logger.info(`Server running on port ${config.PORT}`)
    })
  })
