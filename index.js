const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose
    .connect(process.env.DB_URI, { useNewUrlParser: true })
    .then(() => {
        const app = express();

        app.listen(3333, () => {
            console.log("Successfully connected to database!");
        })
    })