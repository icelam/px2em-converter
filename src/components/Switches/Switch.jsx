import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SwitchWrapper = styled.div`
  margin: 0.25rem 0;
`;

const SwitchLabel = styled.span`
  font-size: 0.875rem;
  color: ${({ theme: { color } }) => color.secondaryTextColor};
  margin: 0 0.3125rem 0 0;
`;

const SwitchButton = styled.button`
  display: inline-block;
  border: 0.0625rem solid ${({ theme: { color } }) => color.switchButtonBorder};
  border-radius: 0;
  box-shadow: none;
  background-color: ${({ selected, theme: { color } }) => (
    selected
      ? color.switchButtonActiveBackgroundColor
      : color.switchButtonBackgroundColor
  )};
  color: ${({ selected, theme: { color } }) => (
    selected
      ? color.switchButtonActiveTextColor
      : color.switchButtonTextColor
  )};
  padding: 0.3125rem 0.875rem;
  margin: 0 0 0 -0.0625rem;
  font-size: 0.875rem;
  font-family: inherit;
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  ${({ buttonWidth }) => buttonWidth && `min-width: ${buttonWidth};`}
`;

const Switch = ({
  label, value, onChange, options, buttonWidth
}) => {
  const handleChange = (selectedValue) => {
    onChange(selectedValue);
  };

  return (
    <SwitchWrapper className="switch">
      {label && <SwitchLabel className="switch__label">Unit:</SwitchLabel>}
      {
        options && Array.isArray(options) && options.map(({
          label: optionLabel, value: optionValue
        }) => (
          <SwitchButton
            className="switch__button"
            key={optionValue}
            selected={optionValue === value}
            onClick={() => { handleChange(optionValue); }}
            buttonWidth={buttonWidth}
          >
            {optionLabel}
          </SwitchButton>
        ))
      }
    </SwitchWrapper>
  );
};

Switch.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool
  ]),
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.bool
    ]).isRequired
  })).isRequired,
  buttonWidth: PropTypes.string
};

Switch.defaultProps = {
  label: undefined,
  value: '',
  buttonWidth: undefined
};

export default memo(Switch);
