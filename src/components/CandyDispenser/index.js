import React from 'react'

import './index.scss';

const candies = ["🍭", "🍫", "🍬", "💩"];

class CandyDispenser extends React.Component {
  constructor() {
    super();
    
    this.state = {
      dispensedCandy: []
    }

    this.dispenseCandy = this.dispenseCandy.bind(this);
    this.eatCandy = this.eatCandy.bind(this);
  }

  dispenseCandy() {
    this.setState(prevState => ({
      dispensedCandy: [...prevState.dispensedCandy,
                        candies[Math.floor(Math.random() * candies.length)]]
    }));
  }

  eatCandy(index) {
    this.setState(prevState => ({
      dispensedCandy: prevState.dispensedCandy.filter((_, i) => i !== index)
    }));
  }

  render() {
    const candyList = this.state.dispensedCandy.map((candy, idx) => (
      <li key={ idx } className="candy">
        <span role="img" aria-label="img" onClick={ () => this.eatCandy(idx) }>{ candy }</span>
      </li>
    ));
      
    return (
      <div className="candy-dispenser">
        <h5 className="dispenser" onClick={ this.dispenseCandy }><span role="img" aria-label="img" title="Dispense Candy">🎰</span></h5>
        <ul className="candies">{ candyList }</ul>
      </div>
    );
  }
}

export default CandyDispenser;
