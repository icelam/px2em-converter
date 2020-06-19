import React from 'react';
import { themes } from '@styles';
import { mountWithProvider } from '../../../../jest.utils';
import Remarks from '../Remarks';

const remarks = 'Some remarks here';

describe('Remarks', () => {
  it('should render', () => {
    const wrapper = mountWithProvider(<Remarks>{remarks}</Remarks>);
    expect(wrapper.find('span')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display correct remarks', () => {
    const wrapper = mountWithProvider(<Remarks>{remarks}</Remarks>);
    expect(wrapper.find('span').text()).toEqual(remarks);
  });

  it('should display in smaller size and have a lighter color', () => {
    const wrapper = mountWithProvider(<Remarks>{remarks}</Remarks>);
    expect(wrapper.find('span')).toHaveStyleRule('font-size', '0.75rem');
    expect(wrapper.find('span')).toHaveStyleRule('color', themes.dark.color.secondaryTextColor);
  });
});
