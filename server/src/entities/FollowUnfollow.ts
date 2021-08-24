import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { User } from './User';

@Entity('follow')
class FollowUnfollow {
  @PrimaryColumn()
  readonly id: string

  @Column()
  user_following: string

  @Column()
  user_followed: string

  @JoinColumn({ name: 'user_following' })
  @ManyToOne(() => User)
  userFollowing: User

  @JoinColumn({ name: 'user_followed' })
  @ManyToOne(() => User)
  userFollowed: User

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { FollowUnfollow };
