import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Grid } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

import SkillRating from './SkillRating';
import { Wrapper } from '../style';

const SectionTitle = styled(Box)({
  fontSize: '2.5rem',
  textAlign: 'center',
  color: '#22A39F',
  paddingTop: '2rem'
});

const Skills = () => {
  const { contentfulWebsiteInfoJsonNode } = useStaticQuery(
    graphql`
      query {
        contentfulWebsiteInfoJsonNode {
          skills {
            name
            stars
          }
        }
      }
    `
  );

  return (
    <Wrapper>
      <SectionTitle component="h2">Skills</SectionTitle>
      <Box component="hr" />
      <Grid container justify="center">
        {contentfulWebsiteInfoJsonNode.skills.map(skill => (
          <Grid item key={skill.name} xs={12} sm={12} md={6} lg={6}>
            <SkillRating
              key={skill.name}
              name={skill.name}
              stars={skill.stars}
            />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Skills;
