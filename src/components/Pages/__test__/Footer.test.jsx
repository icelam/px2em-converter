import React from 'react';
import translations from '@locale';
import { mountWithProvider } from '../../../../jest.utils';
import Footer from '../Footer';

const footerCopyrightText = translations.en['footer.copyright'].replace('{currentYear}', '2023');
const footerFullText = `${footerCopyrightText} ・ ${translations.en['footer.github']}`;
const footerHref = translations.en['footer.github.link'];

const dateSpy = jest.spyOn(global.Date.prototype, 'getFullYear');

describe('Footer', () => {
  it('should render', () => {
    dateSpy.mockReturnValueOnce(2023);
    const wrapper = mountWithProvider(<Footer />);
    expect(wrapper.find('div.footer')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display correct copyright content', () => {
    dateSpy.mockReturnValueOnce(2023);
    const wrapper = mountWithProvider(<Footer />);
    expect(wrapper.find('div.footer').text()).toEqual(footerFullText);
    expect(wrapper.find('div.footer a').props().href).toEqual(footerHref);
  });
});
