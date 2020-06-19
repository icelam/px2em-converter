import styled from 'styled-components';

const Input = styled.input`
  background-color: ${({ theme: { color } }) => color.inputBackgroundColor};
  border-radius: 0;
  border: 0.0625rem solid ${({ error, theme: { color } }) => (
    error
      ? color.errorColor
      : color.inputBackgroundColor
  )};
  padding: 0.625rem 0.875rem;
  font-family: inherit;
  font-size: 1em;
  line-height: 1.5em;
  color: ${({ theme: { color } }) => color.inputTextColor};
  outline: none;
  appearance: none;
  width: 100%;
  box-sizing: border-box;

  &:read-only {
    background-color: ${({ theme: { color } }) => color.inputBackgroundColor};
    border: none;
    color: ${({ theme: { color } }) => color.inputTextColor};
  }

  /* Placeholder */
  &::placeholder {
    color: ${({ theme: { color } }) => color.inputPlaceholderColor};
  }

  &::-webkit-input-placeholder {
    color: ${({ theme: { color } }) => color.inputPlaceholderColor};
  }

  &::-moz-placeholder {
    color: ${({ theme: { color } }) => color.inputPlaceholderColor};
  }

  &:-moz-placeholder {
    color: ${({ theme: { color } }) => color.inputPlaceholderColor};
  }

  &:-ms-input-placeholder {
    color: ${({ theme: { color } }) => color.inputPlaceholderColor};
  }

  &::-ms-input-placeholder {
    color: ${({ theme: { color } }) => color.inputPlaceholderColor};
  }

  /* Auto complete styles */
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active  {
    background-clip: content-box !important;
    -webkit-box-shadow: 0 0 0 3.125rem ${({ theme: { color } }) => color.inputBackgroundColor} inset !important;
    -webkit-text-fill-color: ${({ theme: { color } }) => color.inputTextColor} !important;
  }
`;

export default Input;
