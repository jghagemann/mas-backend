import { Router } from "express";
import { UserController } from "./controller/UserController";
import { ActivityController } from "./controller/ActivityController";
import { CourseUnitController } from "./controller/CourseUnitController";
import { AuthenticateController } from "./controller/AuthenticateController";
import authenticated from "./middlewares/authenticated"

const userController = new UserController();
const activityController = new ActivityController();
const courseUnitController = new CourseUnitController();
const authenticateController = new AuthenticateController();
const routes = Router();

routes.post("/auth", authenticateController.create)

routes.get("/user", authenticated, userController.show)
routes.get("/activity", authenticated, activityController.show)
routes.get("/courseunit", authenticated, courseUnitController.show)



routes.post("/user", userController.create);
routes.post("/activity", authenticated, activityController.create);
routes.post("/courseunit", authenticated, courseUnitController.create);

export default routes;
