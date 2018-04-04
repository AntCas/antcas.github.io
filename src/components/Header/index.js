import React from 'react'
import Link from 'gatsby-link'
import ReactSVG from 'react-svg'

import routes from '../../constants/routes'

import './index.css'

const data = [
  {
    img: 'twitter.svg',
    url: 'https://twitter.com/AnthonyCastrio'
  },
  {
    img: 'linkedin.svg',
    url: 'https://www.linkedin.com/in/antcas/'
  },
  {
    img: 'github.svg',
    url: 'https://github.com/AntCas'
  }
]

const links = data.map((item, idx) => (
  <li className="item-link" key={ idx }>
    <Link to={ item.url }>
      <ReactSVG
        path={ `${routes.ICON}/${item.img}` }
        className="item-image" />
    </Link>
  </li>
));

const Header = () => (
  <div className="header">
    <div className="header-subcontainer">
      <h1> 
        <Link to="/">Anthony Castrio</Link>
      </h1>
      <ul className="links">
        { links }
      </ul>
    </div>
  </div>
);

export default Header
