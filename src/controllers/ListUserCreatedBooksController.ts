import { Request, Response } from 'express';
import { ListUserCreatedBooksService } from '../services/ListUserCreatedBooksService';

class ListUserCreatedBooksController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;

    const listUserCreatedBooksService = new ListUserCreatedBooksService();

    const books = await listUserCreatedBooksService.execute(user_id);

    return res.json(books);
  }
}

export { ListUserCreatedBooksController };
