import { UserEntity } from '../entity/user.entity';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { Provide } from '@midwayjs/decorator';

@Provide()
export class UserModel {
  @InjectEntityModel(UserEntity)
  userRepo: Repository<UserEntity>;

  /**
   * 根据用户名和密码获取用户信息
   * @param username {String} 用户名
   * @param password {String} 用户密码
   */
  async getUserByUsernameAndPassword(username, password): Promise<UserEntity> {
    let allUser = await this.userRepo.find({
      where: { username, password },
    });
    return allUser[0];
  }
}
