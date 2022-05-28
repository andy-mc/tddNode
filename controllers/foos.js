
const foosRouter = require("express").Router()
const path = "/"

foosRouter.get(path, (req, res) => {
  if(req) {
    throw new Error("error foos")
  }
  res.send({ a: 1 })
})

foosRouter.fetchCallBack = (error, cb) => {
  setTimeout(() => {
    cb(error, "avena")
  }, 1000)
}

module.exports = foosRouter