import React, { Component } from 'react'

import './index.scss'

export default class DynamicOutlines extends Component {
  render() {
    const { borderColor, parentId } = this.props;

    //const parentElement = document.getElementById(parentId);
    //const { clientHeight, clientWidth } = parentElement;
   
    const inner = (
      <div className="inner"
        style={{ background: borderColor }} />
    );

    const borderLines = ['side-a', 'side-b', 'side-c', 'side-d'].map((sideClass, idx) => (
      <div className={ sideClass } key={ idx }>
        { inner }
      </div>
    ));
 
    return (
      <div className="border-lines">
        { borderLines }
      </div>
    );
  }
}
