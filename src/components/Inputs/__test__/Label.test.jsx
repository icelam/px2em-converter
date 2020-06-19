import React from 'react';
import { mountWithProvider } from '../../../../jest.utils';
import Label from '../Label';

const labelText = 'Input label';

describe('Label', () => {
  it('should render', () => {
    const wrapper = mountWithProvider(<Label>{labelText}</Label>);
    expect(wrapper.find('label')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display correct label text', () => {
    const wrapper = mountWithProvider(<Label>{labelText}</Label>);
    expect(wrapper.find('label').text()).toEqual(labelText);
  });
});
