---
path: "/blog/2018-11-22-climate-data-layers"
date: "2018-11-22"
title: "Climate Data Layers"
location: "Medellín, Colombia"
color: "#545c20"
image: "salento-palms.jpg"
topics: ["project", "engineering", "data", "GIS", "datasets", "natural disasters", "climate change"]
---

# Climate Data Layers

In Geographic Information Systems we think of data in layers. It's just like editing photos on photoshop, or making a collage. The layers get stacked on top of each other in interesting ways to reveal new information or to achieve an effect.

In photoshop this gives you images with cool filters or lets you replace Grandma's with a lion.

In this case it will give us a high level risk overview for a given address.

Here's the data we're looking for:

## Natural Disaster Risk Maps

We want map of each of the following:

1. Earthquakes
2. Wildfires
3. Winter Weather
4. Flooding
5. Tornado
6. Hurricanes

Let's get there first. That would be a really good start. Then go for Climate Change.

## Climate Change Risk Maps

1. Sea level rise
2. Desertification
3. Where is the world getting colder?
4. Where is the world getting warmer?
5. Drought


## Human Risks

The third layer category will be human generated risks

1. Oil pipelines
2. Risk of being impacted by offline oil spill
3. Nuclear power plants and risk of melt-down
4. Smog
5. Crime?


## Governments

Then we can add on top of that how prepared governments are at various levels.

1. How green is your city?
2. How prepared are they for the relevant hazards?
3. How do are your representatives voting? Are they passing bills that will improve your safety?


## Actions

For each of these categories, and for each layer that makes them up, we'll have an associated action layer.

1. What steps can you do to prepare for this short term?
2. What should you be asking your city for?
3. Are there steps you can take to reduce your contribution to the problem?
4. Where can you find more information?
5. Who should you contact?

---

# Data Sources

There is a **huge** amount of data out there. Here's some of what I've found so far.

## Open Data Catalog

Levees, Oil Pipelines, Lots of Cicada info?, FEMA datasets, Coal Mines, Natural Gas

[http://open-fedmaps.opendata.arcgis.com/datasets?q=USDA&sort_by=relevance](http://open-fedmaps.opendata.arcgis.com/datasets?q=USDA&sort_by=relevance)

## Wildfire Hazard Potential USA

http://www.arcgis.com/home/item.html?id=fc0ccb504be142b59eb16a7ef44669a3

https://maps7.arcgisonline.com/arcgis/rest/services/USDA_USFS_2014_Wildfire_Hazard_Potential/MapServer

## Existing Data Aggregation Maps

https://web.archive.org/web/20140717040901/http:/www.crisishq.com/why-prepare/us-natural-disaster-map

https://datacore.unepgrid.ch/geonetwork/srv/eng/catalog.search#/home

https://preview.grid.unep.ch/
* requires all usage to be non-profit, so can’t use it for this project. Seems like a bone-headed move to me. Why would you restrict the use of this data? The ability to positively impact humanity is not limited to non-profit entities.
* Hopefully the data sources themselves do not have similar restrictions.

## UNEP data sources

https://preview.grid.unep.ch/index.php?preview=about&cat=3&lang=eng

- Awesome, looks like were dealing with Creative Commons CC-0 license “No Rights Reserved” for at least some of these!
- Other licensed other CC vv.4 which just requires attribution —> we should attribute all data sources by default in order to provide both transparency to our process and credit where credit is due
- Maybe we can release our own alternative to unep under the same CC-0 license in order to allow for-profit use

## USGS

### All US Gov’t work used domestically is in the public domain.

https://en.wikipedia.org/wiki/Copyright_status_of_work_by_the_U.S._government

### Data and Tools

[https://www.usgs.gov/products/data-and-tools/data-and-tools-topics](https://www.usgs.gov/products/data-and-tools/data-and-tools-topics)

### All Kinds of Stuff

[https://www.usgs.gov/mission-areas/natural-hazards?qt-mission_areas_l2_landing_page_ta=3#qt-mission_areas_l2_landing_page_ta](https://www.usgs.gov/mission-areas/natural-hazards?qt-mission_areas_l2_landing_page_ta=3#qt-mission_areas_l2_landing_page_ta)

## Earthquakes

https://earthquake.usgs.gov/

## Data.gov

Climate https://www.data.gov/climate/

Ecosystem https://www.data.gov/ecosystems/

## USDA

### Natural Resources Conservation Service

[https://www.nrcs.usda.gov/wps/portal/nrcs/site/national/home/](https://www.nrcs.usda.gov/wps/portal/nrcs/site/national/home/)

### Main Page

[https://www.usda.gov/](https://www.usda.gov/)

### Data

[https://www.usda.gov/topics/data](https://www.usda.gov/topics/data)

## Google BigQuery

Might have some data to play with - requires setting up payment account

https://cloud.google.com/bigquery/

## Australia

[https://www.munichre.com/australia/homepage/index.html](https://www.munichre.com/australia/homepage/index.html)

## Understanding Risk

[https://www.munichre.com/australia/australia-risk-factors/understanding-risk/index.html](https://www.munichre.com/australia/australia-risk-factors/understanding-risk/index.html)
