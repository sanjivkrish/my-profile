import React from 'react';
import { Paper, Container } from '@material-ui/core';
import Image from '../../images/batman.jpg';

const styles = {
  paperContainer: {
    background: `url(${Image}) no-repeat center center fixed`,
    backgroundSize: `cover`,
    height: `100vh`
  },
  infoContainer: {
    position: `relative`,
    top: `30%`,
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

export const Intro = () => (
  <Paper style={styles.paperContainer}>
    <Container style={styles.infoContainer}>
      <h1 style={styles.title}>Sanjiv Krishnasamy</h1>
      <p style={styles.subTitle}>Frontend Developer</p>
    </Container>
  </Paper>
);
