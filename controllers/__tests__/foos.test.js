"use strict"

const { test_api } = require("../../tests/utils")
const foos = require("../foos")
const fetchCallBack = foos.fetchCallBack

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

  describe("fetchCallBack", () => {
    test("should return avena with out error", (done) => {
      fetchCallBack(false, (error, data) => {
        if (error) {
          done(error)
          return
        }
        try {
          expect(data).toBe("avena")
          done()
        } catch (error) {
          done(error)
        }
      })
    })

    test("should return failed error avena", (done) => {
      fetchCallBack(new Error("wooki"), (error, data) => {
        if (error) {
          expect(error.message).toBe("wooki")
          done()
          return
        }
        try {
          expect(data).toBe("avena")
          done("should return failed error avena")
        } catch (error) {
          done(error)
        }
      })
    })
  })
})