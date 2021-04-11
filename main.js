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
const weatherInput = document.querySelector("#weather-input");
const weatherButton = document.querySelector("#weather-button");

//queried three different elements where weather results will be displayed
const displayTemperature = document.querySelector(
  "#weather-display-temperature"
);
const displayWind = document.querySelector("#weather-display-wind");
const displayDescription = document.querySelector(
  "#weather-display-description"
);

//add event listener to button
weatherButton.addEventListener("click", () => {
  console.log("button pressed!");

  //queried URL
  const URL = `https://goweather.herokuapp.com/weather/${weatherInput.value}`;

  fetch(URL)
    .then((rawRes) => {
      console.log("Raw response success!");
      console.log("Response", rawRes);
      return rawRes.json();
    })
    .then((json) => {
      console.log("conversion complete");
      console.log("Json", json);

      displayTemperature.innerHTML = json.temperature;
      displayWind.innerHTML = json.wind;
      displayDescription.innerHTML = json.description;
    })
    .catch((error) => console.log(error));
});
