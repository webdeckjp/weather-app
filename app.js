window.addEventListener("load", () => {
  let long = "";
  let lat = "";
  let api = "";

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      key = "fb80652993638ca76c845a8b90e17e71";
      api = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;
    });

    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  } else {
    document.querySelector("h1").innerText = "Couldn't get Location";
  }
});
