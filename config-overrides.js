/* eslint-disable no-param-reassign */
const path = require('path');

module.exports = (config) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, './src'),
    '@components': path.resolve(__dirname, './src/components'),
    '@containers': path.resolve(__dirname, './src/containers'),
    '@fonts': path.resolve(__dirname, './src/assets/fonts'),
    '@hooks': path.resolve(__dirname, './src/hooks'),
    '@images': path.resolve(__dirname, './src/assets/images'),
    '@locale': path.resolve(__dirname, './src/locale'),
    '@pages': path.resolve(__dirname, './src/pages'),
    '@providers': path.resolve(__dirname, './src/providers'),
    '@routes': path.resolve(__dirname, './src/routes'),
    '@styles': path.resolve(__dirname, './src/styles'),
    '@utils': path.resolve(__dirname, './src/utils')
  };

  return config;
};
