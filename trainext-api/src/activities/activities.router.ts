import { Request, Response, Router } from 'express';
import { ActivitiesController } from './activities.controller';

export const activitiesRouter: Router = Router();

// Create a default route
activitiesRouter.get(
  '/activities',
  async (req: Request, res: Response) => {
    const activitiesController = new ActivitiesController();
    const allActivities =
      await activitiesController.getAll();
    res.json(allActivities).status(200);
  },
);

// Post session endpoint
activitiesRouter.post(
  '/activities',
  async (req: Request, res: Response) => {},
);
