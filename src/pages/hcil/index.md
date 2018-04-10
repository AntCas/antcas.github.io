---
path: "/hcil"
date: "2017"
title: "HCIL - Project Thermo"
image: "hcil.png"
color: "#212020"
shadow: "#5d3936"
topics: ["research", "engineering", "human-computer interaction", "computer vision"]
tech: ["python", "docker"]
---
https://github.com/AntCas/OpenPanoThermo

Project thermo reliably creates thermographic panoramas of indoor locations in order to identify energy inefficiencies in rooms and buildings.

I worked on this project as a volunteer at the Human Computer Interaction lab at the University of Maryland, College Park during my last semester there as a Computer Science senior.

The software I wrote was integrated into a self-contained device which could take a series of thermographic images over the course of several days in order to map heat issues over time.

The project is a fork of [OpenPano](https://github.com/ppwwyyxx/OpenPano) adapted for thermographic images.

After many dead-ends I ended up achieving great results by first normalizing and enhancing the images using (ImageMagick)[https://www.imagemagick.org/script/index.php], then stitching them together using OpenPano.

[Images]

