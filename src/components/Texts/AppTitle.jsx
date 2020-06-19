import { memo } from 'react';
import styled from 'styled-components';

const AppTitle = styled.h1`
  margin-bottom: 3.125rem;

  @media ${({ theme: { mediaQueries } }) => mediaQueries.tabletDesktop} {
    font-size: 2.5rem;
  }
`;

export default memo(AppTitle);
