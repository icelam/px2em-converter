import React from 'react';
import PropTypes from 'prop-types';
import { mount, shallow } from 'enzyme';
import { GlobalStyle } from '@styles';
import Providers from '@providers';

const ProviderWrapper = ({ children }) => (
  <Providers>
    <GlobalStyle />
    {children}
  </Providers>
);

ProviderWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export const mountWithProvider = (tree) => mount(tree, { wrappingComponent: ProviderWrapper });
export const shallowWithProvider = (tree) => shallow(tree, { wrappingComponent: ProviderWrapper });
