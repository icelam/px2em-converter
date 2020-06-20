import { convertHexToRgb } from '@utils';
import { mediaQueries } from './media';

const colors = {
  blackTurquoise: '#05171d',
  darkTurquoise: '#023135',
  midTurquoise: '#004b4d',
  greyTurquoise: '#828b8e',
  lightGreyTurquoise: '#98a2a5',
  white: '#ffffff',
  black: '#000000',
  red: '#fc5959'
};

const themes = {
  dark: {
    color: {
      backgroundColor: colors.blackTurquoise,
      textColor: colors.white,
      secondaryTextColor: colors.greyTurquoise,
      linkColor: colors.greyTurquoise,
      linkHoverColor: colors.lightGreyTurquoise,
      highlightColor: `rgba(${convertHexToRgb(colors.white)}, 0.15)`,
      errorColor: colors.red,
      inputBackgroundColor: colors.darkTurquoise,
      inputTextColor: colors.white,
      inputPlaceholderColor: colors.greyTurquoise,
      borderColor: colors.midTurquoise,
      messageBackgroundColor: colors.greyTurquoise,
      messageTextColor: colors.white,
      shadowColor: `rgba(${convertHexToRgb(colors.black)}, 0.7)`,
      buttonBackgroundColor: colors.greyTurquoise,
      buttonHoverBackgroundColor: colors.lightGreyTurquoise,
      buttonTextColor: colors.white,
      switchButtonBorder: colors.midTurquoise,
      switchButtonBackgroundColor: colors.blackTurquoise,
      switchButtonActiveBackgroundColor: colors.midTurquoise,
      switchButtonTextColor: colors.greyTurquoise,
      switchButtonActiveTextColor: colors.blackTurquoise
    },
    mediaQueries: {
      ...mediaQueries
    }
  }
};

export default themes;
