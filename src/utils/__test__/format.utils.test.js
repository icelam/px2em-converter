import {
  roundToNearest,
  deduplicateArray,
  removeExtraSpacesAndCommas,
  convertPixelRangeToArray
} from '../format.utils';

describe('roundToNearest()', () => {
  [
    {
      value: 1,
      precision: 4,
      expected: 1
    },
    {
      value: 2.01,
      precision: 4,
      expected: 2.01
    },
    {
      value: 33.23,
      precision: 4,
      expected: 33.23
    },
    {
      value: 47.236,
      precision: 4,
      expected: 47.236
    },
    {
      value: 57.3842,
      precision: 4,
      expected: 57.3842
    },
    {
      value: 67.39999,
      precision: 4,
      expected: 67.4
    },
    {
      value: 70.12345,
      precision: 4,
      expected: 70.1235
    },
    {
      value: 84.12345,
      precision: 4,
      expected: 84.1235
    },
    {
      value: 99.12341,
      precision: 4,
      expected: 99.1234
    },
    {
      value: 1.0001,
      precision: 0,
      expected: 1
    },
    {
      value: 1.00000000001,
      precision: 2,
      expected: 1
    },
    {
      value: 1.99300001,
      precision: 2,
      expected: 1.99
    }
  ].forEach(({ value, precision, expected }) => {
    it(`should round ${value} to nearest ${precision} decimal places`, () => {
      expect(roundToNearest(value, precision)).toEqual(expected);
    });
  });

  it('should return original value when precision specified is a string', () => {
    const value = 1.0000003;
    expect(roundToNearest(value, 'string')).toEqual(value);
  });

  it('should return original value when precision specified is not integer', () => {
    const value = 1.0000003;
    expect(roundToNearest(value, 1.3)).toEqual(value);
  });
});

describe('deduplicateArray()', () => {
  it('should return an deduplicated array', () => {
    expect(deduplicateArray([5, 1, 2, 3, 4, 4, 5])).toEqual([5, 1, 2, 3, 4]);
  });

  it('should return the original array when no deduplicated value is found', () => {
    expect(deduplicateArray([10, 11, 12])).toEqual([10, 11, 12]);
  });

  it('should return an empty array when input is not an array', () => {
    expect(deduplicateArray('LGTM')).toEqual([]);
  });
});

describe('removeExtraSpacesAndCommas()', () => {
  it('should remove multiple consecutive spaces', () => {
    expect(removeExtraSpacesAndCommas('The quick   brown fox     jumped over the lazy dog')).toEqual(
      'The quick brown fox jumped over the lazy dog'
    );
  });

  it('should remove trialing comma', () => {
    expect(removeExtraSpacesAndCommas('Hello,')).toEqual(
      'Hello'
    );
  });

  it('should remove trialing space and comma', () => {
    expect(removeExtraSpacesAndCommas('1, 2, 3, ')).toEqual(
      '1, 2, 3'
    );
  });

  it('should remove multiple consecutive spaces and trialing comma', () => {
    expect(removeExtraSpacesAndCommas('Hello,   World,')).toEqual(
      'Hello, World'
    );
  });

  it('should return the original string when there is no multiple consecutive spaces, trialing space and comma', () => {
    expect(removeExtraSpacesAndCommas('My pen is blue.')).toEqual(
      'My pen is blue.'
    );
  });
});

describe('convertPixelRangeToArray()', () => {
  [
    ['1', [1]],
    ['1-2', [1, 2]],
    ['1 - 2', [1, 2]],
    ['1 -2', [1, 2]],
    ['1- 2', [1, 2]],
    ['1-     2', [1, 2]],
    ['11,15,90', [11, 15, 90]],
    ['12, 50, 70', [12, 50, 70]],
    ['1,2-10,12-15,18', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 18]],
    ['1, 2 - 10, 100', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100]],
    ['11, 23 - 26, 12 - 15, 18,', [11, 12, 13, 14, 15, 18, 23, 24, 25, 26]]
  ].forEach(([input, output]) => {
    it(`should convert valid input "${input}" to [${output.toString()}]`, () => {
      expect(convertPixelRangeToArray(input)).toEqual(output);
    });
  });

  [
    '',
    'a',
    '-, a',
    ' ',
    '-',
    '1,,2',
    '11, 23 -- 26, b - 15, 18-,',
    '11-, 23 - 26, 12 - 15, 18-,',
    '11, 23 - 26, b - 15, 18-,',
    '11, 23 - 26, b - 15, 18-, ',
    '-1',
    '1 2, 3',
    '-1 2, 3',
    '1, -2 - 10, 30 - 50, 100',
    '1 2-10',
    '1-2-3',
    ',5',
    '5-,9',
    '9-5,',
    '2,6-',
    '10-1',
    ', 5',
    '5 - , 9',
    '9 - 5, ',
    '2, 6 -',
    '10 - 1'
  ].forEach((invalidPixelRange) => {
    it(`should convert invalid input "${invalidPixelRange}" to empty array`, () => {
      expect(convertPixelRangeToArray(invalidPixelRange)).toEqual([]);
    });
  });
});
