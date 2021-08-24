import { getCustomRepository } from 'typeorm';
import { AppError } from '../errors/AppError';
import { BookRepository } from '../repositories/BookRepository';

class ListUserCreatedBooksService {
  async execute(user_id: string) {
    const booksRepository = getCustomRepository(BookRepository);

    const books = await booksRepository.find({
      where: {
        user_sender: user_id,
      },
    });

    if (!books) {
      throw new AppError('Could not find what you were looking for!', 404);
    }

    return books;
  }
}

export { ListUserCreatedBooksService };
