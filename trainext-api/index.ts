import express, { Express } from 'express';

import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import { DataSource } from 'typeorm';
import { Session } from './src/activities/activities.entity';
import { activitiesRouter } from './src/activities/activities.router';

const mysql = require('mysql2');

// Instantiate express app
const app: Express = express();
dotenv.config();

// Parse request body
app.use(bodyParser.json());

// Use of CORS install types
app.use(cors());
app.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.send('API is running..');
});

const con = mysql.createConnection({
  host: process.env.MYSQL_ADDON_HOST,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  database: process.env.MYSQL_ADDON_DB,
});

// Create Database connection -- TODO conditionally set synchronize property(true for development mode)
export const AppDataSource =
  // process.env.DB_HOST === '127.0.0.1'
  // ?
  new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: 3200,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    entities: [Session],
    synchronize: true,
  });
//   :
// new DataSource({
//   type: 'mysql',
//   url: process.env.MYSQL__ADDON_URI,
//   logging: false,
//   port: 3306,
//   username: process.env.MYSQL_ADDON_USER,
//   password: process.env.MYSQL_ADDON_PASSWORD,
//   database: process.env.MYSQL_ADDON_DB,
//   entities: [Session],
//   synchronize: false,
//   extra: {
//     ssl: {
//       rejectUnauthorized: false,
//     },
//   },
// });

// Define server port
const port = process.env.MYSQL_ADDON_PORT;

app.listen(port, () =>
  console.log(`Database is listening on port :${port}`),
);

// Initialize typeORM
AppDataSource.initialize()
  .then(() => {
    // Start listening to requests on the defined port
    app.listen(port);
    console.log('Data source has been initialized');
  })
  .catch((err) => console.log(err));

con.connect(function (err: any) {
  if (err) throw err;
  console.log('Connected..');
});

// Routes
app.use('/', activitiesRouter);
