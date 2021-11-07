import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import { AppError } from '../errors/AppError';
import { UserRepository } from '../repositories/UserRepository';

interface ICreateUserRequest {
  name: string
  username: string
  email: string
  password: string
}

class CreateUserService {
  async execute({
    name, username, email, password,
  }: ICreateUserRequest) {
    const usersRepository = getCustomRepository(UserRepository);

    if (!username && !email) {
      throw new AppError('Email or username incorrect');
    }

    const userAlreadyExists = await usersRepository.findOne({ email, username });

    if (userAlreadyExists) {
      throw new AppError('User already exists');
    }

    const passwordHash = await hash(password, 8);

    const user = usersRepository.create({
      name, username, email, password: passwordHash,
    });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };
