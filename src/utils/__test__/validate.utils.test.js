import { isValidPositiveInteger, isValidFontSize } from '../validate.utils';

describe('isValidPositiveInteger()', () => {
  [
    '1',
    '16'
  ].forEach(
    (validFontSize) => {
      it(`should identify "${validFontSize}" as valid integer string`, () => {
        expect(isValidPositiveInteger(validFontSize)).toEqual(true);
      });
    }
  );

  [
    '.5',
    '16px',
    'apple',
    'A4',
    '23.5',
    '12.0'
  ].forEach(
    (invalidFontSize) => {
      it(`should identify "${invalidFontSize}" as invalid integer string`, () => {
        expect(isValidPositiveInteger(invalidFontSize)).toEqual(false);
      });
    }
  );
});

describe('isValidFontSize()', () => {
  [
    '1',
    '16',
    '23.5',
    '12.0'
  ].forEach(
    (validFontSize) => {
      it(`should identify "${validFontSize}" as valid font size`, () => {
        expect(isValidFontSize(validFontSize)).toEqual(true);
      });
    }
  );

  [
    '.5',
    '16px',
    'apple',
    'A4',
    '11D',
    '11%22',
    '16,3',
    '16,3,3'
  ].forEach(
    (invalidFontSize) => {
      it(`should identify "${invalidFontSize}" as invalid font size`, () => {
        expect(isValidFontSize(invalidFontSize)).toEqual(false);
      });
    }
  );
});
