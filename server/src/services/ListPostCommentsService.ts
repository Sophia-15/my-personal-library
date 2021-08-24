import { getCustomRepository } from 'typeorm';
import { AppError } from '../errors/AppError';
import { CommentRepository } from '../repositories/CommentRepository';

class ListPostCommentsService {
  async execute(post_id: string) {
    const commentsRepository = getCustomRepository(CommentRepository);

    const postComments = await commentsRepository.find({
      where: {
        post_id,
      },
    });

    if (!postComments) {
      throw new AppError('We could not find what you were looking for!', 404);
    }

    return postComments;
  }
}

export { ListPostCommentsService };
