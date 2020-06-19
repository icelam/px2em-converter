import React from 'react';
import { mediaQueries } from '@styles';
import { mountWithProvider } from '../../../../jest.utils';
import FlexTable from '../FlexTable';

const data = [
  {
    key: '1',
    content: <span>1</span>
  },
  {
    key: '2',
    content: <span>2</span>
  },
  {
    key: '3',
    content: <span>3</span>
  }
];

describe('FlexTable', () => {
  it('should render', () => {
    const wrapper = mountWithProvider(<FlexTable data={data} />);
    expect(wrapper.find('ul')).toHaveLength(1);
    expect(wrapper.find('ul li')).toHaveLength(3);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display correct cell content', () => {
    const wrapper = mountWithProvider(<FlexTable data={data} />);
    expect(wrapper.find('ul li').at(0).find('span')).toHaveLength(1);
    expect(wrapper.find('ul li').at(0).text()).toEqual('1');
    expect(wrapper.find('ul li').at(1).find('span')).toHaveLength(1);
    expect(wrapper.find('ul li').at(1).text()).toEqual('2');
    expect(wrapper.find('ul li').at(2).find('span')).toHaveLength(1);
    expect(wrapper.find('ul li').at(2).text()).toEqual('3');
  });

  it('should adjust column width according to props', () => {
    const column = {
      sm: 1,
      md: 2,
      lg: 3,
      xl: 4
    };

    const wrapper = mountWithProvider(
      <FlexTable data={data} sm={column.sm} md={column.md} lg={column.lg} xl={column.xl} />
    );
    expect(wrapper.find('ul').at(0)).toHaveStyleRule(
      'flex', `0 1 ${100 / column.sm}%`, { modifier: ' > li' }
    );
    expect(wrapper.find('ul').at(0)).toHaveStyleRule(
      'max-width', `${100 / column.sm}%`, { modifier: ' > li' }
    );
    expect(wrapper.find('ul').at(0)).toHaveStyleRule(
      'flex', `0 1 ${100 / column.md}%`, { modifier: ' > li', media: mediaQueries.tabletDesktop }
    );
    expect(wrapper.find('ul').at(0)).toHaveStyleRule(
      'max-width', `${100 / column.md}%`, { modifier: ' > li', media: mediaQueries.tabletDesktop }
    );
    expect(wrapper.find('ul').at(0)).toHaveStyleRule(
      'flex', `0 1 ${100 / column.lg}%`, { modifier: ' > li', media: mediaQueries.desktop }
    );
    expect(wrapper.find('ul').at(0)).toHaveStyleRule(
      'max-width', `${100 / column.lg}%`, { modifier: ' > li', media: mediaQueries.desktop }
    );
    expect(wrapper.find('ul').at(0)).toHaveStyleRule(
      'flex', `0 1 ${100 / column.xl}%`, { modifier: ' > li', media: mediaQueries.largerScreen }
    );
    expect(wrapper.find('ul').at(0)).toHaveStyleRule(
      'max-width', `${100 / column.xl}%`, { modifier: ' > li', media: mediaQueries.largerScreen }
    );
  });
});
