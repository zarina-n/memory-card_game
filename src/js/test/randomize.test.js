const { it, expect } = require('@jest/globals')
const { randomize } = require('./randomize')

it('should return new array with length equal number * 2', () => {
    const array = [1, 2, 3, 4, 5]
    const number = 3
    const result = randomize(array, number)

    expect(result).toHaveLength(number * 2)
})
