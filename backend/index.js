const express = require('express');
const mongoose = require('mongoose');
// const cors = require('cors');

require('dotenv').config();

const andrewRoute = require('./routes/andrew');
const seanRoute = require('./routes/sean');
const pabloRoute = require('./routes/pablo');

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true }).then(() => {
  const app = express();

  // app.use(
  //   cors({
  //     // origin: 'http://localhost:3000',
  //     origin: 'https://gpt-billsplitter.com:3000',
  //     optionsSuccessStatus: 200,
  //   })
  // );

  app.use(express.json());
  app.use('/andrew', andrewRoute);
  app.use('/sean', seanRoute);
  app.use('/pablo', pabloRoute);
  app.listen(process.env.PORT, () => {
    console.log('Successfully connected to database!');
  });
});
