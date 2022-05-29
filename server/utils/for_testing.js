const reverse = (string) => {
  return string
    .split("")
    .reverse()
    .join("")
}

const average = (array) => {
  if (array.length === 0) return 0

  const reducer = (sum, item) => {
    return sum + item
  }

  return array.reduce(reducer, 0) / array.length
}

const dummy = () => 1

const totalLikes = (blogs) => {
  if (blogs.length === 0) return 0

  const reducer = (sum, item) => {
    const likes = item.likes || 0
    return sum + likes
  }

  return blogs.reduce(reducer, 0)
}

module.exports = {
  reverse,
  average,
  dummy,
  totalLikes
}