import { getCustomRepository } from 'typeorm';
import { LikeRepository } from '../repositories/LikeRepository';

interface ICreateLikeRequest {
  user_liking: string
  post_liking: string
}

class CreateLikeService {
  async execute({ user_liking, post_liking }: ICreateLikeRequest) {
    const likesRepository = getCustomRepository(LikeRepository);

    const likeAlreadyExists = await likesRepository.findOne({
      where: {
        post_liking, user_liking,
      },
    });

    if (likeAlreadyExists) {
      await likesRepository.delete({ post_liking, user_liking });
      return ('You unliked this post');
    }

    const like = likesRepository.create({ user_liking, post_liking });

    await likesRepository.save(like);

    return like;
  }
}

export { CreateLikeService };
