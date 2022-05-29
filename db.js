const mongoose = require("mongoose")
const config = require("./utils/config")
const logger = require("./utils/logger")

async function connect() {
  try {
    await mongoose.connect(config.MONGODB_URI)
    logger.info("connected to MongoDB")
  } catch (error) {
    logger.error("error connection to MongoDB:", error.message)
  }
}

async function disconnect() {
  try {
    await mongoose.connection.close()
    logger.info("disconnected from MongoDB")
  } catch (error) {
    logger.error("error disconnecting from MongoDB:", error.message)
  }
}

async function state() {
  return mongoose.connection.readyState
}

module.exports = {
  connect,
  disconnect,
  state
}
