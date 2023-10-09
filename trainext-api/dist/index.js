"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Instantiate express app
const app = (0, express_1.default)();
// Define server port
const port = 3200;
// Create a default route
app.get("/", (req, res) => {
    res.send("Express and Typescript server route created");
});
// Start listening to requests on the defined port
app.listen(port);
