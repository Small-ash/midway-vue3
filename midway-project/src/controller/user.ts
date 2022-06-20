import { UserLoginDTO } from '../dto/user.dto';
import { UserModel } from '../model/user.model';
import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entity/user.entity';

@Provide()
export class UserService {
  @InjectEntityModel(UserEntity)
  userEntityModel: Repository<UserEntity>;

  // save
  async saveUserEntity<UserLoginDTO>(username, password) {
    // create a entity object
    let userEntity = new UserEntity();
    userEntity.username = 'jack';
    userEntity.password = 'redballoon';

    // save entity
    const userEntityResult = await this.userEntityModel.save(userEntity);
    let userModelEntity = new UserModel();
    let res = await userModelEntity.getUserByUsernameAndPassword(
      username,
      password
    );
    if (res) {
      return {
        code: 200,
        result: 'success',
        message: '登录成功',
        data: {
          token: '...',
        },
      };
    } else {
      return {
        code: 400,
        result: 'error',
        message: '账号或密码不正确',
        data: null,
      };
    }
    // save success
    console.log('photo id = ', userEntityResult.id);
  }
}
