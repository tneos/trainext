"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateValidator = exports.createValidator = void 0;
const express_validator_1 = require("express-validator");
const Activity_1 = require("../enums/Activity");
const Status_1 = require("../enums/Status");
exports.createValidator = [
    (0, express_validator_1.body)('activity')
        .trim()
        .isIn([
        Activity_1.Activity.running,
        Activity_1.Activity.cycling,
        Activity_1.Activity.rowing,
        Activity_1.Activity.swimming,
        Activity_1.Activity.walking,
    ])
        .withMessage('Activity can only be running, swimming, walking, rowing or cycling'),
    (0, express_validator_1.body)('date')
        .not()
        .isEmpty()
        .withMessage('The activity date is mandatory')
        .isString()
        .withMessage('The date needs to be a valid date format'),
    (0, express_validator_1.body)('time')
        .not()
        .isEmpty()
        .withMessage('The activity time is mandatory')
        .isString()
        .withMessage('The time needs to be a valid date format'),
    (0, express_validator_1.body)('status')
        .trim()
        .isIn([
        Status_1.Status.completed,
        Status_1.Status.planned,
        Status_1.Status.started,
    ])
        .withMessage('Status can only be started, planned or completed'),
    (0, express_validator_1.body)('duration')
        .not()
        .isEmpty()
        .withMessage('The activity duration is mandatory')
        .isString()
        .withMessage('The duration needs to be a valid date format'),
];
exports.updateValidator = [
    (0, express_validator_1.body)('id')
        .not()
        .isEmpty()
        .withMessage('The activity id is mandatory')
        .trim()
        .isString()
        .withMessage('ID needs to be a valid uuid format'),
    (0, express_validator_1.body)('status')
        .trim()
        .isIn([
        Status_1.Status.completed,
        Status_1.Status.planned,
        Status_1.Status.started,
    ])
        .withMessage('Status can only be started, planned or completed'),
];
