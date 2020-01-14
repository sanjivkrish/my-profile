import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Grid, Box, Link } from '@material-ui/core';

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
  <Grid container spacing={5}>
    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
      <Box component="h4">{where}</Box>
      <MiniFontBox>
        {from} - {to}
      </MiniFontBox>
      <MiniFontBox>{location}</MiniFontBox>
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
      <PositionBox>{position}</PositionBox>
      <Box>{details}</Box>
      <Link href={link} target="_blank">
        {link}
      </Link>
    </Grid>
  </Grid>
);

export default TimelineTile;
