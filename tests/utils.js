const supertest = require('supertest')
const app = require('../app')

module.exports = {
  test_api: supertest(app)
}