import express, {
  Express,
  Request,
  Response,
} from 'express';

import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import { DataSource } from 'typeorm';
import { Activities } from './src/activities/activities.entity';

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
  host: 'localhost',
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  entities: [Activities],
  synchronize: true,
});

// Define server port
const port = process.env.PORT;

// Create a default route
app.get('/', (req: Request, res: Response) => {
  res.send('Express and Typescript server route created');
});

// Initialize typeORM
AppDataSource.initialize()
  .then(() => {
    // Start listening to requests on the defined port
    app.listen(port);
    console.log('Data source has been initialized..');
  })
  .catch((err) => console.log(err));
