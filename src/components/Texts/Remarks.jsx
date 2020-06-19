import { memo } from 'react';
import styled from 'styled-components';

const Remarks = styled.span`
  font-size: 0.75rem;
  color: ${({ theme: { color } }) => color.secondaryTextColor};
`;

export default memo(Remarks);
