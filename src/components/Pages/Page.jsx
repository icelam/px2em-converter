import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Footer from './Footer';

const Container = styled.div`
  min-height: 100%;
  padding: 3.125rem 5% 0 5%;
  margin-bottom: -7.125rem;
  box-sizing: border-box;

  &:after {
    content: " ";
    display: block;
    height: 7.125rem;
  }

  @media ${({ theme: { mediaQueries } }) => mediaQueries.largerScreen} {
    padding: 3.125rem 1rem 0 1rem;
  }

  @media ${({ theme: { mediaQueries } }) => mediaQueries.mobile} {
    padding: 1rem 1rem 0 1rem;
    margin-bottom: -5rem;

    &:after {
      content: " ";
      display: block;
      height: 5rem;
    }
  }
`;

const FooterContainer = styled.div`
  margin: 2.5rem 0 3.125rem 0;

  @media ${({ theme: { mediaQueries } }) => mediaQueries.mobile} {
    margin: 2.5rem 0 1rem 0;
  }
`;

const Page = ({ id, children }) => (
  <>
    <Container id={id} className="content">
      {children}
    </Container>
    <FooterContainer>
      <Footer />
    </FooterContainer>
  </>
);

Page.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

Page.defaultProps = {
  id: undefined
};

export default Page;
