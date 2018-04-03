import React from 'react'
import Link from 'gatsby-link'

import './index.css'

const Header = () => (
  <div className="header">
    <div className="header-subcontainer">
      <h1> 
        <Link to="/">CodeStack</Link>
      </h1>
    </div>
  </div>
);

export default Header
