//queried random button gen
const randomButton = document.querySelector("#random-button");
const randomImage = document.querySelector("#random-image");
//added event listener to button
randomButton.addEventListener("click", () => {
  console.log("Button pressed");

  //queried url that will be used with api request
  const URL = "https://dog.ceo/api/breeds/image/random";
  fetch(URL)
    .then((res) => {
      console.log("Response success");
      console.log("Response", res);
      return res.json();
    })
    .then((json) => {
      console.log("response object acquired");
      console.log("Json", json);

      randomImage.src = json.message;
    })
    .catch((error) => console.log(error));
});

//Weather app

//queried weather submit button and text input
const weatherButton = document.querySelector("#weather-button");
const weatherInput = document.querySelector("#weather-input");
const weatherOutputTemperature = document.querySelector(
  "#weather-display-temperature"
);
const weatherOutputWind = document.querySelector("#weather-display-wind");
const weatherOutputDescription = document.querySelector(
  "#weather-display-description"
);

weatherButton.addEventListener("click", () => {
  console.log("Button pressed!");

  const URL = `https://goweather.herokuapp.com/weather/${weatherInput.value}`;
  fetch(URL)
    .then((rawRes) => {
      console.log("Response Success");
      console.log("Response", rawRes);
      return rawRes.json();
    })
    .then((json) => {
      console.log("Json object received");
      console.log("Json", json);

      weatherOutputTemperature.innerHTML = json.temperature;
      weatherOutputWind.innerHTML = json.wind;
      weatherOutputDescription.innerHTML = json.description;
    })
    .catch((error) => console.log(error));
});
