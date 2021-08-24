import { Request, Response } from 'express';
import { CreateCommentService } from '../services/CreateCommentService';

class CreateCommentController {
  async handle(req: Request, res: Response) {
    const { post_id, comment_body } = req.body;
    const { user_id } = req;

    const createCommentService = new CreateCommentService();

    const comment = await createCommentService.execute({ post_id, comment_body, user_commenting: user_id });

    return res.json(comment);
  }
}

export { CreateCommentController };
