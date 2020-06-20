import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ActionButton = styled.button`
  display: inline-block;
  border: none;
  border-radius: 0;
  box-shadow: none;
  background-color: ${({ theme: { color } }) => color.buttonBackgroundColor};
  color: ${({ theme: { color } }) => color.buttonTextColor};
  padding: 0.625rem 3.75rem;
  margin: 0 0 1.875rem 0;
  font-size: 1rem;
  font-family: inherit;
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${({ theme: { color } }) => color.buttonHoverBackgroundColor};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Button = ({
  id, children, onClick, disabled
}) => (
  <ActionButton
    id={id}
    className="action-button"
    type="button"
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </ActionButton>
);

Button.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  id: undefined,
  disabled: false
};

export default memo(Button);
