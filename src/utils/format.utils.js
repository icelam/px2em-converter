import { isValidPositiveInteger } from './validate.utils';

/**
 * Coverts any HEX color code to RGB
 * @param {number} value - Interger / floating point value that needs to be rounded
 * @param {number} precision - Number of decimal places
 * @returns {number} Rounded floating point value
 */
export const roundToNearest = (value, precision) => {
  if (!Number.isInteger(precision)) {
    return value;
  }
  // parseFloat for trimming trailing zeros
  return parseFloat(value.toFixed(precision));
};

/**
 * Deduplicates any array
 * @param {array} arr - Array to be deduplicated
 * @returns {array} Deduplicated array If `arr` provided is not an array, returns an empty array
 */
export const deduplicateArray = (arr) => {
  if (!Array.isArray(arr)) {
    return [];
  }

  const arraySet = new Set(arr);
  return Array.from(arraySet);
};

/**
 * Remove multiple consecutive spaces, trialing space and comma
 * @param {string} str - String to process
 * @returns {string} String which its multiple consecutive spaces,
 * trialing space and comma are removed
 */
export const removeExtraSpacesAndCommas = (str) => str
  .replace(/\s+/g, ' ')
  .replace(/\s$/, '')
  .replace(/,$/, '');

/**
 * Sort array in ascending order
 * @param {array} arr - Array to sort
 * @returns {array} Array sorted in ascending order
 */
const sortArrayAscending = (arr) => {
  const newArray = [...arr];
  return newArray.sort((a, b) => a - b);
};

/**
 * Convert pixel range to list of pixels
 * @param {string} str - Pixel range, e.g. `"12 - 20, 50, 100"`
 * @returns {array} List of pixels, e.g. `[12, 13, 14, 15, 16, 17, 18, 19, 20, 50, 100]``
 */
export const convertPixelRangeToArray = (str) => {
  try {
    const pixels = [];

    if (!str) {
      throw new Error('EMPTY_INPUT');
    }

    const formattedString = removeExtraSpacesAndCommas(str);
    const rangeItems = formattedString.split(',');

    rangeItems.forEach((item) => {
      let currentDigit = '';
      const operations = [];

      const pushDigit = () => {
        operations.push(currentDigit);
        currentDigit = '';
      };

      /**
       * Parse string to operations:
       *  - "11" to ["11"]
       *  - "11 - 13" to ["11", "-", "13"]
       *  - "1-3" to ["1", "-", "1"]
       */
      for (let i = 0; i < item.length; i++) {
        if (item[i] === ' ') {
          currentDigit && pushDigit();
        } else if (isValidPositiveInteger(item[i])) {
          currentDigit += item[i];
        } else if (item[i] === '-') {
          currentDigit && pushDigit();
          operations.push('-');
        } else {
          throw new Error('INVALID_INPUT');
        }
      }

      currentDigit && pushDigit();

      /**
       * Convert operations to pixels:
       *  - Valid Case 1: Single positive integer
       *  - Valid Case 2: Pixel range (e.g. 1-10)
       */
      if (operations.length !== 1 && operations.length !== 3) {
        throw new Error('INVALID_OPERATION_LENGTH');
      }

      if (operations.length === 1) {
        if (isValidPositiveInteger(operations[0])) {
          pixels.push(parseInt(operations[0], 10));
        } else {
          throw new Error('INVALID_NUMBER');
        }
      } else {
        const [leftString, operator, rightString] = operations;
        if (isValidPositiveInteger(leftString) && operator === '-' && isValidPositiveInteger(rightString)) {
          const leftNumber = parseInt(leftString, 10);
          const rightNumber = parseInt(rightString, 10);
          if (leftNumber <= rightNumber) {
            for (let i = leftNumber; i <= rightNumber; i++) {
              pixels.push(parseInt(i, 10));
            }
          } else {
            throw new Error('INVALID_RANGE');
          }
        } else {
          throw new Error('INVALID_OPERATION');
        }
      }
    });

    const uniquePixels = deduplicateArray(pixels);
    const sortedPixels = sortArrayAscending(uniquePixels);
    return sortedPixels;
  } catch (error) {
    return [];
  }
};
