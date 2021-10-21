import { getRepository } from "typeorm";
import { User } from "../models/User";

interface IUserId {
  id?: string;
}

class GetUserService {
  public async execute(data: IUserId): Promise<User | {}> {
    const { id } = data;
    const usersRepository = getRepository(User);
    const user = await usersRepository.findOne({ id });
    if (!user) {
      return {
        message: "Users not found",
      };
    }
    return {
      id: user.id,
      name: user.name,
      email: user.email
    };
  }
}

export { GetUserService };
