const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=2cafe28d7631e3e6ca68e0a2c408b977&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      console.log(
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " It feels like " +
          body.current.feelslike +
          " degrees out. The humidity is " +
          body.current.humidity +
          "%."
      );
      let data = {
        weather_descriptions: body.current.weather_descriptions[0],
        temperature: body.current.temperature,
        feelslike: body.current.feelslike,
        humidity: body.current.humidity,
        weather_icons: body.current.weather_icons[0],
        forecastData:
          body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " It feels like " +
          body.current.feelslike +
          " degrees out. The humidity is " +
          body.current.humidity +
          "%.",
      };
      // let oldValue =
      //   body.current.weather_descriptions[0] +
      //   ". It is currently " +
      //   body.current.temperature +
      //   " It feels like " +
      //   body.current.feelslike +
      //   " degrees out. The humidity is " +
      //   body.current.humidity +
      //   "%.";
      callback(undefined, data);
    }
  });
};

module.exports = forecast;
