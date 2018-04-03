import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Media from 'react-media'

import Header from '../components/Header'
import './reset.css'
import './index.css'
import './layout-overide.css';

export default class TemplateWrapper extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        />
        <Header />
        <div className="layout">
          <Media query={{ maxWidth: 848 }}>
            {matches =>
              matches ? (
                <div className="matches">
                  <div style={{ flex: 1 }}>{ this.props.children() }</div>
                </div>
              ) : (
                <div className="matches">
                  <div style={{ flex: 2.5, paddingRight: "30px" }}>
                    { this.props.children() }
                  </div>
                </div>
              )
            }
          </Media>
        </div>
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

