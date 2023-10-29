const express = require('express');
const cors = require("cors");
const morgan = require("morgan")
//Inicializa el servidor de express
const app = express()
const router = require('./routes/indexRouter');

// Middlewares
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

// MIDDLEWARE TO THE ROUTER

app.use("/", router);


module.exports = app