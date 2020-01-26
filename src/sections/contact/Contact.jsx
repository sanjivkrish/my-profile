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

const Video = styled('video')({
  position: 'absolute',
  left: '0',
  height: 'auto',
  width: 'auto',
  zIndex: '-10'
});

const Contact = () => {
  const { contentfulWebsiteInfoJsonNode, bgVideo } = useStaticQuery(
    graphql`
      query {
        contentfulWebsiteInfoJsonNode {
          contact {
            mail
            github
            linkedin
          }
        }
        bgVideo: contentfulAsset(title: { eq: "coding" }) {
          file {
            url
          }
        }
      }
    `
  );

  const { mail, github, linkedin } = contentfulWebsiteInfoJsonNode.contact;
  return (
    <Wrapper maxWidth={false}>
      <Video height="100%" width="100%" loop muted autoPlay>
        <source src={bgVideo.file.url} type="video/webm" />
      </Video>
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
