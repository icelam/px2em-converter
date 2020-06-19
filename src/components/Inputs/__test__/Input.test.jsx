import React from 'react';
import { themes } from '@styles';
import { mountWithProvider } from '../../../../jest.utils';
import Input from '../Input';

describe('Input', () => {
  it('should render', () => {
    const wrapper = mountWithProvider(<Input />);
    expect(wrapper.find('input')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display turquoise border for valid input', () => {
    const wrapper = mountWithProvider(<Input />);
    expect(wrapper.find('input')).toHaveStyleRule(
      'border', `0.0625rem solid ${themes.dark.color.inputBackgroundColor}`
    );
  });

  it('should display red border on error', () => {
    const wrapper = mountWithProvider(<Input error />);
    expect(wrapper.find('input')).toHaveStyleRule(
      'border', `0.0625rem solid ${themes.dark.color.errorColor}`
    );
    expect(wrapper).toMatchSnapshot();
  });
});
