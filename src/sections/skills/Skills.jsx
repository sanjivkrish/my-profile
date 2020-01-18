import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Grid, Container } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const SectionTitle = styled(Box)({
  fontSize: '2.5rem',
  textAlign: 'center',
  color: '#22A39F',
  paddingTop: '2rem'
});

const Skills = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            skills {
              name
              stars
            }
          }
        }
      }
    `
  );

  return (
    <Container fixed>
      <SectionTitle component="h2">Skills</SectionTitle>
      <Box component="hr" />
      <Grid container justify="center">
        {site.siteMetadata.skills.map(skill => (
          <Grid item key={skill.name} xs={12} sm={6} md={6} lg={6} xl={3}>
            {skill.name}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
