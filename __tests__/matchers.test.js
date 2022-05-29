describe("Matchers", () => {
  test("null value is a defined value", () => {
    let value = null
    expect(value).toBeDefined()
  })

  describe("toBeVStoEqual", () => {
    test("tobe and tobqual are the same", (done) => {
      reverseString("hello", (str) => {
        expect(str).toBe("olleh")
        done()
      })
    })
  })
})

function reverseString(str, cb) {
  cb(str.split("").reverse().join(""))
}