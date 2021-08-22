import { Request, Response } from 'express';
import { ListPostCommentsService } from '../services/ListPostCommentsService';

class ListPostCommentsController {
  async handle(req: Request, res: Response) {
    const { post_id } = req.params;

    const listPostCommentsService = new ListPostCommentsService();

    const postComments = await listPostCommentsService.execute(post_id);

    return res.json(postComments);
  }
}

export { ListPostCommentsController };
