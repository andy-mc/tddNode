const { test_api } = require("../../tests/utils")
const Note = require("../../models/note")

describe("Notes Mocks", () => {
  const route = "/api/notes"
  const mockValue = jest.fn().mockResolvedValue

  const testNotes = [
    { content: "note_a" },
    { content: "note_b" },
  ]

  beforeEach(async () => {
    await Note.deleteMany({})
    await Note.insertMany(testNotes)
  })

  beforeEach(async () => {
    Note.find = mockValue()
  })

  describe("Get", () => {
    test("should check find is called", async () => {
      await test_api.get(route)
      expect(Note.find).toHaveBeenCalledWith()
    })

    test("should return all model find response", async () => {
      const mockNotes = [{ content: "mock_1" }]
      // mockResolvedValue can be called again on an already created mock
      // and it will return a new mock resolved value
      Note.find.mockResolvedValue(mockNotes)
      const response = await test_api.get(route)
      expect(response.body).toEqual(mockNotes)
    })
  })
})
