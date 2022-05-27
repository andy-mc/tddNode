const { reverse, average, dummy, totalLikes } = require('../utils/for_testing')

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

  test('average of []', () => {
    const result = average([])
    expect(result).toBe(0)
  })
})

describe('Dummy', () => {
  test('dummy returns one', () => {
    const blogs = []

    const result = dummy(blogs)
    expect(result).toBe(1)
  })
})

describe('total likes', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]

  test('when list has only one blog, equals the likes of that', () => {
    const result = totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })

  test('when list has likes undefined', () => {
    delete listWithOneBlog[0].likes
    const result = totalLikes(listWithOneBlog)
    expect(result).toBe(0)
  })
})