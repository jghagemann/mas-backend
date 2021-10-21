import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateController {
  async create(request: Request, response: Response) {
    const authData = request.body;
    const authenticateUser = new AuthenticateUserService();
    const auth = await authenticateUser.execute(authData);
    return response.json(auth);
  }
}

export { AuthenticateController };
