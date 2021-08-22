import { Repository, EntityRepository } from 'typeorm';
import { FollowUnfollow } from '../entities/FollowUnfollow';

@EntityRepository(FollowUnfollow)
class FollowUnfollowRepository extends Repository<FollowUnfollow> {
}

export { FollowUnfollowRepository };
