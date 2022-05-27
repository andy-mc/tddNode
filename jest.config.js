const path = require('path')

const config = {
  testEnvironment: 'node',
  verbose: true,
  setupFilesAfterEnv: [path.join(__dirname, '/tests/config.js')],
}

module.exports = config