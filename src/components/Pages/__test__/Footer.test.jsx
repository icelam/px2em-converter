import React from 'react';
import translations from '@locale';
import { mountWithProvider } from '../../../../jest.utils';
import Footer from '../Footer';

const footerCopyrightText = translations.en['footer.copyright'].replace('{currentYear}', (new Date()).getFullYear());
const footerFullText = `${footerCopyrightText} ・ ${translations.en['footer.github']}`;
const footerHref = translations.en['footer.github.link'];

describe('Footer', () => {
  it('should render', () => {
    const wrapper = mountWithProvider(<Footer />);
    expect(wrapper.find('div.footer')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display correct copyright content', () => {
    const wrapper = mountWithProvider(<Footer />);
    expect(wrapper.find('div.footer').text()).toEqual(footerFullText);
    expect(wrapper.find('div.footer a').props().href).toEqual(footerHref);
  });
});
