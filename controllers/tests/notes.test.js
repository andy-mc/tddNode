const mongoose = require('mongoose')

describe('Notes', () => {
  const { test_api } = require('../../tests/utils')
  const route = '/api/notes'

  describe('Get', () => {
    fit('should return 200 and content-type application/json', async () => {
      const response = await test_api.get(route)
      expect(response.status).toBe(200)
      expect(response.headers['content-type']).toContain('application/json')
    })

    afterAll(() => {
      mongoose.connection.close()
    })
  })
})
