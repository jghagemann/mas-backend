import { getRepository } from "typeorm";
import { User } from "../models/User";



class GetUserService {
  public async execute() {
    const usersRepository = getRepository(User);
    const users = usersRepository.find();
    if (!users) {
      return {
        message: "Users not found"
      };
    }
    return users;
  }
}

export { GetUserService };
