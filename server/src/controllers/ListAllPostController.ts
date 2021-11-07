import { Request, Response } from 'express';
import { ListAllPostsService } from '../services/ListAllPostsService';

class ListAllPostController {
  async handle(req: Request, res: Response) {
    const listAllPostsService = new ListAllPostsService();

    const posts = await listAllPostsService.execute();

    return res.json(posts);
  }
}

export { ListAllPostController };
