import React from 'react'

import PageBreak from '../PageBreak';

import './index.scss'

const Footer = () => (
  <div className="footer">
    <PageBreak />
    <h1>About</h1>
    <div className="personal-information">
      <div className="info">
        <h4>Occupation:</h4>
        <p>Freelance Product Manager & Software Engineer</p>
      </div>
      <div className="info">
        <h4>Location:</h4>
        <p>San Francisco, CA</p>
      </div>
      <div className="info">
        <h4>Education:</h4>
        <p>B.S. Computer Science 2017<br />University of Maryland, College Park</p>
      </div>
      <div className="info">
        <h4>Availability:</h4>
        <p>Contract or full-time</p>
      </div>
      <div className="info">
        <h4>Services:</h4>
        <p>Web Development, Product Management, Software Engineering, Strategy, Event Planning</p>
      </div>
    </div>
    <PageBreak />
    <div className="copyright">Copyright 2018, Anthony Castrio</div>
  </div>
);

export default Footer;
