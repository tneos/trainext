import { body } from 'express-validator';
import { Activity } from '../enums/Activity';
import { Status } from '../enums/Status';

export const createValidator = [
  body('activities')
    .trim()
    .isIn([
      Activity.running,
      Activity.cycling,
      Activity.rowing,
      Activity.swimming,
      Activity.walking,
    ])
    .withMessage(
      'Activity can only be running, swimming, walking, rowing or cycling',
    ),
  body('date')
    .not()
    .isEmpty()
    .withMessage('The activity date is mandatory')
    .isString()
    .withMessage(
      'The date needs to be a valid date format',
    ),
  body('time')
    .not()
    .isEmpty()
    .withMessage('The activity time is mandatory')
    .isString()
    .withMessage(
      'The time needs to be a valid date format',
    ),
  body('status')
    .trim()
    .isIn([
      Status.completed,
      Status.planned,
      Status.started,
    ])
    .withMessage(
      'Status can only be started, planned or completed',
    ),
  body('duration')
    .not()
    .isEmpty()
    .withMessage('The activity duration is mandatory')
    .isString()
    .withMessage(
      'The duration needs to be a valid date format',
    ),
];
