import React from 'react';
import { mountWithProvider } from '../../../../jest.utils';
import Page from '../Page';

const pageContent = 'Some content here';

describe('Page', () => {
  it('should render', () => {
    const wrapper = mountWithProvider(<Page><p>Some content here</p></Page>);
    expect(wrapper.find('div.content')).toHaveLength(1);
    expect(wrapper.find('div.footer')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display correct content', () => {
    const wrapper = mountWithProvider(<Page><p>{pageContent}</p></Page>);
    expect(wrapper.find('div.content p')).toHaveLength(1);
    expect(wrapper.find('div.content p').text()).toEqual(pageContent);
  });
});
