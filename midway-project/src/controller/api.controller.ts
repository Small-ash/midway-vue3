import { Inject, Controller, Query, Post } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { JwtService } from '@midwayjs/jwt';
import { UserService } from './user';

@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;
  @Inject()
  userService: UserService;
  @Inject()
  jwtService: JwtService;

  @Post('/user/login')
  async getUser() {
    const body = this.ctx.request.body;
    console.log(body);
    let res = await this.userService.saveUserEntity(
      body.username,
      body.password
    );
    const token = await this.jwtService.sign('q');
    res = { ...res, data: { token } };
    return res;
  }
}
