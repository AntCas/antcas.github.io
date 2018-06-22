import React, { Component } from 'react'

export default class DynamicOutlines extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clientHeight: 0,
			clientWidth: 0,
			hover: false
		}
		this.toggleHover = this.toggleHover.bind(this);
	}

	toggleHover() {
		this.setState({ hover: !this.state.hover });
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
			clientWidth,
			hover
		} = this.state;

		const borderLineStyles = {
			position: 'absolute',
			top: `-${(borderGap + (borderWidth/2))}px`,
			left: `-${(borderGap + (borderWidth/2))}px`,
			height: `${(clientHeight + (borderGap*2) + borderWidth)}px`,
			width: `${(clientWidth + (borderGap*2) + borderWidth)}px`,
		}


    const borderLines = ['side-a', 'side-b', 'side-c', 'side-d'].map((sideClass, idx) => {
			const sideStyles = {
				position: 'absolute',
				background: borderColor,
				transition: `all ${transitionTime} ease-in`
			}

			switch (sideClass) {
				case 'side-a':
					sideStyles['top'] = `-${borderWidth/2}px`;
					sideStyles['left'] = `${borderGap + (borderWidth/2)}px`;
					sideStyles['width'] = hover ? `${clientWidth}` : '0px';
					sideStyles['height'] = `${borderWidth}px`;
					sideStyles['transitionDelay'] = transitionTime;
					break;
					
				case 'side-b':
					sideStyles['bottom'] = `-${borderWidth/2}px`;
					sideStyles['right'] = `${borderGap + (borderWidth/2)}px`;
					sideStyles['width'] = hover ? `${clientWidth}` : '0px';
					sideStyles['transform'] = 'rotate(180deg)';
					sideStyles['height'] = `${borderWidth}px`;
					break;

				case 'side-c':
					sideStyles['bottom'] = `${borderGap + (borderWidth/2)}px`;
					sideStyles['left'] = `-${borderWidth/2}px`;
					sideStyles['width'] = `${borderWidth}px`;
					sideStyles['height'] = hover ? `${clientHeight}` : '0px';
					sideStyles['transform'] = 'rotate(180deg)';
					sideStyles['transitionDelay'] = transitionTime;
					break;

				case 'side-d':
					sideStyles['top'] = `${borderGap + (borderWidth/2)}px`;
					sideStyles['right'] = `-${borderWidth/2}px`;
					sideStyles['width'] = `${borderWidth}px`;
					sideStyles['height'] = hover ? `${clientHeight}` : '0px';
					break;
			}
			return (
				<div key={ idx }
					className={ sideClass }
					style={ sideStyles } />
			);
    });
 
    return (
      <div className="border-lines"
				style={ borderLineStyles }
				onMouseEnter={this.toggleHover}
				onMouseLeave={this.toggleHover}>
        { borderLines }
      </div>
    );
  }
}