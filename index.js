const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const andrewRoute = require('./routes/andrew');
const seanRoute = require('./routes/sean');

mongoose
    .connect(process.env.DB_URI, { useNewUrlParser: true })
    .then(() => {
        const app = express();
        app.use(express.json());
        app.use("/andrew", andrewRoute);
        app.use("/sean", seanRoute);

        app.get("/", async (req, res) => {
            res.send("Home page.");
        });
        
        app.listen(process.env.PORT, () => {
            console.log("Successfully connected to database!");
        })
    })