const db = require("../db")

async function globalTeardown () {
  await db.disconnect()
}

module.exports = globalTeardown