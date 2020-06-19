/* eslint-disable react/jsx-filename-extension */
import { addDecorator, addParameters } from '@storybook/react';
import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { IntlProvider } from 'react-intl';
import { GlobalStyle, themes } from '@styles';
import translations from '@locale';
import '@styles/font-face.css';

// Storybook Preview area
const StorybookGlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    max-width: 100%;
    padding: 20px;
    box-sizing: border-box;
    height: auto;
  }
`;

addDecorator((story) => (
  <IntlProvider
    locale="en"
    messages={translations.en}
  >
    <ThemeProvider theme={themes.dark}>
      <>
        <GlobalStyle />
        <StorybookGlobalStyle />
        {story()}
      </>
    </ThemeProvider>
  </IntlProvider>
));

// Storybook viewport devices
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
});
