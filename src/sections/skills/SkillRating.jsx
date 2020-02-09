import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { styled } from '@material-ui/core/styles';
import { Star } from '@material-ui/icons';

const Wrapper = styled(Grid)({
  padding: '4px'
});

const SkillRating = ({ name, stars }) => (
  <Wrapper container>
    <Grid item xs={6} sm={6}>
      <Typography>{name}</Typography>
    </Grid>
    <Grid item xs={6} sm={6}>
      <Rating
        value={stars}
        readOnly
        icon={<Star color="secondary" />}
        emptyIcon={<Star />}
      />
    </Grid>
  </Wrapper>
);

export default SkillRating;
