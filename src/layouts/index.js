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
    const hostLocation = typeof(window) !== 'undefined' ? window.location.host : 'castrio.me',
          imagePath    = `http://${hostLocation}/images/preview-image.png`;

    return (
      <div>
        <Helmet
          title="Anthony Castrio's Website"
          meta={[
            { name: "description", content: "Anthony Castrio - Product Manager and Software Engineer" },
            { name: "keywords", content: "software engineering, software, websites, product management, portfolio, product" },
            { name: "image", content: imagePath },
            { property: "og:title", content: "Anthony Castrio" },
            { property: "og:description", content: "Product Management and Software Engineering" },
            { property: "og:url", content: "https://castrio.me" },
            { property: "og:image", content: imagePath },
          ]}
        />
        <Header />
        <div className="layout">
          <div className="matches">
            <div>{ this.props.children }</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.object,
}

