const db = require("../db")

async function setupFiles () {
  const db_state = await db.state()
  if (db_state !== 1) {
    await db.connect()
  }
}

setupFiles()