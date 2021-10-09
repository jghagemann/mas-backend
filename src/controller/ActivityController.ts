import { Request, Response } from "express";
import { CreateActivityService } from "../services/CreateActivityService";

class ActivityController {
  async create(request: Request, response: Response) {
    const activityData = request.body;
    const createActivity = new CreateActivityService();
    const activity = await createActivity.execute(activityData);
    return response.json(activity);
  }
}

export { ActivityController };
