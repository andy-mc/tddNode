describe('Matchers', () => {
  test('null value is a defined value', () => {
    let value = null
    expect(value).toBeDefined()
  })

  describe('toBeVStoEqual', () => {
    test('tobe and tobqual are the same', () => {
      reverseString('hello', (str) => {
        expect(str).toBe('olleh')
      })
    })
  })
})

function reverseString(str, cb) {
  cb(str.split('').reverse().join(''))
}