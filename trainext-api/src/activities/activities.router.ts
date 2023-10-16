import { Router } from 'express';
import { activityController } from './activities.controller';
import {
  createValidator,
  updateValidator,
} from './activities.validator';

export const activitiesRouter: Router = Router();

// Create a default route
activitiesRouter.get(
  '/activities',
  activityController.getAll,
);

// Post session endpoint
activitiesRouter.post(
  '/activities',
  createValidator,
  activityController.create,
);

// Update session endpoint
activitiesRouter.put(
  '/activities',
  updateValidator,
  activityController.update,
);
