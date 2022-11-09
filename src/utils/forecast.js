const request = require("request");
require("dotenv");

const forecast = (latitude, longitude, callback) => {
  const url =
    `http://api.weatherstack.com/current?access_key=${process.env.WEATHERSTACK_API}&query=${latitude},${longitude}`;
    request({ url, json: true }, (error, { body }) => {
      if (error) {
        callback("Unable to connect to the weather service!", undefined);
      } else if (body.error) {
        callback("Unable to find the location", undefined);
      } else {
        callback(
          undefined,
          "It is currently " +
            body.current.temperature +
            " degrees out and it feels like " +
            body.current.feelslike +
            " degrees." +
            `There is a ${body.current.precip}% chance of precipitation.`
        );
      }
    });
};

module.exports = forecast;
