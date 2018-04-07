---
path: "/contigou"
date: "2018"
title: "ContigoU"
image: "contigou.svg"
color: "#8cfdff"
shadow: "#29657b"
topics: ["healthcare", "engineering", "product"]
tech: ["JavaScript", "React", "Node.js", "SQL", "Python"]
---

ContigoU helps patients find skilled nursing rehab.

In late 2017 I was contracted to build out the mvp for a seed stage healthcare technology startup. The company was founded by a discharge nurse and veteran of the healthcare industry who wanted to fix the problems she’d experienced first hand.

Skilled Nursing Rehab is where you go after a stroke, car accident, or other debilitating health problem and after the hospital has you in a stable condition. Patients usually stay in skilled nursing for about a month.

Finding one of these facilities on your own is very difficult. Hospitals don’t give much help and information online is scattered. ContigoU solved these issues by giving you a hotel-style search for skilled nursing rehab.

##Product

###Overview

I helped ContigoU develop their initial product and launch strategy. We narrowed down their original model of handling all discharge scenarios to focusing on just skilled nursing rehab, which in itself is still a multi-billion dollar industry.

I travelled with the founder up and down the Bay Area and interviewed dozens of patients, hospital administrators, and skilled nursing employees to discover what problems they faced and how we could help.

###We found several pain points:

1. Patients couldn’t find information about facilities
2. Hospitals couldn’t get their patients out the door fast enough
3. Skilled Nursing Facilities were struggling to reach patients

A listings website would sit right at the crux of these problems and help solve all three simultaneously.

###Product Spec
I created a detailed product specification based on the requirements we identified, including mockups, examples of products with a similar UX in other verticals and a mood board. Using this document I coordinated with another freelancer to get the product designed and branded. After several iterations we arrived at a great looking MVP.

To manage the project I set up several product management tools for the company.

We used Trello for task management. Slack for team communication. And Google Drive for everything else.

###Transitioning

Once the MVP was ready for launch, I prepared a detailed document outlining the full technology and product stack to make it easy for any other experienced dev team to jump right in and get to work.


##Engineering

###Overview
For this project I handled both the product management side of things as well as the engineering implementation. My job was to both deeply understand the needs of the customer and to translate those needs into a working solution.

###Stack
For this project I used a SERN stack (SQLite, Express, React, Node).

The website is currently deployed to a Digital Ocean Droplet running `NGINX`.  `UFW` handles the firewall and restricts traffic to certain allowed ports. The web server is built in `Node.js` and the front-end framework is `React.js`.

###Software used:

* `Sass` for CSS styles.

* `Redux` for managing state.

* `Webpack` for building the React project and minifying files.

* `Babel` for advanced JavaScript language features.

* `yarn` for better package management.

* `SQLite` for a straightforward database solution.

* `pm2` for better Node.js process management.

* Various Google APIs

