'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async loginIn() {
    const { ctx } = this;
    const { password, email } = ctx.request.body;

    const token = await ctx.service.user.login({ password, email });
    if (token) {
      const opts = {
        path: '/',
        maxAge: 10000 * 60 * 60 * 24 * 7,
        // httpOnly: false,
        // domain: '127.0.0.1',
      };
      ctx.cookies.set(this.config.auth_cookie_name, token, opts);
      ctx.status = 200;
      ctx.body = {
        message: '登录成功',
      };
    } else {
      ctx.throw(400, '用户名或密码错误');
    }
  }
  async register() {
    const { ctx } = this;
    const { password, username, email } = ctx.request.body;
    ctx.body = `${password}, ${username}, ${email}`;
    await ctx.service.user.register({ password, username, email });
  }
}

module.exports = LoginController;
