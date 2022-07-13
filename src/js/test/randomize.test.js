const { it, expect } = require('@jest/globals')
const { randomize } = require('./randomize')
global.Math.random = () => 0.5

it('should return new array with length equal number * 2', () => {
    const array = [1, 2, 3, 4, 5]
    const number = 3
    const result = randomize(array, number)

    expect(result).toHaveLength(number * 2)
})

it('should return sliced, duplicated and joined array', () => {
    const data = [1, 2, 3, 4, 5]
    const toSliceNumber = 3

    const expected = [2, 3, 4, 2, 3, 4]

    const result = randomize(data, toSliceNumber)

    expect(expected).toEqual(result)
})
