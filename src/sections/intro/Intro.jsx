import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Container } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import BackgroundImage from 'gatsby-background-image';

const BgContainer = styled(BackgroundImage)({
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100vh',
  overflow: 'hidden'
});

const InfoContainer = styled(Container)({
  position: 'relative',
  top: '5%',
  textAlign: 'center'
});

const Title = styled(Box)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: '700',
  color: 'white',
  textAlign: 'center',
  paddingBottom: '1rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem'
  }
}));

const SubTitle = styled(Box)({
  fontSize: '2rem',
  color: 'white',
  textAlign: 'center'
});

const VideoContainer = styled('div')({
  position: 'absolute',
  top: '0',
  bottom: '0',
  height: '100%',
  width: '100%',
  zIndex: '-10',
  overflow: 'hidden'
});

const Video = styled('video')({
  position: 'absolute',
  transform: 'translate(-50%,-50%)',
  top: '50%',
  left: '50%',
  height: 'auto',
  width: 'auto',
  minWidth: '100%',
  minHeight: '100%'
});

const Intro = () => {
  const {
    contentfulWebsiteInfoJsonNode,
    bgVideo,
    bgImage
  } = useStaticQuery(graphql`
    query {
      contentfulWebsiteInfoJsonNode {
        fullName
        profession
      }
      bgImage: file(relativePath: { eq: "bgImg.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bgVideo: contentfulAsset(title: { eq: "coding" }) {
        file {
          url
        }
      }
    }
  `);

  return (
    <BgContainer fluid={bgImage.childImageSharp.fluid}>
      <VideoContainer>
        <Video height="100%" width="100%" loop muted autoPlay>
          <source src={bgVideo.file.url} type="video/webm" />
        </Video>
      </VideoContainer>
      <InfoContainer fixed>
        <Title component="h1">{contentfulWebsiteInfoJsonNode.fullName}</Title>
        <SubTitle component="p">
          {'{ '}
          {contentfulWebsiteInfoJsonNode.profession}
          {' }'}
        </SubTitle>
      </InfoContainer>
    </BgContainer>
  );
};

export default Intro;
