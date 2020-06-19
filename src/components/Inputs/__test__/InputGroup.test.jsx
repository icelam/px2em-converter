import React from 'react';
import { themes } from '@styles';
import { mountWithProvider } from '../../../../jest.utils';
import InputGroup from '../InputGroup';

const id = 'input-group-id';
const label = 'Input label';
const placeholder = 'Placeholder text';
const inputValue = 'Some value';
const onChange = jest.fn();
const autoComplete = 'off';
const maxLength = '15';
const error = 'Invalid input';

describe('Label', () => {
  it('should render', () => {
    const wrapper = mountWithProvider(
      <InputGroup
        id={id}
        label={label}
        placeholder={placeholder}
        inputValue={inputValue}
        onChange={onChange}
      />
    );
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('div label')).toHaveLength(1);
    expect(wrapper.find('div input')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display correct label text and have correct "for" attribute', () => {
    const wrapper = mountWithProvider(
      <InputGroup
        id={id}
        label={label}
        placeholder={placeholder}
        inputValue={inputValue}
        onChange={onChange}
      />
    );
    expect(wrapper.find('div label').text()).toEqual(label);
    expect(wrapper.find('div label').props().htmlFor).toEqual(id);
  });

  it('should display input box with placeholder and value', () => {
    const wrapper = mountWithProvider(
      <InputGroup
        id={id}
        label={label}
        placeholder={placeholder}
        inputValue={inputValue}
        onChange={onChange}
      />
    );
    expect(wrapper.find('div input').props().value).toEqual(inputValue);
    expect(wrapper.find('div input').props().placeholder).toEqual(placeholder);
  });

  it('should spread extra props to input', () => {
    const wrapper = mountWithProvider(
      <InputGroup
        id={id}
        label={label}
        placeholder={placeholder}
        inputValue={inputValue}
        onChange={onChange}
        autoComplete={autoComplete}
        maxLength={maxLength}
      />
    );
    expect(wrapper.find('div input').props().autoComplete).toEqual(autoComplete);
    expect(wrapper.find('div input').props().maxLength).toEqual(maxLength);
  });

  it('should show error message and red border on input when field value is invalid', () => {
    const wrapper = mountWithProvider(
      <InputGroup
        id={id}
        label={label}
        placeholder={placeholder}
        inputValue={inputValue}
        onChange={onChange}
        error={error}
      />
    );
    expect(wrapper.find('div div.error-message')).toHaveLength(1);
    expect(wrapper.find('div div.error-message').text()).toEqual(error);
    expect(wrapper.find('div input')).toHaveStyleRule(
      'border', `0.0625rem solid ${themes.dark.color.errorColor}`
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with onChange listener', () => {
    const wrapper = mountWithProvider(
      <InputGroup
        id={id}
        label={label}
        placeholder={placeholder}
        inputValue={inputValue}
        onChange={onChange}
      />
    );
    wrapper.find('div input').simulate('change');
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
