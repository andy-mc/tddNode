const mongoose = require('mongoose')

describe('Notes', () => {
  const { test_api } = require('../../tests/utils')
  const Note = require('../../models/note')
  const route = '/api/notes'

  const testNotes = [
    { content: 'note_a' },
    { content: 'note_b' },
  ]
  beforeEach(async () => {
    await Note.deleteMany({})
    await Note.insertMany(testNotes)
  })

  describe('Get', () => {
    it('should return 200 and content-type application/json', async () => {
      const response = await test_api.get(route)
      expect(response.status).toBe(200)
      expect(response.headers['content-type']).toContain('application/json')
    })

    fit('should return 2 notes', async () => {
      const response = await test_api.get(route)
      expect(response.body.length).toBe(testNotes.length)
    })
  })

  afterAll(() => {
    mongoose.connection.close()
  })
})
