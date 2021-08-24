import { Repository, EntityRepository } from 'typeorm';
import { Likes } from '../entities/Likes';
import { Post } from '../entities/Post';

@EntityRepository(Likes)
class LikeRepository extends Repository<Likes> {
}

export { LikeRepository };
