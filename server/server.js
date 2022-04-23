require('dotenv').config();


const port = process.env.PORT_NUMBER;

const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');

const app = express();
app.use(express.json())
app.use(cookieSession({
    name:"app-session",
    secret:process.env.COOKIE_KEY,
    httpOnly: true
}))

mongoose.connect(process.env.DB_URL)
    .then((result) => app.listen(port))
    .catch((err) => console.error(err))



const journeyRouter = require('./routes/journey')
app.use('/journey', journeyRouter)

const authRouter = require('./routes/auth')
app.use('/auth', authRouter)


const userRouter = require('./routes/user')
app.use('/user', userRouter)
