import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Media from 'react-media'

import Header from '../components/Header'
import Footer from '../components/Footer'

import './reset.css';
import './index.scss';

export default class TemplateWrapper extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title="Anthony Castrio's Website"
          meta={[
            { name: "description", content: "Anthony Castrio - Product Manager and Software Engineer" },
            { name: "keywords", content: "software engineering, software, websites, product management, portfolio, product" },
          ]}
        />
        <Header />
        <div className="layout">
          <div className="matches">
            <div>{ this.props.children() }</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

