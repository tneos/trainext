import express, {Express, Request, Response} from "express";

// Instantiate express app
const app: Express = express();

// Define server port
const port = 3200;

// Create a default route
app.get("/", (req: Request, res: Response) => {
  res.send("Express and Typescript server route created");
});

// Start listening to requests on the defined port
app.listen(port);
