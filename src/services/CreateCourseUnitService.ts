import { getRepository } from "typeorm";
import { CourseUnit } from "../models/CourseUnit";

interface ICourseUnitData {
  name: string;
  description: string;
}

class CreateCourseUnitService {
  public async execute(data: ICourseUnitData) {
    const { name, description } = data;
    const courseUnitRepository = getRepository(CourseUnit);
    const checkCourseUnitExists = await courseUnitRepository.findOne({ name });
    if (checkCourseUnitExists) {
      return {
        error: "Course Unit name already exists"
      }
    }
    const courseUnit = courseUnitRepository.create({ name, description })
    await courseUnitRepository.save(courseUnit);
    return courseUnit;
  }
}

export { CreateCourseUnitService };
