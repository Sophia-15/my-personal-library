import { Request, Response } from 'express';
import { ListPostLikesService } from '../services/ListPostLikesService';

class ListPostLikesController {
  async handle(req: Request, res: Response) {
    const { post_id } = req.params;

    const listPostLikesService = new ListPostLikesService();

    const likes = await listPostLikesService.execute(post_id);

    return res.json(likes);
  }
}

export { ListPostLikesController };
