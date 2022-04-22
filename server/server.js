require('dotenv').config();



const express = require('express');
const mongoose = require('mongoose');

const app = express();


const port = 3000;
app.use(express.json())
mongoose.connect(process.env.DB_URL)
    .then((result) => app.listen(port))
    .catch((err) => console.error(err))



const journeyRouter = require('./routes/journey')
app.use('/journey', journeyRouter)
