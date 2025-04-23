"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const typeorm_1 = require("typeorm");
const activities_entity_1 = require("./src/activities/activities.entity");
const activities_router_1 = require("./src/activities/activities.router");
// Instantiate express app
const app = (0, express_1.default)();
dotenv_1.default.config();
// Parse request body
app.use(body_parser_1.default.json());
// Use of CORS install types
app.use((0, cors_1.default)());
// Create Database connection -- TODO conditionally set synchronize property(true for development mode)
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    entities: [activities_entity_1.Session],
    synchronize: true,
});
// Define server port
const port = process.env.PORT || 3100;
// Initialize typeORM
exports.AppDataSource.initialize()
    .then(() => {
    // Start listening to requests on the defined port
    app.listen(port);
    console.log('Data source has been initialized');
})
    .catch((err) => console.log(err));
// Routes
app.use('/', activities_router_1.activitiesRouter);
