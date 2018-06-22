import React, { Component } from 'react'

import './index.scss'

export default class DynamicOutlines extends Component {
	componentDidMount() {
		const { itemId } = this.props;
		if (itemId) {
			const height = document.getElementById(this.props.itemId).clientHeight;
			const width = document.getElementById(this.props.itemId).clientWidth;
			this.setState({ height, width });
		} else {
			console.log("must provide itemId in props");
		}
  }

  render() {
    const {
			borderColor,
			borderGap,
			borderWidth,
			transitionTime
		} = this.props;


		const borderLineStyles = {
			position: 'absolute',
			top: `-${(borderGap + (borderWidth/2))}px`,
			left: `-${(borderGap + (borderWidth/2))}px`,
		}

    const borderLines = ['side-a', 'side-b', 'side-c', 'side-d'].map((sideClass, idx) => (
      <div key={ idx }
        className={ sideClass }
        style={{ background: borderColor }} />
    ));
 
    return (
      <div className="border-lines" style={ borderLineStyles }>
        { borderLines }
      </div>
    );
  }
}
