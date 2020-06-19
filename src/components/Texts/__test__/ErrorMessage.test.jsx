import React from 'react';
import { themes } from '@styles';
import { mountWithProvider } from '../../../../jest.utils';
import ErrorMessage from '../ErrorMessage';

const message = 'Invalid format';

describe('ErrorMessage', () => {
  it('should render', () => {
    const wrapper = mountWithProvider(<ErrorMessage>{message}</ErrorMessage>);
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display correct error message', () => {
    const wrapper = mountWithProvider(<ErrorMessage>{message}</ErrorMessage>);
    expect(wrapper.find('div').text()).toEqual(message);
  });

  it('should display in smaller size and have a red color', () => {
    const wrapper = mountWithProvider(<ErrorMessage>{message}</ErrorMessage>);
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('div')).toHaveStyleRule('font-size', '0.75rem');
    expect(wrapper.find('div')).toHaveStyleRule('line-height', '1.5rem');
    expect(wrapper.find('div')).toHaveStyleRule('color', themes.dark.color.errorColor);
    expect(wrapper.find('div')).toHaveStyleRule('margin-top', '0.5rem');
  });
});
