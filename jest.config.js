const path = require('path')

const config = {
  testEnvironment: 'node',
  verbose: true,
  setupFilesAfterEnv: [path.join(__dirname, 'test_config.js')],
}

module.exports = config