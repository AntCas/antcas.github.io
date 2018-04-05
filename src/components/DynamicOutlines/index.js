import React, { Component } from 'react'

import './index.scss'

export default class DynamicOutlines extends Component {
  render() {
    const { borderColor } = this.props;

    const borderLines = ['side-a', 'side-b', 'side-c', 'side-d'].map((sideClass, idx) => (
      <div key={ idx }
        className={ sideClass }
        style={{ background: borderColor }} />
    ));
 
    return (
      <div className="border-lines">
        { borderLines }
      </div>
    );
  }
}
