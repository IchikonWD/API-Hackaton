const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const helmet = require('helmet');
const cors = require('cors');

const mongoDBConnect = require('./db/mongo.db');
const swaggerRoutes = require('./routes/swagger.route');
const fileRoutes = require('./routes/file.route');

//* Config
const app = express();
app.use(express.json());
dotenv.config();
mongoDBConnect();

const PORT = process.env.PORT || 5000;
const env = process.env.NODE_ENV || 'development';

//* Routes
const apiRoute = `/api/${env}/v1/`;
app.use(apiRoute, fileRoutes);

//*  Server Environments
switch (process.env.NODE_ENV) {
  case 'development':
    app.use(morgan('dev'));
    app.use(cors());
    app.use(apiRoute, swaggerRoutes);
    app.get(apiRoute, (req, res) => {
      res.status(200).json({
        status: 'Ok',
        message: '',
      });
    });
    break;
  case 'production':
    app.use(helmet());
    app.use(cors());
    app.get(apiRoute, (req, res) => {
      res.status(200).json({
        status: 'Ok',
        message: 'Welcome to the API',
      });
    });
    break;
}

//* Server Info
app.listen(PORT, () => {
  console.log(
    colors.yellow.bold(
      `🤖 Api running on port: ${PORT.red.bold} in ${process.env.NODE_ENV.red.bold} mode`
    )
  );
});
