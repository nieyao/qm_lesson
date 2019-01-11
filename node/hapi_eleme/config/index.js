const env = process.env;
// console.log(env);
module.exports = {
  port: env.PORT ,
  host: env.HOST,
  wxAppid: env.wx_APPID,
  wxSecret: env.wx_SECRET
}