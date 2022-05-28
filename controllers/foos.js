
const foosRouter = require("express").Router()
const path = "/"

foosRouter.get(path, (req, res) => {
  if(req) {
    throw new Error("error foos")
  }
  res.send({ a: 1 })
})

module.exports = foosRouter