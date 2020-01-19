import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Link, Grid, Box } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

import { Wrapper } from '../style';

const SectionTitle = styled(Box)({
  fontSize: '2.5rem',
  textAlign: 'center',
  color: '#22A39F',
  paddingTop: '2rem'
});

const LinkWrapper = styled(Grid)({
  textAlign: 'center'
});

const Contact = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            contact {
              mail
              github
              linkedin
            }
          }
        }
      }
    `
  );

  const { mail, github, linkedin } = site.siteMetadata.contact;

  return (
    <Wrapper maxWidth={false}>
      <SectionTitle component="h2">Contact</SectionTitle>
      <Box component="hr" />
      <Grid container>
        <LinkWrapper item xs={12} sm={12} md={4} lg={4}>
          <Link href={`mailto:${mail}`}>{mail}</Link>
        </LinkWrapper>
        <LinkWrapper item xs={12} sm={12} md={4} lg={4}>
          <Link href={github} target="_blank">
            {github}
          </Link>
        </LinkWrapper>
        <LinkWrapper item xs={12} sm={12} md={4} lg={4}>
          <Link href={linkedin} target="_blank">
            {linkedin}
          </Link>
        </LinkWrapper>
      </Grid>
    </Wrapper>
  );
};

export default Contact;
