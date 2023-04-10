import { StringUtils, getStringInfo, toUpperCase } from '../app/Utils';

describe('Utils test suite', () => {
  describe.only('StringUtils tests', () => {
    let sut: StringUtils;
    beforeEach(() => {
      sut = new StringUtils();
    });

    it('Should return correct upperCase', () => {
      const actual = sut.toUpperCase('abc');
      expect(actual).toBe('ABC');
    });

    it('Should through error on invalid argument - function', () => {
      function expectError() {
        const actual = sut.toUpperCase('');
      }
      expect(expectError).toThrow();
      expect(expectError).toThrowError('Invalid argument!');
    });

    it('Should throw error on invalid argument - arrow function', () => {
      expect(() => {
        sut.toUpperCase('');
      }).toThrowError('Invalid argument!');
    });

    it.only('Should throw error on invalid argument - try catch block', (done) => {
      try {
        sut.toUpperCase('');
        done('GetStringInfo should throw error for invalid arg!');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Invalid argument!');
        done();
      }
    });
  });

  test('should return uppercase', () => {
    // arrange:
    const sut = toUpperCase;
    const expected = 'ABC';

    // act:
    const actual = toUpperCase('abc');

    // assert:
    expect(actual).toBe(expected);
  });

  describe('ToUpperCase examples', () => {
    it.each([
      { input: 'abc', expected: 'ABC' },
      { input: 'My-String', expected: 'MY-STRING' },
      { input: 'def', expected: 'DEF' },
    ])('$input toUpperCase should be $expected', ({ input, expected }) => {
      const actual = toUpperCase(input);
      expect(actual).toBe(expected);
    });
  });

  describe('getStringInfo for arg My-String should', () => {
    test('return right length', () => {
      const actual = getStringInfo('My-String');
      expect(actual.characters).toHaveLength(9);
    });
    test('return right lower case', () => {
      const actual = getStringInfo('My-String');
      expect(actual.lowerCase).toBe('my-string');
    });
    test('return right upperCase', () => {
      const actual = getStringInfo('My-String');
      expect(actual.upperCase).toBe('MY-STRING');
    });
    test('return right characters', () => {
      const actual = getStringInfo('My-String');
      expect(actual.characters).toContain<string>('M');
      expect(actual.characters).toEqual(
        expect.arrayContaining(['S', 't', 'r', 'i', 'n', 'g', 'M', 'y'])
      );
    });
    test('return defined extra info', () => {
      const actual = getStringInfo('My-String');
      expect(actual.extraInfo).toBeDefined();
      expect(actual.extraInfo).toBeTruthy();
    });
    test('return defined extra info', () => {
      const actual = getStringInfo('My-String');
      expect(actual.extraInfo).toEqual({});
    });
  });
});
