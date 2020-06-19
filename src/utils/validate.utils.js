export const isValidPositiveInteger = (str) => {
  const re = /^\d+$/;
  return re.test(str);
};

export const isValidFontSize = (str) => {
  const re = /^[0-9]+(\.[0-9]+)?$/;
  return re.test(str);
};
