import { Router } from "express";
import { UserController } from "./controller/UserController";
import { ActivityController } from "./controller/ActivityController";
import { CourseUnitController } from "./controller/CourseUnitController";

const userController = new UserController();
const activityController = new ActivityController();
const courseUnitController = new CourseUnitController();
const routes = Router();

routes.post("/user", userController.create);
routes.post("/activity", activityController.create);
routes.post("/courseunit", courseUnitController.create);

export default routes;
