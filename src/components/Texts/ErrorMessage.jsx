import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ErrorText = styled.div`
  font-size: 0.75rem;
  line-height: 1.5rem;
  color: ${({ theme: { color } }) => color.errorColor};
  margin-top: 0.5rem;
`;

const ErrorMessage = ({ children }) => (
  <ErrorText className="error-message">{children}</ErrorText>
);

ErrorMessage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default ErrorMessage;
