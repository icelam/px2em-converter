import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '../Icons';

const MessageWrapper = styled.span`
  background-color: ${({ theme: { color } }) => color.messageBackgroundColor};
  color: ${({ theme: { color } }) => color.messageTextColor};
  padding: 0.5rem;
  font-size: 0.875rem;
  line-height: 1em;
  display: inline-block;
  margin: 0.25rem;
  box-shadow: 0 0 0.3125rem ${({ theme: { color } }) => color.shadowColor};
`;

const Message = ({ type, message }) => (
  <MessageWrapper className="message"><Icon type={type} /> <span>{message}</span></MessageWrapper>
);

Message.propTypes = {
  type: PropTypes.oneOf(
    ['success', 'info', 'warn', 'error', 'loading']
  ).isRequired,
  message: PropTypes.string.isRequired
};

export default memo(Message);
