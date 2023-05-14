const express = require('express');
const cors = require('cors');
const config = require('./config');
const bodyParser = require('body-parser');
const db = require('./models/index.models');
const indexRoutes = require('./routes/index.routes');


const app = express();

const port = config.port;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRoutes);


app.listen(port, () => {
    console.log('Server running on port 3000');
});

