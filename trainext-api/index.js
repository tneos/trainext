const express = require("express");

// Instantiate express app
const app = express();

// Define server port
const port = 3200;

// Create a default route
app.get("/", (req, res) => {
  res.send("Express and Typescript server route created");
});

// Start listening to requests on the defined port
app.listen(port);
