import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const topRowBorderCss = css`
  border-width: 0.0625rem 0.0625rem 0.0625rem 0;
`;

const Table = styled.ul`
  &, & > li {
    border-style: solid;
    border-color: ${({ theme: { color } }) => color.borderColor};
  }

  & {
    display: flex;
    flex-flow: row wrap;
    list-style: none;
    padding: 0;
    margin: 0;
    border-width: 0 0 0 0.0625rem;

    > li {
      display: block;
      box-sizing: border-box;
      padding: 0.25rem 0.625rem;
      margin: 0;
      text-align: center;
      border-width: 0 0.0625rem 0.0625rem 0;
      flex: 0 1 ${(props) => 100 / props.sm}%;
      max-width: ${(props) => 100 / props.sm}%; /* IE 10 */

      &:nth-child(-n+${(props) => props.sm}){
        ${topRowBorderCss}
      }

      @media ${({ theme: { mediaQueries } }) => mediaQueries.tabletDesktop} {
        flex: 0 1 ${(props) => 100 / props.md}%;
        max-width: ${(props) => 100 / props.md}%;

        &:nth-child(-n+${(props) => props.md}){
          ${topRowBorderCss}
        }
      }

      @media ${({ theme: { mediaQueries } }) => mediaQueries.desktop} {
        flex: 0 1 ${(props) => 100 / props.lg}%;
        max-width: ${(props) => 100 / props.lg}%;

        &:nth-child(-n+${(props) => props.lg}){
          ${topRowBorderCss}
        }
      }

      @media ${({ theme: { mediaQueries } }) => mediaQueries.largerScreen} {
        flex: 0 1 ${(props) => 100 / props.xl}%;
        max-width: ${(props) => 100 / props.xl}%;

        &:nth-child(-n+${(props) => props.xl}){
          ${topRowBorderCss}
        }
      }
    }
  }
`;

const FlexTable = ({
  data, sm, md, lg, xl
}) => (
  <Table sm={sm} md={md} lg={lg} xl={xl} className="flex-table">
    {data.map(({ key, content }) => <li className="flex-table__cell" key={key}>{content}</li>)}
  </Table>
);

FlexTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  })).isRequired,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number
};

FlexTable.defaultProps = {
  sm: 1,
  md: 3,
  lg: 4,
  xl: 5
};

export default memo(FlexTable);
