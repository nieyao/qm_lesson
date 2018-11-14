// 云函数入口文件
const cloud = require('wx-server-sdk')
const queryString = require('querystring');
const requset = require('request');
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(code)
  let { code } = event;
  let id = 'wx85af612b06f3b2fe';
  let secretKey = '8251a9e5e44b5601bc1388305d985679';
  const data = {
    appid:id,
    secret:secretKey,
    js_code:code,
    grant_type:'authorization_code'
  }
  let url = `https://api.weixin.qq.com/sns/jscode2session?${queryString.stringify(data)}`
  console.log(url);
  return new Promise((resolve,reject) => {
    request.get(url,(error,response,body) => {
      if(error || response.statusCode !== 200){
        reject(error)
      }else{
        try{
          console.log(body)
          const r = JSON.parse(body);
          resolve(r)
        }catch(e){
          reject(e)
        }
      }
    })
  })
  // 在session前， 后端 ，操作小程序的登录，当然要小程序的同意
}