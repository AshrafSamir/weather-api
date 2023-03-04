# Weather API

This is a simple weather API that provides current weather information for any location in the world. It uses node.js and express.js to create a RESTful web service that can handle GET requests with query parameters. The backend also provides a simple user interface for trying out the API.

## Developer

This API was developed by Ashraf Samir, a web developer who loves to create useful and fun applications with node.js and express.js.

## Usage

To use this API, you need to have node.js and express.js installed on your machine.

To run this API locally, follow these steps:

- Clone or download this repository to your machine.
- Navigate to the project folder and run `npm install` to install all the dependencies.
- Run `nodemon src/app.js -e js,hbs` to start the server on port 3000.
- Open your browser or any HTTP client and make a GET request to `http://localhost:3000/weather?address=cairo`.
- You will get a JSON response with the current weather information for your city.

## Example

Here is an example of a GET request and response for London:

Request: `http://localhost:3000/weather?address=cairo`

Response:

```json
{
  "forecast": "Sunny. It is currently 77 It feels like 75 degrees out. The humidity is 39%.",
  "location": "Cairo, Cairo, Egypt",
  "address": "cairo"
}
```
