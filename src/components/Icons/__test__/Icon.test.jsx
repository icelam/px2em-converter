import React from 'react';
import { mountWithProvider } from '../../../../jest.utils';
import Icon from '../Icon';

describe('Icon', () => {
  it('should render', () => {
    const wrapper = mountWithProvider(<Icon type="success" />);
    expect(wrapper.find('i.svg-icon')).toHaveLength(1);
    expect(wrapper.find('i.svg-icon svg')).toHaveLength(1);
  });

  it('should display success icon', () => {
    const wrapper = mountWithProvider(<Icon type="success" />);
    expect(wrapper.find('i.svg-icon')).toHaveLength(1);
    expect(wrapper.find('i.svg-icon svg')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display warn icon', () => {
    const wrapper = mountWithProvider(<Icon type="warn" />);
    expect(wrapper.find('i.svg-icon')).toHaveLength(1);
    expect(wrapper.find('i.svg-icon svg')).toHaveLength(1);
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('should display info icon', () => {
    const wrapper = mountWithProvider(<Icon type="info" />);
    expect(wrapper.find('i.svg-icon')).toHaveLength(1);
    expect(wrapper.find('i.svg-icon svg')).toHaveLength(1);
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('should display error icon', () => {
    const wrapper = mountWithProvider(<Icon type="error" />);
    expect(wrapper.find('i.svg-icon')).toHaveLength(1);
    expect(wrapper.find('i.svg-icon svg')).toHaveLength(1);
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('should display loading icon', () => {
    const wrapper = mountWithProvider(<Icon type="loading" />);
    expect(wrapper.find('i.svg-icon')).toHaveLength(1);
    expect(wrapper.find('i.svg-icon svg')).toHaveLength(1);
    expect(wrapper.find('i.svg-icon svg')).toHaveStyleRule('animation', expect.stringContaining('1s infinite linear'));
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('should not render on unknown icon', () => {
    const wrapper = mountWithProvider(<Icon type="haha" />);
    expect(wrapper).toEqual({});
  });
});
