const db = require("../db")
const logger = require("../utils/logger")

async function globalTeardown () {
  try {
    const dbState = await db.state()
    if (dbState === "connected") {
      await db.disconnect()
    }
    process.exit(0)
  } catch (error) {
    logger.error("[Error Jest globalTeardown]:", error)
    process.exit(1)
  }
}

module.exports = globalTeardown