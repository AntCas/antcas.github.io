import React, { Component } from 'react'

import './index.scss'

export default class DynamicOutlines extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clientHeight: 0,
			clientWidth: 0
		}
	}
	componentDidMount() {
		const { itemId } = this.props;
		if (itemId) {
			const clientHeight = document.getElementById(this.props.itemId).clientHeight;
			const clientWidth = document.getElementById(this.props.itemId).clientWidth;
			this.setState({ clientHeight, clientWidth });
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

		const {
			clientHeight,
			clientWidth
		} = this.state;

		const borderLineStyles = {
			position: 'absolute',
			top: `-${(borderGap + (borderWidth/2))}px`,
			left: `-${(borderGap + (borderWidth/2))}px`,
			height: `${(clientHeight + (borderGap*2) + borderWidth)}px`,
			width: `${(clientWidth + (borderGap*2) + borderWidth)}px`,
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
