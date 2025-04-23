"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activityController = void 0;
const index_1 = require("../../index");
const activities_entity_1 = require("./activities.entity");
const class_transformer_1 = require("class-transformer");
const express_validator_1 = require("express-validator");
class ActivitiesController {
    // GET ALL ACTIVITIES METHOD
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // Declare variable that holds all activities
            let allActivities;
            // Fetch all activities using the repository
            try {
                allActivities = yield index_1.AppDataSource.getRepository(activities_entity_1.Session).find({
                    order: {
                        date: 'ASC',
                    },
                });
                // Convert activities instance to an array of objects
                allActivities = (0, class_transformer_1.instanceToPlain)(allActivities);
                console.log(allActivities);
                return res.json(allActivities).status(200);
            }
            catch (_errors) {
                return res
                    .json({ error: 'Internal server error' })
                    .status(500);
            }
        });
    }
    // POST ACTIVITY METHOD
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                return res
                    .status(400)
                    .json({ errors: errors.array() });
            }
            // Create a new instance of an activity
            const newSession = new activities_entity_1.Session();
            // Add the required properties to the Activity object
            newSession.activity = req.body.activity;
            newSession.date = req.body.date;
            newSession.time = req.body.time;
            newSession.status = req.body.status;
            newSession.duration = req.body.duration;
            // Add new activity to database
            let createdActivity;
            try {
                createdActivity =
                    yield index_1.AppDataSource.getRepository(activities_entity_1.Session).save(newSession);
                // Create activity instance to plain object
                createdActivity = (0, class_transformer_1.instanceToPlain)(createdActivity);
                return res.json(createdActivity).status(201);
            }
            catch (errors) {
                return res
                    .json({ error: 'Internal server error' })
                    .status(500);
            }
        });
    }
    //UPDATE ACTIVITY METHOD
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                return res
                    .status(400)
                    .json({ errors: errors.array() });
            }
            // Try to find if activity exists
            let activity;
            try {
                activity = yield index_1.AppDataSource.getRepository(activities_entity_1.Session).findOne({
                    where: { id: req.body.id },
                });
            }
            catch (errors) {
                return res
                    .json({ error: 'Internal server error' })
                    .status(500);
            }
            // Return 400 if activity is null
            if (!activity) {
                return res.status(404).json({
                    error: 'The activity with given ID does not exist..',
                });
            }
            // Declare a variable for updated Activity
            let updatedSession;
            // Update activity
            try {
                updatedSession = yield index_1.AppDataSource.getRepository(activities_entity_1.Session).update(req.body.id, (0, class_transformer_1.plainToInstance)(activities_entity_1.Session, {
                    status: req.body.status,
                }));
                // Convert updated instance to an object
                updatedSession = (0, class_transformer_1.instanceToPlain)(updatedSession);
                return res.json(updatedSession).status(200);
            }
            catch (errors) {
                return res
                    .json({ error: 'Internal server error' })
                    .status(500);
            }
        });
    }
}
exports.activityController = new ActivitiesController();
