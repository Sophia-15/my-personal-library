import { Request, Response } from 'express';
import { ListUserInfoService } from '../services/ListUserInfoService';

class ListUserInfoController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;

    const listUserInfoService = new ListUserInfoService();

    const user = await listUserInfoService.execute(user_id);

    return res.json(user);
  }
}

export { ListUserInfoController };
