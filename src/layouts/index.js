import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta name="description" content="Mr. Gove song from the Beelievers" />
      <meta
        name="keywords"
        content="Mr. Gove, Beelievers, Michael Gove, bee, pollinator, pesticide"
      />
      <title>Mr. Gove</title>
      <link
        href="https://fonts.googleapis.com/css?family=Raleway:200,400,700"
        rel="stylesheet"
      />
    </Helmet>
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
