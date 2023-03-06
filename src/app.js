const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();
const port = process.env.PORT || 4000;

// Define paths for Express config
// const publicDirectoryPath = path.join(__dirname, "../public");
// const viewsPath = path.join(__dirname, "../templates/views");
// const partialsPath = path.join(__dirname, "../templates/partials");
const publicDirectoryPath = path.join(__dirname, "../build");

// Setup handlebars engine and views location
// app.set("view engine", "hbs");
// app.set("views", viewsPath);
// hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  // Allow CORS policy
  res.header("Access-Control-Allow-Origin", "*");
  res.render("index", {
    title: "Weather App",
    name: "Ashraf Samir",
  });
});

app.get("/about", (req, res) => {
  // Allow CORS policy
  res.header("Access-Control-Allow-Origin", "*");
  res.render("about", {
    title: "About Me",
    name: "Ashraf Samir",
  });
});

app.get("/help", (req, res) => {
  // Allow CORS policy
  res.header("Access-Control-Allow-Origin", "*");
  res.render("help", {
    title: "Help",
    name: "Ashraf Samir",
    message: "This is some helpful text.",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address",
    });
  }
  // Allow CORS policy
  res.header("Access-Control-Allow-Origin", "*");

  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error });
      }
      forecast(latitude, longitude, (error, data) => {
        if (error) return res.send({ error });
        res.send({
          forecast: data.forecastData,
          weather_descriptions: data.weather_descriptions,
          temperature: data.temperature,
          feelslike: data.feelslike,
          humidity: data.humidity,
          weather_icons: data.weather_icons,
          location,
          address: req.query.address,
        });
      });
    }
  );
});

app.get("/help/*", (req, res) => {
  // Allow CORS policy
  res.header("Access-Control-Allow-Origin", "*");
  res.render("404", {
    title: "404",
    name: "Ashraf Samir",
    errorMessage: "Help article not found.",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Ashraf Samir",
    errorMessage: "Page not found.",
  });
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
