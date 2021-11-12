import { getRepository } from "typeorm";
import { Activity } from "../models/Activity";

interface IUserId {
  id?: string;
}

class GetActivityService {
  public async execute({ id }: IUserId) {
    console.log(`Id do usuário da atividade: ${id}`)
    const activityRepository = getRepository(Activity);
    const activities = activityRepository.find({relations: ["course_unit"]});
    if (!activities) {
      return {
        message: "Activities not found"
      };
    }
    return activities;
  }
}

export { GetActivityService };
