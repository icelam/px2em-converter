import { memo } from 'react';
import styled from 'styled-components';

const AppTitle = styled.h1`
  margin-bottom: 2.375rem;

  @media ${({ theme: { mediaQueries } }) => mediaQueries.tabletDesktop} {
    font-size: 2.5rem;
    margin-bottom: 3.125rem;
  }
`;

export default memo(AppTitle);
