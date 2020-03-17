# WindWizard

Being a Kitesurfer, I always have 5 diferent weather apps on my phone, What wind wizard does is collect weatherdata form multiple sources and allows the user to toggle between different forecasts.
This is an educational project, learning and improving understanding about working with apis is very important,
so there may be shortcuts to a working page that will be overlooked in the intrest of understanding and practicing.
The goal of this project then, is to build a site that looks good and allows the user to check out weatherdata from multiple sources.
The data will be collected using apis and displayed to the page.

Buisniss goals of the site:
- At this point none existant. Adds could possibly be added to the site in the future.

Visitor goals of the site:
- Get weather forcast for a surfspot.
- Look up multiple spots to decide on where to go.

# UX
Visitors of the site:
The main category of visitors of this site are surfers who are looking to go surfing in the coming days.

As a visitor of the site, I want to look up the forcast of my local spot to see if the conditions are right for me to surf.
As a visitor of the site, I want to look up the forecast from multiple sources to be more certain of the conditions.
As a visitor of the site, i want to look up the forecast for multiple spots around my home so i can se where the conditions are going to be the best.

## Features:
The site featurs one single page with
- Latitude, longitude seachbar, wich can be filled in by clicking the map, or providing your own memorised data.
- Dropdown menu: where the source of the forecast can be selected. Default is (WorldWeatherOnline)[https://www.worldweatheronline.com/] api, and currently one more option exists:
(OpenWeather)[https://openweathermap.org/].
- Button: Get Forecast, A button that sets of a call the selected api and displays it to the page.
- Google Map with a wind-data from (OpenWeather)[https://openweathermap.org/] api layered ontop of the the map to provide a cool visual effect and also give a general picture of the weathersytems currently at work. The map can be clicked, and from that click the Latitude, Longitude Searchbar is filled out so that it is easy to get data for places that are not seacheable on google, (certain beaches or surfspots.)
- Google places Autocorrect searchbar where a user can search for a place, and one a place is chosen, the map centers and zooms on that place and the Forecast of the chosen source is displayed underneath.

## Features To Implement
- Add more Api sorces for forecasts. Having a few more sources would completely remove the need to use other sites.
- Add favorite section, where previously searched locations get saved as a cookie and can diplayed. Since many surfers have one or a couple of good spots nearby, it would be usefull for the user to directly be able to get the forecast for their favorite spots so that they can choose where to go.
- Add Current weather sections, where users can get live uppdates on what thw conditions currently are like at their favorite spots.
- Add pins to the map for famous spots all around the world would help new surfers find spots to go to aswell as providing an easier way to find you favorite spot.

## APIS:
#### World Weather Online
#### Open Weather
Open weather is a weather api that offers 500 calls to thier basic apis for free.
(Main site)[https://openweathermap.org/]
