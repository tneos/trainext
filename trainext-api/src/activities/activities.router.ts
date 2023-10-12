import { Request, Response, Router } from 'express';
import { ActivitiesController } from './activities.controller';

export const activitiesRouter: Router = Router();

// Create a default route
activitiesRouter.get(
  '/activities',
  (req: Request, res: Response) => {
    const activitiesController = new ActivitiesController();
    activitiesController.getAll();
  },
);
