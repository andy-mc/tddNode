"use strict"

const { test_api } = require("../../tests/utils")

describe("Foos Router", () => {
  const path = "/api/foos"

  describe("GET", () => {
    test("should test a throw on get expect.assertions()", async () => {
      expect.assertions(2)

      const response = await test_api.get(path)
      if (response.error) {
        expect(response.error.status).toBe(500)
        expect(response.error.message).toMatch(/GET.*500/)
      }
    })
  })
})