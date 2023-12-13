import { AppDataSource } from '../../index';
import { Session } from './activities.entity';
import {
  instanceToPlain,
  plainToInstance,
} from 'class-transformer';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { UpdateResult } from 'typeorm';

class ActivitiesController {
  // GET ALL ACTIVITIES METHOD
  public async getAll(
    req: Request,
    res: Response,
  ): Promise<Response> {
    // Declare variable that holds all activities
    let allActivities: Session[];

    // Fetch all activities using the repository
    try {
      allActivities = await AppDataSource.getRepository(
        Session,
      ).find({
        order: {
          date: 'ASC',
        },
      });

      // Convert activities instance to an array of objects
      allActivities = instanceToPlain(
        allActivities,
      ) as Session[];
      console.log(allActivities);
      return res.json(allActivities).status(200);
    } catch (_errors) {
      return res
        .json({ error: 'Internal server error' })
        .status(500);
    }
  }

  // POST ACTIVITY METHOD
  public async create(
    req: Request,
    res: Response,
  ): Promise<Response> {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array() });
    }

    // Create a new instance of an activity
    const newSession = new Session();

    // Add the required properties to the Activity object
    newSession.activity = req.body.activity;
    newSession.date = req.body.date;
    newSession.time = req.body.time;
    newSession.status = req.body.status;
    newSession.duration = req.body.duration;

    // Add new activity to database
    let createdActivity: Session;

    try {
      createdActivity =
        await AppDataSource.getRepository(Session).save(
          newSession,
        );

      // Create activity instance to plain object
      createdActivity = instanceToPlain(
        createdActivity,
      ) as Session;

      return res.json(createdActivity).status(201);
    } catch (errors) {
      return res
        .json({ error: 'Internal server error' })
        .status(500);
    }
  }

  //UPDATE ACTIVITY METHOD
  public async update(
    req: Request,
    res: Response,
  ): Promise<Response> {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array() });
    }

    // Try to find if activity exists
    let activity: Session | null;

    try {
      activity = await AppDataSource.getRepository(
        Session,
      ).findOne({
        where: { id: req.body.id },
      });
    } catch (errors) {
      return res
        .json({ error: 'Internal server error' })
        .status(500);
    }

    // Return 400 if activity is null
    if (!activity) {
      return res.status(404).json({
        error:
          'The activity with given ID does not exist..',
      });
    }

    // Declare a variable for updated Activity
    let updatedSession: UpdateResult;
    // Update activity
    try {
      updatedSession = await AppDataSource.getRepository(
        Session,
      ).update(
        req.body.id,
        plainToInstance(Session, {
          status: req.body.status,
        }),
      );

      // Convert updated instance to an object
      updatedSession = instanceToPlain(
        updatedSession,
      ) as UpdateResult;

      return res.json(updatedSession).status(200);
    } catch (errors) {
      return res
        .json({ error: 'Internal server error' })
        .status(500);
    }
  }
}

export const activityController =
  new ActivitiesController();
