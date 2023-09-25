const express = require('express');
const mongoose = require('mongoose');

mongoose
    .connect("uri", { useNewUrlParser: true })
    .then(() => {
        const app = express();

        app.listen(5000, () => {
            console.log("Server has started!");
        })
    })