import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from './Input';
import Label from './Label';
import { ErrorMessage } from '../Texts';

const InputWrapper = styled.div`
  margin-bottom: 1.875rem;
`;

const InputGroup = ({
  id, label, placeholder, inputValue, error, onChange, ...props
}) => (
  <InputWrapper id={`${id}-group`} className="input-group">
    <Label htmlFor={id}>{label}</Label>
    <Input
      name={id}
      id={id}
      placeholder={placeholder}
      value={inputValue}
      error={!!error}
      onChange={onChange}
      {...props} // eslint-disable-line react/jsx-props-no-spreading
    />
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </InputWrapper>
);

InputGroup.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  placeholder: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

InputGroup.defaultProps = {
  error: ''
};

export default memo(InputGroup);
