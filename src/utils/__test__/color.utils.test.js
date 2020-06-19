import convertHexToRgb from '../color.utils';

const hexString = '#e87722';
const hexNumber = '654321';
const invalidInput = 'hahaha';

describe('convertHexToRgb()', () => {
  it(`should convert Hex "${hexString}" to rgb`, () => {
    expect(convertHexToRgb(hexString)).toEqual('232, 119, 34');
  });

  it(`should convert Hex number "${hexNumber}" to rgb`, () => {
    expect(convertHexToRgb(hexNumber)).toEqual('101, 67, 33');
  });

  it(`should convert random string "${invalidInput}" to rgb`, () => {
    expect(convertHexToRgb(invalidInput)).toBe('');
  });
});
