import { Request, Response } from 'express';
import { ListUserCreatedPostsService } from '../services/ListUserCreatedPostsService';

class ListUserCreatedPostsController {
  async handle(req: Request, res: Response) {
    const { user_id } = req.params;

    const listCreatedUserPostService = new ListUserCreatedPostsService();

    const posts = await listCreatedUserPostService.execute(user_id);

    return res.json(posts);
  }
}

export { ListUserCreatedPostsController };
