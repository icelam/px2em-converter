import React from 'react';
import { themes } from '@styles';
import { mountWithProvider } from '../../../../jest.utils';
import PixelRemPair from '../PixelRemPair';

const pixel = '16px';
const rem = '1rem';
const copyToClipboard = jest.fn();

describe('Remarks', () => {
  it('should render', () => {
    const wrapper = mountWithProvider(<PixelRemPair pixel={pixel} rem={rem} />);
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('div span')).toHaveLength(2);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display correct content', () => {
    const wrapper = mountWithProvider(<PixelRemPair pixel={pixel} rem={rem} />);
    expect(wrapper.find('div').text()).toEqual(`${pixel} = ${rem}`);
  });

  it('should display pixel text in a lighter color, and rem text in semi-bold', () => {
    const wrapper = mountWithProvider(<PixelRemPair pixel={pixel} rem={rem} />);
    expect(wrapper.find('div')).toHaveStyleRule('cursor', 'default');
    expect(wrapper.find('div span').at(0)).toHaveStyleRule('color', themes.dark.color.secondaryTextColor);
    expect(wrapper.find('div span').at(1)).toHaveStyleRule('color', themes.dark.color.textColor);
    expect(wrapper.find('div span').at(1)).toHaveStyleRule('font-weight', '600');
  });

  it('should render with onClick and onKeyPress listener', () => {
    const wrapper = mountWithProvider(
      <PixelRemPair pixel={pixel} rem={rem} copyToClipboard={copyToClipboard} />
    );
    expect(wrapper.find('div')).toHaveStyleRule('cursor', 'pointer');
    wrapper.find('div').simulate('click');
    expect(copyToClipboard).toHaveBeenCalledTimes(1);
    wrapper.find('div').simulate('keypress');
    expect(copyToClipboard).toHaveBeenCalledTimes(2);
  });
});
