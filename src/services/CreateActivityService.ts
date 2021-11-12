import { getRepository } from "typeorm";
import { Activity } from "../models/Activity";

interface IActivityData {
  name: string;
  activity_date: string;
  courseUnitId: string;
  grade: number;
}

class CreateActivityService {
  public async execute({name, activity_date, grade, courseUnitId}: IActivityData) {
    const activityRepository = getRepository(Activity);
    const checkActivityExists = await activityRepository.findOne({ name, courseUnitId });
    if (checkActivityExists) {
      return {
        error: "Activity name already exists"
      }    
    }
    const activity = activityRepository.create({
      name,
      activity_date,
      courseUnitId,
      grade
    }); 
    await activityRepository.save(activity);
    return activity;
  }
}

export { CreateActivityService };
