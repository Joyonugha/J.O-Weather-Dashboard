# J.O-Weather-Dashboard

## Project Overview

This project aims to create a weather dashboard application that runs in the browser, featuring dynamically updated HTML and CSS. The application will allow users to search for the weather outlook of multiple cities, enabling them to plan their trips accordingly. The dashboard will display current weather conditions and a 5-day forecast for the selected city, including temperature, humidity, wind speed, and an icon representation of the weather conditions.

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Setup](#setup)
- [License](#license)
- [Contributions](#contributions)
- [Acknowlegdements] (#acknowledgements)

## Features

* Search Functionality: Users can search for a city to view its current and future weather conditions. The city name is added to the search history for easy access.

* Current Weather Conditions: Displays the city name, date, weather icon, temperature, humidity, and wind speed.

* 5-Day Forecast: Provides a 5-day forecast for the selected city, including the date, weather icon, temperature, and humidity.

* Search History: Clicking on a city in the search history re-displays its current and future conditions.

## Screenshots

![Screenshot1](/assets/Images/Screenshot%202024-03-05%20at%2002.13.23.png)
![Screenshot2](/assets/Images/Screenshot%202024-03-05%20at%2002.13.37.png)
![Screenshot2](/assets/Images/Screenshot%202024-03-05%20at%2002.17.18.png)

## Technologies Used

* HTML: For creating the structure of the web application.

* CSS: For styling the application to ensure a visually appealing interface.

* JavaScript: For adding interactivity and dynamically updating the content of the webpage.

* jQuery: For simplifying HTML document traversal, event handling, and AJAX requests.

* OpenWeatherMap API: For retrieving weather data.

## Getting Started

* Prerequisites:

   * A modern web browser (e.g., Google Chrome, Firefox)
   * Text editor (e.g., Visual Studio Code, Sublime Text)
   * Basic knowledge of HTML, CSS, and JavaScript

## Setup

* Clone the repository to your local machine.

* Open the index.html file in your web browser.

* API Key: To use the OpenWeatherMap API, you will need to register for an API key. Follow the instructions on the OpenWeatherMap website to get your API key. 

* After obtaining your API key, replace {API key} in the base URL with your actual API key.

* Local Storage: The application uses localStorage to store the search history. This allows users to see previously searched cities without needing to re-enter them.

## License

This project is licensed under the MIT License.

## Contributions

Contributions are welcome! If you have suggestions for improvements or additional features, please feel free to submit a pull request or open an issue.

## Acknowledgements

* OpenWeatherMap for providing the weather data API.
* jQuery for simplifying JavaScript.
* The Full-Stack Blog for guidance on using API keys.