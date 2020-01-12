import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Box from '@material-ui/core/Box';
import { styled } from '@material-ui/core/styles';
import TimeLineTile from './TimelineTile';

const Wrapper = styled(Box)({
  padding: '1rem 15rem',
  backgroundColor: 'aliceblue'
});

const SectionTitle = styled(Box)({
  fontSize: '2.5rem',
  textAlign: 'center',
  color: '#22A39F'
});

const SectionContent = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
});

const SectionSubTitle = styled(Box)({});

const Experience = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
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
      }
    `
  );

  return (
    <Wrapper component="div">
      <SectionTitle component="h2">Experience</SectionTitle>
      <Box component="hr" />
      <SectionContent>
        <SectionSubTitle component="h3">Education</SectionSubTitle>
        {site.siteMetadata.education.map(university => (
          <TimeLineTile key={university.where} {...university} />
        ))}
      </SectionContent>
      <Box component="hr" />
      <SectionContent>
        <SectionSubTitle component="h3">Careers</SectionSubTitle>
        {site.siteMetadata.experience.map(company => (
          <TimeLineTile key={company.where} {...company} />
        ))}
      </SectionContent>
    </Wrapper>
  );
};

export default Experience;
