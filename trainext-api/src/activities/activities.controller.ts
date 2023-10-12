import { AppDataSource } from '../../index';
import { Session } from './activities.entity';
import { instanceToPlain } from 'class-transformer';

export class ActivitiesController {
  constructor(
    private activitiesRepository = AppDataSource.getRepository(
      Session,
    ),
  ) {}

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  public async getAll(): Promise<Session[]> {
    // Declare variable that holds all activities
    let allActivities: Session[];

    // Fetch all activities using the repository
    try {
      allActivities = await this.activitiesRepository.find({
        order: {
          date: 'ASC',
        },
      });

      // Convert activities instance to an array of objects
      allActivities = instanceToPlain(
        allActivities,
      ) as Session[];

      return allActivities;
    } catch (errors) {
      console.log(errors);
    }
  }
}
