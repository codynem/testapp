// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const PORT = process.env.port;

app.listen(PORT, () => {
    console.log(`The app is running on ${PORT}`);
});

// GET Method
app.get('/getRecentWeatherData', (req, res) => {
    res.send(JSON.stringify(projectData));
});

// POST Method
app.post('/saveData', (req, res) => {
    console.log(req.body);
    responseData = req.body;
    let newWeatherData = {
        temperature: responseData.temp,
        date: responseData.date,
        userResponse: responseData.userResponse
    }
    Object.assign(projectData, newWeatherData);
    res.send(projectData);
});
