const express = require('express');
const cors = require('cors');
const config = require('./config');
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/index.routes');


const app = express();

const port = config.port;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./models/index.models');

app.use('/', indexRoutes);


app.listen(port, () => {
    console.log('Server running on port 3000');
});

