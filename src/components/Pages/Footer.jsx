import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

const FooterWrapper = styled.div`
  font-size: 0.75rem;
  color: ${({ theme: { color } }) => color.secondaryTextColor};
  text-align: center;
`;

const Footer = () => {
  const intl = useIntl();
  return (
    <FooterWrapper className="footer">
      {intl.formatMessage({ id: 'footer.copyright' }, { currentYear: (new Date()).getFullYear() })}
      {' '}
      ・
      {' '}
      <a href={intl.formatMessage({ id: 'footer.github.link' })} target="_blank" rel="noopener noreferrer">
        {intl.formatMessage({ id: 'footer.github' })}
      </a>
    </FooterWrapper>
  );
};

export default Footer;
