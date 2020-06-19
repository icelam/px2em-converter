import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import translations from '@locale';
import { themes } from '@styles';

const currentLocale = 'en';

const Providers = ({ children }) => (
  <IntlProvider
    locale={currentLocale}
    messages={translations[currentLocale]}
  >
    <ThemeProvider theme={themes.dark}>
      {children}
    </ThemeProvider>
  </IntlProvider>
);

Providers.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Providers;
