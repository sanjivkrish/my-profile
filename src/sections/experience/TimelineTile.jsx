import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Grid, Box, Link } from '@material-ui/core';

const Wrapper = styled(Grid)({
  padding: '1.5rem 0'
});

const MiniFontBox = styled(Box)({
  fontSize: '0.75rem'
});

const PositionBox = styled(Box)({
  marginBottom: '1rem'
});

const TimelineTile = ({
  where,
  from,
  to,
  location,
  position,
  details,
  link
}) => (
  <Wrapper container>
    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
      <Box component="h4">{where}</Box>
      <MiniFontBox>
        {from} - {to}
      </MiniFontBox>
      <MiniFontBox>{location}</MiniFontBox>
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
      <PositionBox component="h5">{position}</PositionBox>
      <Box component="p">{details}</Box>
      <Link href={link} target="_blank">
        {link}
      </Link>
    </Grid>
  </Wrapper>
);

export default TimelineTile;
