import { getRepository } from "typeorm";
import { Activity } from "../models/Activity";

interface IUserId {
  id?: string;
}

class GetActivityService {
  public async execute({ id }: IUserId) {
    const activityRepository = getRepository(Activity);
    const activities = activityRepository.find();
    if (!activities) {
      return {
        message: "Activities not found"
      };
    }
    return activities;
  }
}

export { GetActivityService };
