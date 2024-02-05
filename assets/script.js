$(document).ready(function () {
    const API_Key = "58c03c765fc3561060028e9cde96da90";
    const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}.";
    const FORECAST_BASE_URL = "https://api.openweathermap.org/data/2.5/forecast?q=";
       
// Load search history from local storage
        let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        searchHistory.forEach(city => addToHistory(city));
   
    // Function to get current weather data
    function getCurrentWeather(city) {
       const currentWeatherURL = `${BASE_URL}weather?q=${city}&appid=${API_Key}&units=metric`;
       
       $.ajax({
         url: currentWeatherURL,
         method: "GET",
       }).then(function (response) {
         displayCurrentWeather(response);
       });
    }
   
    // Function to get 5-day forecast data
    function getForecast(city) {
       const forecastURL = `${BASE_URL}forecast?q=${city}&appid=${API_Key}&units=metric`;
       
       $.ajax({
         url: forecastURL,
         method: "GET",
       }).then(function (response) {
         displayForecast(response);
       });
    }
   
    // Function to display current weather information
    function displayCurrentWeather(weatherData) {
       // Logic to display current weather data in the #today section
    }
   
    // Function to display 5-day forecast information
    function displayForecast(forecastData) {
       // Logic to display 5-day forecast data in the #forecast section
    }
   
    // Function to add the searched city to the history list
    function addToHistory(city) {
       // Logic to add city to the #history list
    }
   
    // Event listener for the search form
    $("#search-form").submit(function (event) {
       event.preventDefault();
       const city = $("#search-input").val().trim();
   
       if (city !== "") {
         getCurrentWeather(city);
         getForecast(city);
         addToHistory(city);
       }
    });
   
    // Event listener for clicking on a city in the history list
    $("#history").on("click", "a", function (event) {
       event.preventDefault();
       const city = $(this).text();
       getCurrentWeather(city);
       getForecast(city);
    });
   });







// const API_KEY = "143ad771cb4e29b9e89cde60c972163e";
// const WEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q=";
// const FORECAST_BASE_URL = "https://api.openweathermap.org/data/2.5/forecast?q=";

// // Function to get current weather data
// function getCurrentWeather(city) {
//  const currentWeatherURL = `${WEATHER_BASE_URL}${city}&appid=${API_KEY}&units=metric`;

//  $.ajax({
//     url: currentWeatherURL,
//     method: "GET",
//  }).then(function (response) {
//     displayCurrentWeather(response);
//  });
// }

// // Function to get 5-day forecast data
// function getForecast(city) {
//  const forecastURL = `${FORECAST_BASE_URL}${city}&appid=${API_KEY}&units=metric`;

//  $.ajax({
//     url: forecastURL,
//     method: "GET",
//  }).then(function (response) {
//     displayForecast(response);
//  });
// }

// // $(document).ready(function () {
// //     // Replace "YOUR_API_KEY" with your actual OpenWeatherMap API key
// //     const API_KEY = "f2dc2a32462d8ccb788af0c44897a018";
// //     const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";
  
// //     // Event listener for the search form
// //     $("#search-form").submit(function (event) {
// //       event.preventDefault();
// //       const city = $("#search-input").val().trim();
  
// //       if (city !== "") {
// //         // Call functions to get and display weather data
// //         getCurrentWeather(city);
// //         getForecast(city);
  
// //         // Add the searched city to the history list
// //         addToHistory(city);
// //       }
// //     });
  
// //     // Function to get current weather data
// //     function getCurrentWeather(city) {
// //       const currentWeatherURL = `${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`;
  
// //       $.ajax({
// //         url: currentWeatherURL,
// //         method: "GET",
// //       }).then(function (response) {
// //         // Call a function to display current weather information
// //         displayCurrentWeather(response);
// //       });
// //     }
  
//     // Function to get 5-day forecast data
//     function getForecast(city) {
//       const forecastURL = `${BASE_URL}forecast?q=${city}&appid=${API_KEY}&units=metric`;
  
//       $.ajax({
//         url: forecastURL,
//         method: "GET",
//       }).then(function (response) {
//         // Call a function to display 5-day forecast information
//         displayForecast(response);
//       });
//     }
  
//     // Function to display current weather information
//     function displayCurrentWeather(weatherData) {
//       // Update the 'today' section in your HTML with the current weather information
//       // Use the provided elements and classes to display the necessary details
//       $("#today").html(`
//         <h2>${weatherData.name}, ${weatherData.sys.country}</h2>
//         <p>${dayjs().format("MMMM D, YYYY")}</p>
//         <p>Temperature: ${weatherData.main.temp}°C</p>
//         <p>Humidity: ${weatherData.main.humidity}%</p>
//         <p>Wind Speed: ${weatherData.wind.speed} m/s</p>
//       `);
//     }
  
//     // Function to display 5-day forecast information
//     function displayForecast(forecastData) {
//       // Update the 'forecast' section in your HTML with the 5-day forecast information
//       // Use the provided elements and classes to display the necessary details
//       $("#forecast").empty(); // Clear previous forecast data
  
//       for (let i = 0; i < forecastData.list.length; i += 8) {
//         const forecastItem = forecastData.list[i];
//         const forecastDate = dayjs(forecastItem.dt_txt).format("MMMM D, YYYY");
  
//         $("#forecast").append(`
//           <div class="col-md-2">
//             <h5>${forecastDate}</h5>
//             <p>Temperature: ${forecastItem.main.temp}°C</p>
//             <p>Humidity: ${forecastItem.main.humidity}%</p>
//           </div>
//         `);
//       }
//     }
  
//     // Function to add the searched city to the history list
//     function addToHistory(city) {
//       // Add the city to the 'history' list in your HTML
//       // Use the provided elements and classes to display the city
//       $("#history").prepend(`
//         <a href="#" class="list-group-item list-group-item-action">${city}</a>
//       `);
//     }
  
//     // Event listener for clicking on a city in the history list
//     $("#history").on("click", "a", function (event) {
//       event.preventDefault();
//       const city = $(this).text();
  
//       // Call functions to get and display weather data for the selected city
//       getCurrentWeather(city);
//       getForecast(city);
//     });
//   });