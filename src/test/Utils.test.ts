import { getStringInfo, toUpperCase } from '../app/Utils';

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

  it('should return info for a valid string', () => {
    const actual = getStringInfo('My-String');

    expect(actual.lowerCase).toBe('my-string');
    expect(actual.extraInfo).toEqual({});
    expect(actual.characters).toHaveLength(9);
    expect(actual.characters).toContain<string>('M');
    expect(actual.characters).toEqual(
      expect.arrayContaining(['S', 't', 'r', 'i', 'n', 'g', 'M', 'y'])
    );
    expect(actual.extraInfo).not.toBe(undefined);
    expect(actual.extraInfo).not.toBeUndefined();
    expect(actual.extraInfo).toBeDefined();
    expect(actual.extraInfo).toBeTruthy();
  });
});
