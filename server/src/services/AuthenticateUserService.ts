import { compare } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import { AppError } from '../errors/AppError';
import { UserRepository } from '../repositories/UserRepository';

interface IAuthenticateUserRequest {
  email: string,
  password: string
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateUserRequest) {
    const usersRepository = getCustomRepository(UserRepository);

    const user = await usersRepository.findOne({ email });

    if (!user) {
      throw new AppError('Email or password incorrect', 401);
    }

    const matchPassword = await compare(password, user.password);

    if (!matchPassword) {
      throw new AppError('Email or password incorrect', 401);
    }

    const token = sign({
      email: user.email,
    }, process.env.SECRET, {
      subject: user.id,
      expiresIn: '1d',
    });

    return token;
  }
}

export { AuthenticateUserService };
