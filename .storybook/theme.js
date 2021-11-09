import { create } from '@storybook/theming/create';
import logo from '../public/static/media/touch-icons/apple-touch-icon-1024x1024.png';

// import global fonts for theming storybook
// https://github.com/storybookjs/storybook/issues/25#issuecomment-609443373
// eslint-disable-next-line import/no-unresolved, import/no-webpack-loader-syntax
// FIXME: read directly from src folder and resolve aliases
import '!style-loader!css-loader!./font-face.css';

const colors = {
  blackTurquoise: '#05171d',
  darkTurquoise: '#023135',
  midTurquoise: '#004b4d',
  greyTurquoise: '#828b8e',
  lightGreyTurquoise: '#98a2a5',
  white: '#ffffff',
  red: '#fc5959'
};

export default create({
  base: 'dark',

  colorPrimary: colors.darkTurquoise,
  colorSecondary: colors.midTurquoise,

  // UI
  appBg: colors.blackTurquoise,
  appContentBg: colors.blackTurquoise,
  appBorderColor: colors.midTurquoise,
  appBorderRadius: 0,

  // Typography
  fontBase: '"Source Code Pro", monospace, sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: colors.white,
  textInverseColor: 'black',

  // Toolbar default and active colors
  barTextColor: colors.greyTurquoise,
  barSelectedColor: colors.white,
  barBg: colors.blackTurquoise,

  // Form colors
  inputBg: colors.darkTurquoise,
  inputBorder: colors.darkTurquoise,
  inputTextColor: colors.white,
  inputBorderRadius: 0,

  brandTitle: 'PX2EM Converter',
  brandImage: logo
});
