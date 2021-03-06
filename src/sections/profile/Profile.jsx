import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Button, Grid, Box } from '@material-ui/core';
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

const StyledGrid = styled(Grid)({
  padding: '0.5rem 0'
});

const SectionSubContent = styled(Box)({
  lineHeight: '1.5rem'
});

const DisplayPicture = styled(Img)({
  borderRadius: '15rem',
  height: '10rem',
  width: '10rem',
  margin: '0 3rem'
});

const Profile = () => {
  const { contentfulWebsiteInfoJsonNode, resume, displayPic } = useStaticQuery(
    graphql`
      query {
        contentfulWebsiteInfoJsonNode {
          fullName
          birthDate
          currentLocation
          about
          education {
            where
            position
            link
          }
        }
        resume: contentfulAsset(title: { eq: "resume" }) {
          id
          file {
            url
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
    moment().diff(moment(contentfulWebsiteInfoJsonNode.birthDate))
  );

  return (
    <Wrapper>
      <SectionTitle component="h2">Profile</SectionTitle>
      <Box component="hr" />
      <StyledGrid container direction="row" justify="space-between" spacing={4}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box component="h3">Details</Box>
          <SectionSubContent component="div">
            <Box component="b">Full Name:</Box>
            <Box>{contentfulWebsiteInfoJsonNode.fullName}</Box>
            <Box component="b">Age:</Box>
            <Box>{Math.floor(duration.asYears())} earth years</Box>
            <Box component="b">Current Location:</Box>
            <Box>{contentfulWebsiteInfoJsonNode.currentLocation}</Box>
            <Box component="b">Education:</Box>
            {contentfulWebsiteInfoJsonNode.education.map(
              ({ where, position }) => (
                <Box key={where}>
                  - {position}, {where}.
                </Box>
              )
            )}
          </SectionSubContent>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <DisplayPicture fluid={displayPic.childImageSharp.fluid} />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box component="h3">About</Box>
          <SectionSubContent component="p">
            {contentfulWebsiteInfoJsonNode.about}
          </SectionSubContent>
        </Grid>
      </StyledGrid>
      <StyledGrid container justify="center">
        <Button
          variant="contained"
          color="primary"
          href={resume.file.url}
          download="Sanjiv's Resume"
        >
          Download CV
        </Button>
      </StyledGrid>
    </Wrapper>
  );
};

export default Profile;
