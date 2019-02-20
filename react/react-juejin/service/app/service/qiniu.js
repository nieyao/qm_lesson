'use strict';
const qiniu = require('qiniu');
const Service = require('egg').Service;
const accessKey = 'ROvv74XmppVdhAm_Od2V9Wp95syS_rG9-nSy6uUf';
const secretKey = 'tnznv9sn6DwIMWSxSmABPQqYvuo2NjD45-alXi8_';
const publicBucketDomain = 'http://pn5e77rdw.bkt.clouddn.com';

const options = {
  scope: 'react-juejin',
  expires: 7200
}

class QiniuService extends Service {
  async getQiniuToken() {
    if (!accessKey || !secretKey || !publicBucketDomain) {
      this.ctx.throw(400, '请配置七牛鉴权参数');
    }
    let mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    let putPolicy = new qiniu.rs.PutPolicy(options);
    let uploadToken = putPolicy.uploadToken(mac);
    return uploadToken;
  }
}

module.exports = QiniuService;