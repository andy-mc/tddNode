// In this file setupFilesAfterEnv for jest

// https://startfunction.com/2021/05/08/hide-console-log-jest-tests/
global.console.log = jest.fn()
global.console.error = jest.fn()