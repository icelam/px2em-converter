/**
 * Validate if user input is a positive integer
 * @param {string} str - User input
 * @returns {boolean} `true` for positive integers, `false` for negative integers and other inputs
 */
export const isValidPositiveInteger = (str) => {
  const re = /^\d+$/;
  return re.test(str);
};

/**
 * Validate if user input is a valid font size
 * @param {string} str - User input
 * @returns {boolean} `true` for decimal and integer values, `false` for other inputs
 */
export const isValidFontSize = (str) => {
  const re = /^[0-9]+(\.[0-9]+)?$/;
  return re.test(str);
};
