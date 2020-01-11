import React from 'react';
import SEO from '../components/seo';

import Intro from '../sections/intro';
import Profile from '../sections/profile';

import './layout.css';

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Intro />
    <Profile />
  </div>
);

export default IndexPage;
