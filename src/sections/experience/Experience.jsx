import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box } from '@material-ui/core';
import { styled, useTheme } from '@material-ui/core/styles';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

import { Wrapper } from '../style';

const SectionTitle = styled(Box)({
  fontSize: '2.5rem',
  textAlign: 'center',
  color: '#22A39F',
  paddingTop: '2rem'
});

const StyledBox = styled(Box)({
  padding: '0.25rem 0'
});

const Experience = () => {
  const theme = useTheme();
  const { contentfulWebsiteInfoJsonNode } = useStaticQuery(
    graphql`
      query {
        contentfulWebsiteInfoJsonNode {
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
      <Timeline lineColor={'#ddd'}>
        {contentfulWebsiteInfoJsonNode.experience.map(
          ({ where, from, to, location, position, details, link }) => (
            <TimelineItem
              key={where}
              dateText={`${from} - ${to}`}
              dateInnerStyle={{
                background: theme.palette.secondary.light
              }}
              style={{ color: theme.palette.secondary.light }}
            >
              <StyledBox component="h3">{position}</StyledBox>
              <StyledBox component="h4">
                {where} - {location}
              </StyledBox>
              <StyledBox component="p">{details}</StyledBox>
            </TimelineItem>
          )
        )}
      </Timeline>
    </Wrapper>
  );
};

export default Experience;
