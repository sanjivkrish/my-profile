import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Link, Grid, Box } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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
  const { contentfulWebsiteInfoJsonNode } = useStaticQuery(
    graphql`
      query {
        contentfulWebsiteInfoJsonNode {
          contact {
            mail
            github
            linkedin
          }
        }
      }
    `
  );

  const { mail, github, linkedin } = contentfulWebsiteInfoJsonNode.contact;
  return (
    <Wrapper>
      <SectionTitle component="h2">Contact</SectionTitle>
      <Box component="hr" />
      <Grid container justify="center">
        <LinkWrapper item xs={2}>
          <Link href={`mailto:${mail}`}>
            <MailIcon fontSize="large" style={{ color: 'black' }} />
          </Link>
        </LinkWrapper>
        <LinkWrapper item xs={2}>
          <Link href={github} target="_blank">
            <GitHubIcon fontSize="large" style={{ color: 'black' }} />
          </Link>
        </LinkWrapper>
        <LinkWrapper item xs={2}>
          <Link href={linkedin} target="_blank">
            <LinkedInIcon fontSize="large" style={{ color: 'black' }} />
          </Link>
        </LinkWrapper>
      </Grid>
    </Wrapper>
  );
};

export default Contact;
