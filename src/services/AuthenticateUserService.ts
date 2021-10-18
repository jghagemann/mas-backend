import { compare } from "bcryptjs";
import { getRepository } from "typeorm";
import { User } from "../models/User";
import authConfig from "../config/auth";
import { sign } from "jsonwebtoken";

interface IAuthData {
  email: string;
  password: string;
}

class AuthenticateUserService {
  public async execute(data: IAuthData): Promise<String | {}> {
    const { email, password } = data;
    const usersRepository = getRepository(User);
    const user = await usersRepository.findOne({ email });
    if (!user) {
      return {
        error: "User not found",
      };
    }
    const comparePassword = await compare(password, user.password);
    if (!comparePassword) {
      return {
        error: "Incorrect password",
      };
    }
    const { privateKey, expiresIn } = authConfig.jwt;
    const token = sign({"role":"user"},privateKey,{
      algorithm: "RS256",
      subject: user.id,
      expiresIn
  });
    return {auth: token};
  }
}

export { AuthenticateUserService };
