const db = require("../db")

async function setupFiles () {
  const dbState = await db.state()
  if (dbState === "disconnected") {
    await db.connect()
  }
}

setupFiles()