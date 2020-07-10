---
path: "/projects/good-work-cafes"
date: "2019"
title: "Good Work Cafes"
image: "goodworkcafes.svg"
color: "#3b291b"
location: "Mexico City, MX"
topics: ["side-project", "engineering", "product"]
tech: ["JavaScript", "React", "CircleCI", "Netlify", "Gatsby"]
---

[https://goodworkcafes.com/](https://goodworkcafes.com/)

![Homepage Screenshot](/images/contigou/homepage.png "Good Work Cafes Homepage")

Good Work Cafes started as a Google Sheet. Several friends and I who like working from coffee shops got in the habit of recording each new cafe we visited and rating them by their wifi speed, availability of power outlets, and coffee. Basically factoring in everything you need to sit down and get a few hours of productivity in.

As a fun side project between freelancing gigs, I started working on this website to make browsing the cafes faster and easier. I added filters, search, and map functionality. My friend Brent Bovenzi contributed as well, especially to making the map icons better and improving the Search UX.

The website still uses Google Sheets as a backend and is hosted for free on Netlify. My only costs are the domain, about $12/year. Once a day a CircleCI job runs on GitHub that downloads any new cafes and re-builds the website.

![Map Page Screenshot](/images/contigou/map.png "Good Work Cafes Map View")

Thus, the website is entirely static, making it cheap to host, and thanks to Gatsby it's super responsive as well.

One challenge as the number of cafes on the website grew was keeping the main page responsive. Initially all cafes were loaded on the main page which slowed down scrolling to a halt and made the website take a very long time to render. This was solved by adding in a dynamic-scrolling component that only loads the cafes you're currently looking at. The end result is super fast and smooth scrolling.



###Software used:

* `Sass` -- CSS styles

* `Gatsby` -- Static site builder

* `Google Sheets` -- Backend

* `Netlify` -- Hosting

* `CircleCI` -- Continous deployment and site updates
