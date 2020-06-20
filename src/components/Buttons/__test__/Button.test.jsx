import React from 'react';
import { mountWithProvider } from '../../../../jest.utils';
import Button from '../Button';

const buttonText = 'Button Text';
const disabledButtonText = 'Disabled Button Text';
const clickFunction = jest.fn();

afterEach(() => {
  clickFunction.mockClear();
});

describe('Button', () => {
  it('should render', () => {
    const wrapper = mountWithProvider(<Button onClick={clickFunction}>{buttonText}</Button>);
    expect(wrapper.find('button.action-button')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display button with button text', () => {
    const wrapper = mountWithProvider(<Button onClick={clickFunction}>{buttonText}</Button>);
    expect(wrapper.find('button.action-button').text()).toEqual(buttonText);
    expect(wrapper.find('button.action-button')).not.toHaveStyleRule('opacity', '0,5');
    expect(wrapper.find('button.action-button')).toHaveStyleRule('cursor', 'pointer');
  });

  it('should display disabled button with button text', () => {
    const wrapper = mountWithProvider(
      <Button onClick={clickFunction} disabled>{disabledButtonText}</Button>
    );
    expect(wrapper.find('button.action-button').text()).toEqual(disabledButtonText);
    expect(wrapper.find('button.action-button')).toHaveStyleRule('opacity', '0.5', { modifier: ':disabled' });
    expect(wrapper.find('button.action-button')).toHaveStyleRule('cursor', 'not-allowed', { modifier: ':disabled' });
  });

  it('should trigger function when clicking on button', () => {
    const wrapper = mountWithProvider(
      <Button onClick={clickFunction}>{buttonText}</Button>
    );
    wrapper.find('button.action-button').simulate('click');
    expect(clickFunction).toHaveBeenCalledTimes(1);
  });

  it('should not trigger function when clicking on disabled button', () => {
    const wrapper = mountWithProvider(
      <Button onClick={clickFunction} disabled>{disabledButtonText}</Button>
    );
    wrapper.find('button.action-button').simulate('click');
    expect(clickFunction).toHaveBeenCalledTimes(0);
  });
});
