import React, { Component } from 'react'
import Radium from 'radium';

import './index.scss'

/*
const styles = {
  position: absolute;
  top: -($border-gap + $border-width/2);
  left: -($border-gap + $border-width/2);
  height: $element-height + $border-gap*2 + $border-width;
  width: $element-width + $border-gap*2 + $border-width;

  .side-a, .side-b, .side-c, .side-d {
    position: absolute;
    transition: all $transition-time ease-in;
  }
  .side-a, .side-b {
    width: 0px;
    height: $border-width;
  }
  .side-c, .side-d {
    width: $border-width;
    height: 0px;
    transition-delay: $transition-time;
  }
  .side-a {
    top: -($border-width/2);
    left: $border-gap + $border-width/2;
  }
  .side-b {
    bottom: -($border-width/2);
    right: $border-gap + $border-width/2;
    transform: rotate(180deg);
  }
  .side-c {
    bottom: $border-gap + $border-width/2;
    left: -($border-width/2);
    transform: rotate(180deg);
  }
  .side-d {
    top: $border-gap + $border-width/2;
    right: -($border-width/2);
  }

  &:hover {
    .side-a, .side-b {
      width: $element-width; 
    }
    .side-c, .side-d {
      height: $element-height;
    }
  }

}
*/
class DynamicOutlines extends Component {
  render() {
    const { borderColor, parentId } = this.props;

    const parentElement = document.getElementById(parentId);
   
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

export default Radium(DynamicOutlines);
