const mongoose = require('mongoose')

const { test_api } = require('../../tests/utils')
const Note = require('../../models/note')
const route = '/api/notes'

describe('Notes', () => {

  const testNotes = [
    { content: 'note_a' },
    { content: 'note_b' },
  ]
  beforeEach(async () => {
    await Note.deleteMany({})
    await Note.insertMany(testNotes)
  })

  describe('Get', () => {
    test('should return 200 and content-type application/json', async () => {
      const response = await test_api.get(route)
      expect(response.status).toBe(200)
      expect(response.headers['content-type']).toContain('application/json')
    })

    test('should return 2 notes', async () => {
      const response = await test_api.get(route)
      expect(response.body.length).toBe(testNotes.length)
    })
  })

  describe('Post', () => {
    const new_note = { content: 'new_note' }
    test('create a new note', async () => {
      const response = await test_api.post(route).send(new_note)
      expect(response.status).toBe(200)
      expect(response.header['content-type']).toContain('application/json')
      expect(response.body.content).toBe(new_note.content)

      const saved_note = await Note.findOne({ _id: response.body._id })
      expect(saved_note.content).toBe(new_note.content)
    })
  })

  afterAll(() => {
    mongoose.connection.close()
  })
})
