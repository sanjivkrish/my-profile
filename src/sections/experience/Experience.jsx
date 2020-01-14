import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Grid, Container } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import TimeLineTile from './TimelineTile';

const SectionTitle = styled(Box)({
  fontSize: '2.5rem',
  textAlign: 'center',
  color: '#22A39F',
  paddingTop: '2rem'
});

const Experience = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            education {
              where
              from
              to
              location
              position
              details
              link
            }
            experience {
              where
              from
              to
              location
              position
              details
              link
            }
          }
        }
      }
    `
  );

  return (
    <Container fixed>
      <SectionTitle component="h2">Experience</SectionTitle>
      <Box component="hr" />
      <Box component="h3">Education</Box>
      <Grid container direction="column">
        {site.siteMetadata.education.map(university => (
          <TimeLineTile key={university.where} {...university} />
        ))}
      </Grid>
      <Box component="hr" />
      <Grid item>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          <Box component="h3">Careers</Box>
          {site.siteMetadata.experience.map(company => (
            <TimeLineTile key={company.where} {...company} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Experience;
