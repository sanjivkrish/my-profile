import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Grid } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import TimeLineTile from './TimelineTile';

import { Wrapper } from '../style';

const SectionTitle = styled(Box)({
  fontSize: '2.5rem',
  textAlign: 'center',
  color: '#22A39F',
  paddingTop: '2rem'
});

const Experience = () => {
  const { contentfulWebsiteInfoJsonNode } = useStaticQuery(
    graphql`
      query {
        contentfulWebsiteInfoJsonNode {
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
    `
  );

  return (
    <Wrapper>
      <SectionTitle component="h2">Experience</SectionTitle>
      <Box component="hr" />
      <Grid container direction="column">
        <Box component="h3">Education</Box>
        {contentfulWebsiteInfoJsonNode.education.map(university => (
          <TimeLineTile key={university.where} {...university} />
        ))}
      </Grid>
      <Grid container direction="column">
        <Box component="h3">Careers</Box>
        {contentfulWebsiteInfoJsonNode.experience.map(company => (
          <TimeLineTile key={company.where} {...company} />
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Experience;
