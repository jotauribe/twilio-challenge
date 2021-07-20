import { unique } from './array.utils'

describe('array.utils', () => {
  describe('unique', () => {
    it.each([
      [['abc', 'def', 'ghi'], ['abc', 'def', 'ghi']],
      [['abc', 'abc', ], ['abc']],
      [[1, 2, 3], [1, 2, 3]],
      [[1, 1, 1], [1]],
      [[], []],
    ])('should return a list of unique values', (input, expectedOutput) => {
      const result = unique(input);

      expect(result.length).toBe(expectedOutput.length);
      expect(result).toEqual(expect.arrayContaining(expectedOutput));
    });
  });
});
