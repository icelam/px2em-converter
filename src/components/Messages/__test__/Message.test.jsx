import React from 'react';
import { mountWithProvider } from '../../../../jest.utils';
import message, { Message } from '..';

const successMessage = 'Success Message!';
const warnMessage = 'Warning Message!';
const infoMessage = 'Info Message!';
const errorMessage = 'Error Message!';
const loadingMessage = 'Loading Message!';

describe('Icon', () => {
  it('should render', () => {
    const wrapper = mountWithProvider(<Message type="success" message={successMessage} />);
    expect(wrapper.find('span.message')).toHaveLength(1);
    expect(wrapper.find('span.message i svg')).toHaveLength(1);
  });

  it('should display success message', () => {
    const wrapper = mountWithProvider(<Message type="success" message={successMessage} />);
    expect(wrapper.find('span.message')).toHaveLength(1);
    expect(wrapper.find('span.message i svg')).toHaveLength(1);
    expect(wrapper.find('span.message i svg').text()).toEqual('success.svg');
    expect(wrapper.find('span.message span').text()).toEqual(successMessage);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display warning message', () => {
    const wrapper = mountWithProvider(<Message type="warn" message={warnMessage} />);
    expect(wrapper.find('span.message')).toHaveLength(1);
    expect(wrapper.find('span.message i svg')).toHaveLength(1);
    expect(wrapper.find('span.message i svg').text()).toEqual('warn.svg');
    expect(wrapper.find('span.message span').text()).toEqual(warnMessage);
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('should display info message', () => {
    const wrapper = mountWithProvider(<Message type="info" message={infoMessage} />);
    expect(wrapper.find('span.message')).toHaveLength(1);
    expect(wrapper.find('span.message i svg')).toHaveLength(1);
    expect(wrapper.find('span.message i svg').text()).toEqual('info.svg');
    expect(wrapper.find('span.message span').text()).toEqual(infoMessage);
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('should display error message', () => {
    const wrapper = mountWithProvider(<Message type="error" message={errorMessage} />);
    expect(wrapper.find('span.message')).toHaveLength(1);
    expect(wrapper.find('span.message i svg')).toHaveLength(1);
    expect(wrapper.find('span.message i svg').text()).toEqual('error.svg');
    expect(wrapper.find('span.message span').text()).toEqual(errorMessage);
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('should display loading message', () => {
    const wrapper = mountWithProvider(<Message type="loading" message={loadingMessage} />);
    expect(wrapper.find('span.message')).toHaveLength(1);
    expect(wrapper.find('span.message i svg')).toHaveLength(1);
    expect(wrapper.find('span.message i svg').text()).toEqual('loading.svg');
    expect(wrapper.find('span.message span').text()).toEqual(loadingMessage);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

describe(('message'), () => {
  it('should render', () => {
    message.success(successMessage);
    expect(document.querySelectorAll('.message-notification-notice')).toHaveLength(1);
  });

  it('should display 3 message at most', () => {
    message.success(successMessage, 10);
    message.success(successMessage, 10);
    message.success(successMessage, 10);
    message.success(successMessage, 10);
    expect(document.querySelectorAll('.message-notification-notice')).toHaveLength(3);
  });

  it('should trigger success message when calling .success()', () => {
    message.success(successMessage);
    expect(document.querySelectorAll('.message-notification-notice')).toHaveLength(3);
    expect(document.querySelector('.message-notification-notice:nth-child(3)').textContent).toContain(successMessage);
  });

  it('should trigger warning message when calling .warning()', () => {
    message.warn(warnMessage);
    expect(document.querySelectorAll('.message-notification-notice')).toHaveLength(3);
    expect(document.querySelector('.message-notification-notice:nth-child(3)').textContent).toContain(warnMessage);
  });

  it('should trigger info message when calling .info()', () => {
    message.info(infoMessage);
    expect(document.querySelectorAll('.message-notification-notice')).toHaveLength(3);
    expect(document.querySelector('.message-notification-notice:nth-child(3)').textContent).toContain(infoMessage);
  });

  it('should trigger error message when calling .error()', () => {
    message.error(errorMessage);
    expect(document.querySelectorAll('.message-notification-notice')).toHaveLength(3);
    expect(document.querySelector('.message-notification-notice:nth-child(3)').textContent).toContain(errorMessage);
  });

  it('should trigger loading message when calling .loading()', () => {
    message.loading(loadingMessage);
    expect(document.querySelectorAll('.message-notification-notice')).toHaveLength(3);
    expect(document.querySelector('.message-notification-notice:nth-child(3)').textContent).toContain(loadingMessage);
  });
});
