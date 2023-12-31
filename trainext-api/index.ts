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
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  entities: [Session],
  synchronize: true,
});

// Define server port
const port = process.env.PORT || 3100;

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
