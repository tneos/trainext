import express, { Express } from 'express';

import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import { DataSource } from 'typeorm';
import { Session } from './src/activities/activities.entity';
import { activitiesRouter } from './src/activities/activities.router';

// Instantiate express app
const app: Express = express();
dotenv.config();

// Parse request body
app.use(bodyParser.json());

// Use of CORS install types
app.use(cors());

// Create Database connection -- TODO conditionally set synchronize property(true for development mode)
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_ADDON_HOST,
  port: 3306,
  username: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  database: process.env.MYSQL_ADDON_DB,
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
const port = 3306;

// Initialize typeORM
AppDataSource.initialize()
  .then(() => {
    // Start listening to requests on the defined port
    app.listen(port);
    console.log('Data source has been initialized');
  })
  .catch((err) => console.log(err));

// Routes
app.use('/', activitiesRouter);
