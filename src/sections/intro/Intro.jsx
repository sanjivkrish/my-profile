import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Paper, Container } from '@material-ui/core';

import BackgroundImage from 'gatsby-background-image';

const styles = {
  paperContainer: {
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
    height: `100vh`
  },
  infoContainer: {
    position: `relative`,
    top: `20%`,
    width: `50%`,
    textAlign: `centre`
  },
  title: {
    fontSize: `3rem`,
    fontWeight: `700`,
    color: `white`,
    textAlign: `center`,
    borderBottom: `1px solid white`,
    paddingBottm: `1rem`
  },
  subTitle: {
    fontSize: `2rem`,
    color: `white`,
    textAlign: `center`
  }
};

export const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
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
    <BackgroundImage
      fluid={data.bgImage.childImageSharp.fluid}
      style={styles.paperContainer}
    >
      <Container style={styles.infoContainer}>
        <h1 style={styles.title}>Sanjiv Krishnasamy</h1>
        <p style={styles.subTitle}>Frontend Developer</p>
      </Container>
    </BackgroundImage>
  );
};
