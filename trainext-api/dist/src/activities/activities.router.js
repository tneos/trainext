"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activitiesRouter = void 0;
const express_1 = require("express");
const activities_controller_1 = require("./activities.controller");
const activities_validator_1 = require("./activities.validator");
exports.activitiesRouter = (0, express_1.Router)();
// Create a default route
exports.activitiesRouter.get('/activities', activities_controller_1.activityController.getAll);
// Post session endpoint
exports.activitiesRouter.post('/activities', activities_validator_1.createValidator, activities_controller_1.activityController.create);
// Update session endpoint
exports.activitiesRouter.put('/activities', activities_validator_1.updateValidator, activities_controller_1.activityController.update);
