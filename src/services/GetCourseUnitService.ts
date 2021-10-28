import { getRepository } from "typeorm";
import { CourseUnit } from "../models/CourseUnit";

interface IUserId {
  id?: string;
}

class GetCourseUnitService {
  public async execute({ id }: IUserId) {
    const courseUnitRepository = getRepository(CourseUnit);
    const courseUnits = courseUnitRepository.find();
    if (!courseUnits) {
      return {
        message: "Course Units not found"
      };
    }
    return courseUnits;
  }
}

export { GetCourseUnitService };
