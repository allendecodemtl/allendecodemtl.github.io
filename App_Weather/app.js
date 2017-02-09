

(function() {
  var DARKSKY_API_URL = 'https://api.darksky.net/forecast/';
  var DARKSKY_API_KEY = 'c28893f8002931042f753dae308e8ce5'
  var CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

  var GOOGLE_MAPS_API_KEY = 'AIzaSyA3jyvSCVseqMKM7kYl4W-EzZUgPhleM8Q';
  var GOOGLE_MAPS_API_URL = 'https://maps.googleapis.com/maps/api/geocode/json';

  function getCurrentWeather(coords) {
    var url = `${CORS_PROXY}${DARKSKY_API_URL}${DARKSKY_API_KEY}/${coords.lat},${coords.lng}`;

    return (
      fetch(url)
      .then(response => response.json())
      .then(data => data.currently)
    );
  }

  function getCoordinatesForCity(cityName) {
    var url = `${GOOGLE_MAPS_API_URL}?address=${cityName}&key=${GOOGLE_MAPS_API_KEY}`;

    return (
      fetch(url)
      .then(response => response.json())
      .then(data => data.results[0].geometry.location)
    );
  }

  var app = document.querySelector('#app');
  var cityForm = app.querySelector('.city-form');
  var cityInput = cityForm.querySelector('.city-input');
  var getWeatherButton = cityForm.querySelector('.get-weather-button');
  var cityWeather = app.querySelector('.city-weather');

  cityForm.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the form from submitting

    var city = cityInput.value;

    getCoordinatesForCity(city)
    .then(getCurrentWeather)
    .then(function(weather) {
      cityWeather.innerText = 'Current temperature: ' + weather.temperature;
    })
  });
})();
