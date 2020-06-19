import React from 'react';
import translations from '@locale';
import { mountWithProvider } from '../../../../jest.utils';
import Loading from '../Loading';

const loadingMessage = translations.en['app.loading'];

describe('Loading', () => {
  it('should render', () => {
    const wrapper = mountWithProvider(<Loading />);
    expect(wrapper.find('div.loading')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display correct loading message', () => {
    const wrapper = mountWithProvider(<Loading />);
    expect(wrapper.find('div.loading').text()).toEqual(loadingMessage);
  });
});
