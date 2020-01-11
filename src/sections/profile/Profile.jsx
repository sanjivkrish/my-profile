import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Box from '@material-ui/core/Box';
import { styled } from '@material-ui/core/styles';

const SectionTitle = styled(Box)({
  fontSize: '2.5rem',
  textAlign: 'center',
  color: '#22A39F'
});

const Profile = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  return (
    <Box component="div" color="primary.main">
      <SectionTitle component="h2">Profile</SectionTitle>
      <Box component="hr" />
      <Box display="flex" flexDirection="row" justifyContent="center">
        <Box>About</Box>
        <Box>Picture</Box>
        <Box>Data</Box>
      </Box>
    </Box>
  );
};

export default Profile;
