const mongoose = require("mongoose")

async function globalTeardown () {
  await mongoose.connection.close()
  // process.exit(0)
}

module.exports = globalTeardown