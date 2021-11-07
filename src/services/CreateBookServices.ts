import { getCustomRepository } from 'typeorm';
import { AppError } from '../errors/AppError';
import { BookRepository } from '../repositories/BookRepository';

interface ICreateBookRequest {
  cover: string
  book_title: string
  publisher: string
  authors: string
  user_sender: string
}

class CreateBookService {
  async execute({
    cover, authors, book_title, publisher, user_sender,
  }: ICreateBookRequest) {
    const bookRepository = getCustomRepository(BookRepository);

    if (!cover || !authors || !book_title || !publisher || !user_sender) {
      throw new AppError('You are missing information');
    }

    const book = bookRepository.create({
      cover, authors, book_title, publisher, user_sender,
    });

    await bookRepository.save(book);

    return book;
  }
}

export { CreateBookService };
