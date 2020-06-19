import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useIntl } from 'react-intl';

const dots = ({ theme: { color } }) => keyframes`
  0%, 20% {
    color: rgba(0, 0, 0, 0);
    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
  }
  40% {
    color: ${color.secondaryTextColor};
    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
  }
  60% {
    color: ${color.secondaryTextColor};
    text-shadow: 0.25em 0 0 ${color.secondaryTextColor}, 0.5em 0 0 rgba(0, 0, 0, 0);
  }
  80%, 100% {
    color: ${color.secondaryTextColor};
    text-shadow: 0.25em 0 0 ${color.secondaryTextColor}, 0.5em 0 0 ${color.secondaryTextColor};
  }
`;

const LoadingWrapper = styled.div`
  height: 100%;
  padding: 10%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &:after {
    content: ' .';
    animation: ${dots} 1.5s steps(5, end) infinite;
  }
`;

const LoadingText = styled.div`
  font-size: 1em;
  color: ${({ theme: { color } }) => color.secondaryTextColor};
`;

const Loading = () => {
  const intl = useIntl();

  return (
    <LoadingWrapper className="loading">
      <LoadingText>
        {intl.formatMessage({ id: 'app.loading' })}
      </LoadingText>
    </LoadingWrapper>
  );
};

export default Loading;
