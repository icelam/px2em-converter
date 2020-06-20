import React from 'react';
import { themes } from '@styles';
import { mountWithProvider } from '../../../../jest.utils';
import Switch from '../Switch';

const options1 = [
  { label: 'em', value: 'em' },
  { label: 'rem', value: 'rem' }
];

const options2 = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 }
];

const onChange = jest.fn();

afterEach(() => {
  onChange.mockClear();
});

describe('Switch', () => {
  it('should render', () => {
    const wrapper = mountWithProvider(<Switch onChange={onChange} value="em" options={options1} label="Unit: " />);
    expect(wrapper.find('div.switch')).toHaveLength(1);
    expect(wrapper.find('div.switch span.switch__label')).toHaveLength(1);
    expect(wrapper.find('div.switch button.switch__button')).toHaveLength(2);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display switch with label and 2 options', () => {
    const label = 'Unit: ';
    const wrapper = mountWithProvider(
      <Switch onChange={onChange} options={options1} label={label} />
    );
    expect(wrapper.find('div.switch span.switch__label')).toHaveLength(1);
    expect(wrapper.find('div.switch span.switch__label').text()).toEqual(label.trim());
    expect(wrapper.find('div.switch button.switch__button')).toHaveLength(2);
    expect(wrapper.find('div.switch button.switch__button').at(0).text()).toEqual(options1[0].label);
    expect(wrapper.find('div.switch button.switch__button').at(1).text()).toEqual(options1[1].label);
  });

  it('should display switch without label and 4 options', () => {
    const wrapper = mountWithProvider(<Switch onChange={onChange} options={options2} />);
    expect(wrapper.find('div.switch span.switch__label')).toHaveLength(0);
    expect(wrapper.find('div.switch button.switch__button')).toHaveLength(4);
    expect(wrapper.find('div.switch button.switch__button').at(0).text()).toEqual(options2[0].label);
    expect(wrapper.find('div.switch button.switch__button').at(1).text()).toEqual(options2[1].label);
    expect(wrapper.find('div.switch button.switch__button').at(2).text()).toEqual(options2[2].label);
    expect(wrapper.find('div.switch button.switch__button').at(3).text()).toEqual(options2[3].label);
    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to highlight selected value', () => {
    const wrapper = mountWithProvider(<Switch onChange={onChange} value="rem" options={options1} />);
    const {
      dark: {
        color: {
          switchButtonBackgroundColor,
          switchButtonTextColor,
          switchButtonActiveBackgroundColor,
          switchButtonActiveTextColor
        }
      }
    } = themes;
    expect(wrapper.find('div.switch button.switch__button').at(0))
      .toHaveStyleRule('background-color', switchButtonBackgroundColor);
    expect(wrapper.find('div.switch button.switch__button').at(0))
      .toHaveStyleRule('color', switchButtonTextColor);
    expect(wrapper.find('div.switch button.switch__button').at(1))
      .toHaveStyleRule('background-color', switchButtonActiveBackgroundColor);
    expect(wrapper.find('div.switch button.switch__button').at(1))
      .toHaveStyleRule('color', switchButtonActiveTextColor);
    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to define minimum button width', () => {
    const wrapper = mountWithProvider(<Switch onChange={onChange} options={options1} buttonWidth="2.5rem" />);
    expect(wrapper.find('div.switch button.switch__button').at(0)).toHaveStyleRule('min-width', '2.5rem');
    expect(wrapper.find('div.switch button.switch__button').at(1)).toHaveStyleRule('min-width', '2.5rem');
    expect(wrapper).toMatchSnapshot();
  });

  it('should trigger onChange when clicking on switch buttons', () => {
    const wrapper = mountWithProvider(<Switch onChange={onChange} value="rem" options={options1} />);
    wrapper.find('div.switch button.switch__button').at(0).simulate('click');
    expect(onChange).toHaveBeenCalledTimes(1);
    wrapper.find('div.switch button.switch__button').at(1).simulate('click');
    expect(onChange).toHaveBeenCalledTimes(2);
  });
});
