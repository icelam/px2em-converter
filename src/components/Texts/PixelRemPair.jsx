import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PairWrapper = styled.div`
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};

  &:focus {
    outline: none;
  }
`;

const PixelText = styled.span`
  color: ${({ theme: { color } }) => color.secondaryTextColor};
`;

const RemText = styled.span`
  font-weight: 600;
  color: ${({ theme: { color } }) => color.textColor};
`;

const PixelRemPair = ({ pixel, rem, copyToClipboard }) => {
  const remRef = useRef(null);
  const onClick = copyToClipboard ? () => copyToClipboard(remRef) : undefined;

  return (
    <PairWrapper
      onClick={onClick}
      onKeyPress={onClick}
      role="button"
      tabIndex="0"
    >
      <PixelText>{pixel} = </PixelText>
      <RemText ref={remRef}>{rem}</RemText>
    </PairWrapper>
  );
};

PixelRemPair.propTypes = {
  pixel: PropTypes.string.isRequired,
  rem: PropTypes.string.isRequired,
  copyToClipboard: PropTypes.func
};

PixelRemPair.defaultProps = {
  copyToClipboard: undefined
};
export default PixelRemPair;
