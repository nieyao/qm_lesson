//接受消息
self.addEventListener('message',function(e){
  const data = e.data;
  switch(data.cmd){
    case 'start':
      self.postMessage('WORKER STARTED:' + data.msg);
      break;
    case 'stop':
      self.postMessage('WORKER STOPED' + data.msg);
      break;
  }
})