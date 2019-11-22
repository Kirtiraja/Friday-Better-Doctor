# _Find Care Now!_

#### :pill: Find doctors and services near you with the Better Doctor Lookup API

#### By _**Kirtiraja Zakheim**_:squirrel:

## Description

  Achoo! As we all know, everybody needs to see a doctor sometimes. But finding a doctor that provides the services you need nearby can be time consuming. To facilitate this, we have created a website where users may search for local doctors by name, symptom,  or insurance carrier. Simply search by one or all of these terms to receive a list of doctors in your city!

## Setup/Installation Requirements
1. _`$ git clone` [https://github.com/Kirtiraja/Friday-Better-Doctor](https://github.com/Kirtiraja/Friday-Better-Doctor)_

2. _`$ cd doctor-lookup`_

3. _`$ npm install`_

4. :rocket: Visit [https://developer.betterdoctor.com](https://developer.betterdoctor.com) to create an account and obtain *Practice Search* API key.

5.  _`$ touch .env`_   -create file in root directory and save key in following format:"API_KEY:**enter your key here**"
6.  _`$ npm run start`_


## Specifications

| Behavior: | Input Example: | Output Example: |
| - | - | - |
|if user inputs medical issue program returns list of doctors in the Portland  |"rash"|"Portland Dermatology,"|
|A user should be able to enter a name to receive a list of doctors in the Portland area that fit the search query.|"William"|"William Ray, MD.William Cahilll,MD"
|If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients |"William"|"William Ray, MD. accepting new patients,830 Scenic Dr., 95350, Modesto, CA, 209-543-6280, www.suttergould.org"
|If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is|""|"There was an error handling your request: " + error.message|
|If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. |"Dr. Who"|"Sorry, no doctors match: 'Dr. Who' search criteria, please use another search term."" |
||||
||||


## Known Bugs

_none_

## Support and contact details

_Feel free to contact me at kirtiraja@gmail.com if you have any questions._

## Technologies Used
* JavaScript (ES6)
* CSS
* HTML
* Bootstrap 4 CSS and JS
* Jquery-3.2.1.
* Jest
* NPM
* Webpack
* Lint
* Jest
* Better Doctor API


### License

* This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>

Copyright (c) 2019 **_Kirtiraja Zakheim_**
