# WindWizard

Being a Kitesurfer, I always have 5 diferent weather apps on my phone, What wind wizard does is collect weatherdata form multiple sources and allows the user to toggle between different forecasts.
This is an educational project, learning and improving understanding about working with apis is very important, 
so there may be shortcuts to a working page that will be overlooked in the intrest of understanding and practicing.
The goal of this project then, is to build a site that looks good and allows the user to check out weatherdata from multiple sources.
The data will be collected using apis and displayed to the page.

## Buisniss goals of the site:

* At this point none existant. Adds could possibly be added to the site in the future.

## Visitor goals of the site:

* Get weather forcast for a surfspot.
* Look up multiple spots to decide on where to go.

## UX

Visitors of the site:
The main category of visitors of this site are surfers who are looking to go surfing in the coming days.

As a visitor of the site, I want to look up the forcast of my local spot to see if the conditions are right for me to surf.
As a visitor of the site, I want to look up the forecast from multiple sources to be more certain of the conditions.
As a visitor of the site, i want to look up the forecast for multiple spots around my home so i can se where the conditions are going to be the best.

## Wireframe Mockups:
[Wireframe for Mobile view](https://github.com/jourm/WindWizard/blob/master/assets/images/wireframes/MobileWireframe.PNG)
[Wireframe for Desktop view](https://github.com/jourm/WindWizard/blob/master/assets/images/wireframes/FullscreenWireframe.PNG)
## Design Choices:

#### Fonts

* Baloo 2 was chosen as a font for the name of the site because it conveys a certain playfulness that fells right for a site for surfers.
* Roboto was chosen as the main font for all data and instructions because its a clear and easy to read font that is modern and dosnt stand out to much.

#### Background Image

The site was initially made without a background immage, but it did not provide the playfulness of a site for surfers, it also lacked a modern feel.
A free Image of a ocean sunset was then chosen from [Pexels](https://www.pexels.com/search/ocean/) because of its cool balance of colors to use on the page.

#### Colors

The colors used for the site were based of the background image. The water in the image had  colors ranging from black to blue to gray, all somewhat muted colors that look good on a site. The sky in the image has a great orange color that was used as a contrasting color for the logo and the buttons feature on the page.

#### Cards fro the forecast

The cards for displaying the forecast were designed to work on small screens since surfers are often times on the go, visitors will often come using their phones.
for bigger screens these same cards are displyed in multiple columns.

## Features:

The site featurs one single page with

* Latitude, longitude seachbar, wich can be filled in by clicking the map, or providing your own memorised data. The input of the searchbar is checked with a regular expression to make sure it matches correct coordinate format.
* Dropdown menu: where the source of the forecast can be selected. Default is [WorldWeatherOnline](https://www.worldweatheronline.com/) api, and currently one more option exists: [OpenWeather](https://openweathermap.org/).

* Button: Get Forecast, A button that sets of a call the selected api and displays it to the page.
* Google Maps with  wind-data from [OpenWeather](https://openweathermap.org/) api. The url for the OpenWeather api is assembled from [tile coordinates](https://developers.google.com/maps/documentation/javascript/coordinates) an image is than recived and placed ontop of the corresponding map tile. This provides a cool visual effect and also give a general picture of the weathersytems currently at work. The map can be clicked, and from that click the Latitude, Longitude Searchbar is filled out so that it is easy to get data for places that are not seacheable on google, (certain beaches or surfspots.)
* Google places Autocorrect searchbar where a user can search for a place, and one a place is chosen, the map centers and zooms on that place and the Forecast of the chosen source is displayed underneath.
* Cards that are displayed with the forecast once it has been requested from the api.

## Features To Implement

* Add more Api sorces for forecasts. Having a few more sources would completely remove the need to use other sites.
* Add favorite section, where previously searched locations get saved as a cookie and can diplayed. Since many surfers have one or a couple of good spots nearby, it would be usefull for the user to directly be able to get the forecast for their favorite spots so that they can choose where to go.
* Add Current weather sections, where users can get live uppdates on what the conditions currently are like at their favorite spots.
* Add pins to the map for famous spots all around the world would help new surfers find spots to go to aswell as providing an easier way to find you favorite spot.
* Add Feature where the user can drop a pin to the map and then get a small info window with the current weather conditions and a button to get forecast.

## Technologies used

This project uses HTML, CSS and JavaScript programming languages.

#### [Visual Studio Code](https://code.visualstudio.com/)

This project was developed in Visual Studio Code

#### [Google fonts](https://fonts.google.com/)

This Project uses fonts from Google fonts.

#### [JQuery](https://jquery.com/)

This project uses jquery for DOM manipulation.

#### [Bootstrap](https://getbootstrap.com/)

This project uses bootstrap  for its gridsystem and premade classes.

#### [Pexels](https://www.pexels.com/search/ocean/)

This project uses Pexels as a free source of images.

#### [balsamiq Mockups](https://balsamiq.com/wireframes/)

This project uses basamic mockups 3 for creating wireframes.

### APIS:

#### [Open Weather](https://openweathermap.org/)
This project uses Open weather API as a sorce of weather forecasts and images of winddata to be layerd on top of the map.

#### [World Weather Online](https://www.worldweatheronline.com/)

This project uses World Weahter online as a source of weather forecast.

#### Google Maps For Javascript with Places library 

* This project uses [Google Maps Javascript api](https://developers.google.com/maps/documentation/javascript/tutorial) to display a interactive map where windinformation can be displayed ontop.
* This Project uses [Places library](https://developers.google.com/maps/documentation/javascript/places) to handle the fuctionality of an autocorrecting searchbar displayed on the map.

## Testing

#### Testing of code
- style.css was ran through [Jigsaw validator](https://jigsaw.w3.org/css-validator/validator) with no no errors.
- index.html was ran through [WC3 Markup Validation service](https://validator.w3.org/) with no errors.
- worldWeatherOnline.js, openWeather.js, map.js and main.js were ran through [jshint](https://jshint.com/) without major isuses.
#### Manual testing

#### Testing of user stories
* As a visitor of the site, I want to look up the forcast of my local spot to see if the conditions are right for me to surf. A visitor with this agenda can click their spot on the map, search for it in the searchbar or add the cordinates directtly into the latiude,longitude seachbox. The forecast is then displayed beneath the map.

* As a visitor of the site, I want to look up the forecast from multiple sources to be more certain of the conditions.
* As a visitor of the site, i want to look up the forecast for multiple spots around my home so i can se where the conditions are going to be the best.

#### Bugs Discoverd
During testing issues where discovered: 
* Color of elements not being displayed properly in Microsoft Edge. Was fixed by changing rgb() to rgba() in the styilng of the affected elements.
* Input in latitude, longitude inputfield can be any string. Was fixed by adding a if statment to check if the input matches a "regular expression" that will fit any legitimate coordinate from -90, -180 to 90, 180.
* Google maps api callback had an issue where it would produce an error about oncve every 20 times the page was loaded. After some seacrhing on the web this was determined to be a inherit fault in the api and a workaround where the callback is removed and the map is initiated form main.js when the content of the dom is loaded.
* Once the callback had been fixed, an error where sometime google would not be defined when loading the page appeared. This was fixed by loading google maps in the head and maps.js at the bottom of the body.
* Minor spelling and unit errors were found and corrected in style.css when running through [Jigsaw validator](https://jigsaw.w3.org/css-validator/validator).
* Once hosted on github a warning where the site loads icons using http istead of hhtps was discovered, this was solved by changeing the url delivered byt the apis using url.replace("http:", "https:")
* During testing in jshint a few parethesies were found to be missing after constructor functuions aw well as a couple of unneccary semicolons, this was easily rectified.


