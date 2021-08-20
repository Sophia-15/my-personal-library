import { getCustomRepository } from 'typeorm';
import { AppError } from '../errors/AppError';
import { PostRepository } from '../repositories/PostRepository';

class ListUserCreatedPostsService {
  async execute(user_id: string) {
    const postsRepository = getCustomRepository(PostRepository);

    const posts = await postsRepository.find({
      where: {
        user_sender: user_id,
      },
    });

    if (!posts) {
      throw new AppError('Could not find what you were looking for!', 404);
    }

    return posts;
  }
}

export { ListUserCreatedPostsService };
