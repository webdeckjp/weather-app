window.addEventListener("load", () => {
  let long = "";
  let lat = "";
  let api = "";

  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let temperatureTimezone = document.querySelector(".location-timezone");

  document.querySelector("button").addEventListener("click", function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        long = position.coords.longitude;
        lat = position.coords.latitude;
        key = "fb80652993638ca76c845a8b90e17e71";
        api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;
      });

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const temperature = Math.floor(data.main.temp / 10);
          const summary = data.weather[0].description;
          const timezone = data.sys.country;

          temperatureDescription.innerText = summary;
          temperatureDegree.innerText = temperature;
          temperatureTimezone.innerText = timezone;
        });
    } else {
      document.querySelector("h1").innerText = "Couldn't get Location";
    }
  });
});
