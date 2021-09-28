import { Router, Request, Response } from "express";

const routes = Router();

routes.get("/", (request: Request, response: Response) => {
  response.json({
    message: "Hello World",
  });
});

routes.get("/user/:id", (request: Request, response: Response) => {
  const { id } = request.params;
  response.json({
    userId: id,
  });
});

routes.get("/users/", (request: Request, response: Response) => {
  const { name } = request.query;
  response.json({
    name,
  });
});

routes.post("/user", (request: Request, response: Response) => {
  const { name, email, password } = request.body;
  const user = {
    name,
    email,
    password,
  };
  return response.json(user);
});

export default routes;
