import { getCustomRepository } from 'typeorm';
import { AppError } from '../errors/AppError';
import { PostRepository } from '../repositories/PostRepository';

interface ICreatePostRequest {
  title: string
  description: string
  user_sender: string
}

class CreatePostService {
  async execute({
    title, description, user_sender,
  }: ICreatePostRequest) {
    const postsRepository = getCustomRepository(PostRepository);

    if (!title || !description || !user_sender) {
      throw new AppError('You are missing information');
    }

    const post = postsRepository.create({
      title, description, user_sender,
    });

    await postsRepository.save(post);

    return post;
  }
}

export { CreatePostService };
