class Promise {
  constructor(executor){
    // resolve?
    this.status = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.onResolveCallBack = [];
    this.onRejectedCallBack = [];
    let resolve = (value) => {
      this.status = 'resolved';
      this.value = value;
      this.onResolveCallBack.forEach(fn => fn());
    }
    let reject = (reason) => {
      this.status = 'rejected';
      this.value = reason;
      this.onRejectedCallBack.forEach(fn => fn());
    }
    executor(resolve,reject);
    // 开启了？ 。。。
    // new 异步任务开始执行
  }
  then(onFullfield,onRejected) {
    if(this.status === 'pending') {
      this.onResolveCallBack.push( ()=>{
        onFullfield(this.value)
      }
      );
      this.onRejectedCallBack.push( () => {
        onRejected(this.value)
      });
    }
    // if(this.status === 'resolved' ) {
    //   onFullfield(this.value);
    // }
    // if(this.status === 'rejected' ) {
    //   onRejected(this.value);
    // }
  }
}
module.exports = Promise;
