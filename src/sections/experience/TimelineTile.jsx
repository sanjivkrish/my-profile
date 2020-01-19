import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Grid, Box, Link, Paper } from '@material-ui/core';

const StyledPaper = styled(Paper)({
  padding: '1rem',
  margin: '1rem 0',
  width: 'inherit'
});

const Wrapper = styled(Grid)({
  padding: '1.5rem 0'
});

const MiniFontBox = styled(Box)({
  fontSize: '0.75rem'
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
  <StyledPaper elevation={3}>
    <Wrapper container>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <Box component="h4">{where}</Box>
        <MiniFontBox>
          {from} - {to}
        </MiniFontBox>
        <MiniFontBox>{location}</MiniFontBox>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <Box component="h4">{position}</Box>
        <Box component="p">{details}</Box>
        <Link href={link} target="_blank">
          {link}
        </Link>
      </Grid>
    </Wrapper>
  </StyledPaper>
);

export default TimelineTile;
