import { getRepository } from "typeorm";
import { User } from "../models/User";
import { hash } from "bcryptjs";

interface IUserData {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute(data: IUserData) {
    const { name, email, password } = data;
    const usersRepository = getRepository(User);
    const checkUserExists = await usersRepository.findOne({ email });
    if (checkUserExists) {
      return {
        error: "Email address already exists"
      }
    }
    const hashedPassword = await hash(password, 8);
    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });
    await usersRepository.save(user);
    return user;
  }
}

export { CreateUserService };
