const convertHexToRgb = (color) => {
  const colorCode = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color.toLowerCase());

  return colorCode
    ? `${parseInt(colorCode[1], 16)}, ${parseInt(colorCode[2], 16)}, ${parseInt(colorCode[3], 16)}`
    : '';
};

export default convertHexToRgb;
