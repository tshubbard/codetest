import { sort } from './packageSort'

const dataProvider = [
  [10, 10, 10, 10, 'STANDARD', 'should be cool with happy path variables'],
  [150, 10, 10, 10, 'SPECIAL', 'should return SPECIAL if width >= 150'],
  [10, 150, 10, 10, 'SPECIAL', 'should return SPECIAL if height >= 150'],
  [10, 10, 150, 10, 'SPECIAL', 'should return SPECIAL if length >= 150'],
  [10, 10, 10, 20, 'SPECIAL', 'should return SPECIAL if mass >= 20'],
  [100, 100, 100, 10, 'SPECIAL', 'should return SPECIAL if volume >= 1000000'],
  [100, 100, 100, 20, 'REJECTED', 'should return REJECTED if bulky and heavy'],
  [undefined, 100, 100, 20, 'REJECTED', 'should throw error if missing a param', true],
]

describe('Package Sort Test', () => {
  dataProvider.forEach(args => {
    const [width, height, length, mass, expected, testName, shouldThrow = false] = args

    test(testName, () => {
      if (shouldThrow) {
        expect(() => sort(width, height, length, mass)).toThrow('Missing required parameter')
      } else {
        expect(sort(width, height, length, mass)).toBe(expected)
      }
    })
  })
})