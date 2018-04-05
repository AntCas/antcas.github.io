import React, { Component } from 'react'
import Radium from 'radium';

import './index.scss'

/*
const styles = {
  position: absolute;
  top: -($border-gap + $border-width);
  left: -($border-gap + $border-width);
  height: $border-lines-height;
  width: $border-lines-width;

  .side-a, .side-b {
    width: $element-width; 
  }
  .side-c, .side-d {
    width: $element-height;
  }
  .side-a, .side-b, .side-c, .side-d {
    position: absolute;
    .inner {
      width: 0px;
      height: $border-width;
      transition: all $transition-time ease-in;
    }
  }
  .side-b, .side-d {
    .inner {
      transition-delay: $transition-time;
    }
  }
  .side-a {
    top: -($border-width / 2);
    left: ($border-gap + $border-width);
  }
  .side-b {
    transform: rotate(180deg);
    bottom: -($border-width / 2);
    left: ($border-gap + $border-width);
  }
  .side-c {
    transform: rotate(-90deg);
    top: $border-lines-height / 2 - ($border-width / 2);
    left: -($element-height / 2);
  }
  .side-d {
    transform: rotate(90deg);
    top: $border-lines-height / 2 - ($border-width / 2);
    right: -($element-height / 2);
  }

  &:hover {
    .side-a, .side-b {
      .inner {
        width: $element-width; 
      }
    }
    .side-c, .side-d {
      .inner {
        width: $element-height;
      }
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
