import React from 'react';
import SEO from '../components/seo';

import { Intro } from '../sections/intro';
import './layout.css';

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Intro />
  </div>
);

export default IndexPage;
