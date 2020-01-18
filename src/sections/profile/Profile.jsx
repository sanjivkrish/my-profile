import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Grid, Box, Container } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import Img from 'gatsby-image';
import moment from 'moment';

import { Wrapper } from '../style';

const SectionTitle = styled(Box)({
  fontSize: '2.5rem',
  textAlign: 'center',
  color: '#22A39F',
  paddingTop: '2rem'
});

const SectionSubContent = styled(Box)({
  lineHeight: '1.5rem'
});

const DisplayPicture = styled(Img)({
  borderRadius: '15rem',
  height: '10rem',
  width: '10rem'
});

const Profile = () => {
  const { site, displayPic } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            fullName
            birthDate
            currentLocation
            about
          }
        }
        displayPic: file(relativePath: { eq: "displayPic.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  const duration = moment.duration(
    moment().diff(moment(site.siteMetadata.birthDate))
  );

  return (
    <Wrapper>
      <SectionTitle component="h2">Profile</SectionTitle>
      <Box component="hr" />
      <Grid container direction="row" justify="space-between" spacing={5}>
        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <Box component="h3">Details</Box>
          <SectionSubContent component="div">
            <Box component="b">Full Name:</Box>
            <Box>{site.siteMetadata.fullName}</Box>
            <Box component="b">Age:</Box>
            <Box>{Math.floor(duration.asYears())} earth years</Box>
            <Box component="b">Current Location:</Box>
            <Box>{site.siteMetadata.currentLocation}</Box>
          </SectionSubContent>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <DisplayPicture fluid={displayPic.childImageSharp.fluid} />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <Box component="h3">About</Box>
          <SectionSubContent component="p">
            {site.siteMetadata.about}
          </SectionSubContent>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Profile;
