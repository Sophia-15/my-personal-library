import { getCustomRepository } from 'typeorm';
import { AppError } from '../errors/AppError';
import { LikeRepository } from '../repositories/LikeRepository';

interface ICreateLikeRequest {
  user_liking: string
  post_liking: string
}

class CreateLikeService {
  async execute({ user_liking, post_liking }: ICreateLikeRequest) {
    const likesRepository = getCustomRepository(LikeRepository);

    const like = likesRepository.create({ user_liking, post_liking });

    await likesRepository.save(like);

    return like;
  }
}

export { CreateLikeService };
