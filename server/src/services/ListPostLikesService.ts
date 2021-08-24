import { getCustomRepository } from 'typeorm';
import { AppError } from '../errors/AppError';
import { LikeRepository } from '../repositories/LikeRepository';

class ListPostLikesService {
  async execute(post_id: string) {
    const likesRepository = getCustomRepository(LikeRepository);

    const postLikes = await likesRepository.find({
      where: {
        post_liking: post_id,
      },
    });

    if (!postLikes) {
      throw new AppError('There is nothing to see here!', 404);
    }

    return postLikes;
  }
}

export { ListPostLikesService };
