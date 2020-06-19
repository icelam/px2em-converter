import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }

  html, body {
    height: 100%;
    padding: 0;
    font-family: 'Source Code Pro', monospace, sans-serif;
    font-size: 16px;
    line-height: 1.5em;
    text-align: left;
    background-color: ${({ theme: { color } }) => color.backgroundColor};
    color: ${({ theme: { color } }) => color.textColor};
  }

  body {
    max-width: 992px;
    margin: 0 auto;
  }

  ::selection {
    background: ${({ theme: { color } }) => color.highlightColor}; /* WebKit/Blink Browsers */
  }

  ::-moz-selection {
    background: ${({ theme: { color } }) => color.highlightColor}; /* Gecko Browsers */
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;

    &:first-child {
      margin-top: 0;
    }
  }

  h1 {
    font-size: 1.75rem;
    line-height: 1.2em;
    margin: 1.516rem 0 0.75rem 0;
  }

  h2 {
    font-size: 1.5rem;
    line-height: 1.3em;
    margin: 1.7rem 0 0.85rem 0;
  }

  h3 {
    font-size: 1.375rem;
    line-height: 1.3em;
    margin: 1.8rem 0 0.9rem 0;
  }

  h4 {
    font-size: 1.25rem;
    line-height: 1.4em;
    margin: 2rem 0 1rem 0;
  }

  h5 {
    font-size: 1.125rem;
    line-height: 1.5em;
    margin: 2.2rem 0 1.1rem 0;
  }

  h6 {
    font-size: 1rem;
    line-height: 1.5em;
    margin: 2.5rem 0 1.25rem 0;
  }

  img {
    border: 0;
  }

  p {
    margin: 1rem 0;
  }

  a {
    color: ${({ theme: { color } }) => color.linkColor};
    text-decoration: none;

    &:hover {
      color: ${({ theme: { color } }) => color.linkHoverColor};
    }

    &:active, &:focus {
      outline: none;
    }
  }

  p a {
    border-bottom: 0.0625rem solid ${({ theme: { color } }) => color.linkColor};

    &:hover {
      border-bottom: 0.0625rem solid ${({ theme: { color } }) => color.linkHoverColor};
    }
  }

  #root, #app {
    height: 100%;
    position: relative;
  }

  /* message styles */
  .message-notification-notice.move-up-enter {
    overflow: hidden;
    animation-name: MessageMoveIn;
    animation-duration: 0.3s;
  }

  .message-notification-notice.move-up-leave.move-up-leave-active {
    animation-name: MessageMoveOut;
    animation-duration: 0.3s;
  }

  @keyframes MessageMoveIn {
    0% {
      opacity: 0;
      transform: translateY(3rem);
      // max-height: 0;
    }
    100% {
      opacity: 1;
      transform: translateY(0);
      // max-height: 3rem;
    }
  }

  @keyframes MessageMoveOut {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(3rem);
    }
  }
`;

export default GlobalStyle;
