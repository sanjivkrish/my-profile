import React from 'react';
import Box from '@material-ui/core/Box';
import { styled } from '@material-ui/core/styles';

const Wrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  padding: '2rem 0'
});

const Container = styled(Box)({
  width: '40%'
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
  <Wrapper>
    <Container>
      <Box component="h4">{where}</Box>
      <Box>
        {from} - {to}
      </Box>
      <Box>{location}</Box>
    </Container>
    <Container>
      <Box component="strong">{position}</Box>
      <Box>{details}</Box>
      <Box>{link}</Box>
    </Container>
  </Wrapper>
);

export default TimelineTile;
