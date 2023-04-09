import { toUpperCase } from '../app/Utils';

describe('Utils test suite', () => {
  test('should return uppercase', () => {
    // arrange:
    const sut = toUpperCase;
    const expected = 'ABC';

    // act:
    const actual = toUpperCase('abc');

    // assert:
    expect(actual).toBe(expected);
  });
});
