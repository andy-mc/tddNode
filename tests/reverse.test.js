const { reverse, average } = require('../utils/for_testing')

describe('Reverse', () => {
  test('reverse of a', () => {
    const result = reverse('a')

    expect(result).toBe('a')
  })

  test('reverse of react', () => {
    const result = reverse('react')

    expect(result).toBe('tcaer')
  })

  test('reverse of releveler', () => {
    const result = reverse('releveler')

    expect(result).toBe('releveler')
  })
})

describe('Average', () => {
  test('average of [1, 2, 3]', () => {
    const result = average([1, 2, 3])
    expect(result).toBe(2)
  })

  test('average of [1, 2, 3, 4]', () => {
    const result = average([1, 2, 3, 4])
    expect(result).toBe(2.5)
  })
})