import { getCustomRepository } from 'typeorm';
import { AppError } from '../errors/AppError';
import { UserRepository } from '../repositories/UserRepository';

class ListUserInfoService {
  async execute(user_id: string) {
    const usersRepository = getCustomRepository(UserRepository);

    const user = await usersRepository.findOne(user_id);

    if (!user) {
      throw new AppError('Could not find what you were looking for!', 404);
    }

    return user;
  }
}

export { ListUserInfoService };
