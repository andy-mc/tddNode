
const { test_api } = require("../../tests/utils")
const Note = require("../../models/note")
const route = "/api/notes"

describe("Notes", () => {

  const testNotes = [
    { content: "note_a" },
    { content: "note_b" },
  ]

  beforeEach(async () => {
    await Note.deleteMany({})
    await Note.insertMany(testNotes)
  })

  describe("Get", () => {
    test("should return 200 and content-type application/json", async () => {
      const response = await test_api.get(route)
      expect(response.status).toBe(200)
      expect(response.headers["content-type"]).toContain("application/json")
    })

    test("should return 2 notes", async () => {
      const response = await test_api.get(route)
      expect(response.body.length).toBe(testNotes.length)
    })
  })

  describe("Post", () => {
    const new_note = { content: "new_note" }
    test("create a new note", async () => {
      const response = await test_api.post(route).send(new_note)
      expect(response.status).toBe(200)
      expect(response.header["content-type"]).toContain("application/json")
      expect(response.body.content).toBe(new_note.content)

      const saved_note = await Note.findOne({ _id: response.body._id })
      expect(saved_note.content).toBe(new_note.content)
    })

    test("create a new note with out contet", async () => {
      const response = await test_api.post(route).send({})
      expect(response.status).toBe(400)
      expect(response.header["content-type"]).toContain("application/json")
      expect(response.body.content).toBeUndefined()
      expect(response.body.error).toBeDefined()
    })
  })

  describe("Delete", () => {
    test("delete a new note", async () => {
      const note_to_delete = await Note.findOne({})
      const delete_id = note_to_delete._id

      const response = await test_api.delete(`${route}/${delete_id}`)
      expect(response.status).toBe(204)
      expect(response.error).toBe(false)

      const saved_note = await Note.findById(delete_id)
      expect(saved_note).toBe(null)
    })

    test("delete a not existant note", async () => {
      const before_notes = await Note.find()
      const no_db_id = "6290cd3d0f7b34c47f14b123"

      const response = await test_api.delete(`${route}/${no_db_id}`)
      expect(response.status).toBe(204)
      expect(response.error).toBe(false)

      const after_notes = await Note.find()
      expect(after_notes.length).toBe(before_notes.length)
    })

    test("404 for invalid request", async () => {
      const invalid_id = "123"
      const response = await test_api.delete(`${route}/${invalid_id}`)
      expect(response.status).toBe(400)
      expect(response.error).toBeDefined()
    })
  })
})
