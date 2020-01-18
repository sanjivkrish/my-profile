import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Typography, Grid, Container } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { styled } from '@material-ui/core/styles';

const Wrapper = styled(Grid)({
  padding: '4px'
});

const SkillRating = ({ name, stars }) => (
  <Wrapper container>
    <Grid item sm={3}>
      <Typography>{name}</Typography>
    </Grid>
    <Grid item sm={3}>
      <Rating value={stars} readOnly />
    </Grid>
  </Wrapper>
);

export default SkillRating;
