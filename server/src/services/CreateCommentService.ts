import { getCustomRepository } from 'typeorm';
import { CommentRepository } from '../repositories/CommentRepository';

interface ICreateCommentService {
  comment_body: string
  post_id: string
  user_commenting: string
}

class CreateCommentService {
  async execute({ comment_body, post_id, user_commenting }: ICreateCommentService) {
    const commentsRepository = getCustomRepository(CommentRepository);

    const comment = commentsRepository.create({ comment_body, post_id, user_commenting });

    await commentsRepository.save(comment);

    return comment;
  }
}

export { CreateCommentService };
