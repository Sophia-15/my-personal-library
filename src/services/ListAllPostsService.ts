import { getCustomRepository } from 'typeorm';
import { AppError } from '../errors/AppError';
import { PostRepository } from '../repositories/PostRepository';

class ListAllPostsService {
  async execute() {
    const postsRepository = getCustomRepository(PostRepository);

    const posts = await postsRepository.find();

    if (!posts) {
      throw new AppError('There is nothing to see here!', 404);
    }

    return posts;
  }
}

export { ListAllPostsService };
