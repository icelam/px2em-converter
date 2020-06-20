import React from 'react';
import { themes } from '@styles';
import { mountWithProvider } from '../../../../jest.utils';
import PixelRemPair from '../PixelRemPair';

const pixel = '16px';
const rem = '1rem';
const copyToClipboard = jest.fn();

afterEach(() => {
  copyToClipboard.mockClear();
});

describe('Remarks', () => {
  it('should render', () => {
    const wrapper = mountWithProvider(<PixelRemPair pixel={pixel} rem={rem} />);
    expect(wrapper.find('div.pixel-rem-pair')).toHaveLength(1);
    expect(wrapper.find('div span.pixel-rem-pair__pixel')).toHaveLength(1);
    expect(wrapper.find('div span.pixel-rem-pair__rem')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display correct content', () => {
    const wrapper = mountWithProvider(<PixelRemPair pixel={pixel} rem={rem} />);
    expect(wrapper.find('div.pixel-rem-pair').text()).toEqual(`${pixel} = ${rem}`);
  });

  it('should display pixel text in a lighter color, and rem text in semi-bold', () => {
    const wrapper = mountWithProvider(<PixelRemPair pixel={pixel} rem={rem} />);
    expect(wrapper.find('div.pixel-rem-pair')).toHaveStyleRule('cursor', 'default');
    expect(wrapper.find('div.pixel-rem-pair span.pixel-rem-pair__pixel')).toHaveStyleRule('color', themes.dark.color.secondaryTextColor);
    expect(wrapper.find('div.pixel-rem-pair span.pixel-rem-pair__rem')).toHaveStyleRule('color', themes.dark.color.textColor);
    expect(wrapper.find('div.pixel-rem-pair span.pixel-rem-pair__rem')).toHaveStyleRule('font-weight', '600');
  });

  it('should render with onClick and onKeyPress listener', () => {
    const wrapper = mountWithProvider(
      <PixelRemPair pixel={pixel} rem={rem} copyToClipboard={copyToClipboard} />
    );
    expect(wrapper.find('div.pixel-rem-pair')).toHaveStyleRule('cursor', 'pointer');
    wrapper.find('div.pixel-rem-pair').simulate('click');
    expect(copyToClipboard).toHaveBeenCalledTimes(1);
    wrapper.find('div.pixel-rem-pair').simulate('keypress');
    expect(copyToClipboard).toHaveBeenCalledTimes(2);
  });
});
