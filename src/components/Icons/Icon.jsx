import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as SuccessIcon } from '@images/icons/success.svg';
import { ReactComponent as WarnIcon } from '@images/icons/warn.svg';
import { ReactComponent as InfoIcon } from '@images/icons/info.svg';
import { ReactComponent as ErrorIcon } from '@images/icons/error.svg';
import { ReactComponent as LoadingIcon } from '@images/icons/loading.svg';

const IconWrapper = styled.i`
  line-height: 1em;
  vertical-align: middle;

  > svg {
    height: 1em;
    fill: ${({ theme: { color } }) => color.textColor};
  }
`;

const rotationAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const Loading = styled(LoadingIcon)`
  animation: ${rotationAnimation} 1s infinite linear;
`;

const Icon = ({ type }) => {
  let icon;

  switch (type) {
    case 'success':
      icon = <SuccessIcon />;
      break;
    case 'warn':
      icon = <WarnIcon />;
      break;
    case 'info':
      icon = <InfoIcon />;
      break;
    case 'error':
      icon = <ErrorIcon />;
      break;
    case 'loading':
      icon = <Loading />;
      break;
    default:
      icon = null;
  }

  return icon
    ? <IconWrapper>{icon}</IconWrapper>
    : null;
};

Icon.propTypes = {
  type: PropTypes.string.isRequired
};

export default Icon;
