const express = require('express');
const bodyParser = require('body-parser');
const weatherController = require(__dirname + '/controllers/weather_controller.js');
console.log(__dirname)
const app = express();
const port = 3005;

app.use(bodyParser.json());

const baseURL = "/api/weather";

app.use( express.static( __dirname + "/build") );

app.get(baseURL, weatherController.read);
app.post(baseURL, weatherController.create);
app.put(`${baseURL}/:id`, weatherController.update);
app.delete(`${baseURL}/:id`, weatherController.delete);



app.listen( port, () => { console.log(`Server listening on port ${port}`); } );
