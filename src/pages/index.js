import React from 'react';
import SEO from '../components/seo';

import Intro from '../sections/intro';
import Profile from '../sections/profile';
import Experience from '../sections/experience';
import Skills from '../sections/skills';

import './layout.css';

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Intro />
    <Profile />
    <Experience />
    <Skills />
  </div>
);

export default IndexPage;
