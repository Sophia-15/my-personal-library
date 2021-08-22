import { getCustomRepository } from 'typeorm';
import { FollowUnfollow } from '../entities/FollowUnfollow';
import { AppError } from '../errors/AppError';
import { FollowUnfollowRepository } from '../repositories/FollowUnfollowRepository';

interface ICreateFollowUnfollowRequest {
  user_following: string
  user_followed: string
}

class CreateFollowUnfollowService {
  async execute({ user_followed, user_following }: ICreateFollowUnfollowRequest) {
    const followUnfollowRepository = getCustomRepository(FollowUnfollowRepository);

    const userAlreadyFollowing = await followUnfollowRepository.findOne({
      where: {
        user_followed, user_following,
      },
    });

    const userFollowedExists = await followUnfollowRepository.find({ user_followed });

    if (!userFollowedExists) {
      throw new AppError('The user you are trying to follow does not exist!', 404);
    }

    if (userAlreadyFollowing) {
      await followUnfollowRepository.delete({ user_followed, user_following });
      return ('You unfollowed this user');
    }

    const following = followUnfollowRepository.create({ user_followed, user_following });

    await followUnfollowRepository.save(following);

    return following;
  }
}

export { CreateFollowUnfollowService };
