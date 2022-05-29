// https://startfunction.com/2021/05/08/hide-console-log-jest-tests/

async function setupFiles () {
  global.console.log = jest.fn()
  global.console.error = jest.fn()
}

module.exports = setupFiles