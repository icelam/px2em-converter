import React from 'react';
import { mountWithProvider } from '../../../../jest.utils';
import AppTitle from '../AppTitle';

const appName = 'PX2EM Converter';

describe('AppTitle', () => {
  it('should render', () => {
    const wrapper = mountWithProvider(<AppTitle>{appName}</AppTitle>);
    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display correct title', () => {
    const wrapper = mountWithProvider(<AppTitle>{appName}</AppTitle>);
    expect(wrapper.find('h1').text()).toEqual(appName);
  });
});
