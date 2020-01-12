import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Box from '@material-ui/core/Box';
import { styled } from '@material-ui/core/styles';
import Img from 'gatsby-image';
import moment from 'moment';

const Wrapper = styled(Box)({
  padding: '1rem 15rem'
});

const SectionTitle = styled(Box)({
  fontSize: '2.5rem',
  textAlign: 'center',
  color: '#22A39F'
});

const SectionContent = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
});

const SubSection = styled(Box)({
  width: '30%',
  padding: '1rem'
});

const SectionSubTitle = styled(Box)({});

const SectionSubContent = styled(Box)({
  lineHeight: '1.5rem'
});

const DisplayPicture = styled(Img)({
  borderRadius: '10rem'
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
    <Wrapper component="div">
      <SectionTitle component="h2">Profile</SectionTitle>
      <Box component="hr" />
      <SectionContent>
        <SubSection>
          <SectionSubTitle component="h3">About</SectionSubTitle>
          <SectionSubContent component="p">
            {site.siteMetadata.about}
          </SectionSubContent>
        </SubSection>
        <SubSection>
          <DisplayPicture fluid={displayPic.childImageSharp.fluid} />
        </SubSection>
        <SubSection>
          <SectionSubTitle component="h3">Details</SectionSubTitle>
          <SectionSubContent component="div">
            <Box component="b">Full Name:</Box>
            <Box>{site.siteMetadata.fullName}</Box>
            <Box component="b">Age:</Box>
            <Box>{Math.floor(duration.asYears())} earth years</Box>
            <Box component="b">Current Location:</Box>
            <Box>{site.siteMetadata.currentLocation}</Box>
          </SectionSubContent>
        </SubSection>
      </SectionContent>
    </Wrapper>
  );
};

export default Profile;
