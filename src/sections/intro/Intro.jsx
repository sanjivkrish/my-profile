import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Container } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import BackgroundImage from 'gatsby-background-image';

const BgContainer = styled(BackgroundImage)({
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100vh'
});

const InfoContainer = styled(Container)({
  position: 'relative',
  top: '5%',
  width: '50%',
  textAlign: 'center'
});

const Title = styled(Box)({
  fontSize: '3rem',
  fontWeight: '700',
  color: 'white',
  textAlign: 'center',
  borderBottom: '1px solid white',
  paddingBottom: '1rem'
});

const SubTitle = styled(Box)({
  fontSize: '2rem',
  color: 'white',
  textAlign: 'center'
});

const Intro = () => {
  const { site, bgImage } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          fullName
          profession
        }
      }
      bgImage: file(relativePath: { eq: "batman.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <BgContainer fluid={bgImage.childImageSharp.fluid}>
      <InfoContainer>
        <Title component="h1">{site.siteMetadata.fullName}</Title>
        <SubTitle component="p">{site.siteMetadata.profession}</SubTitle>
      </InfoContainer>
    </BgContainer>
  );
};

export default Intro;
