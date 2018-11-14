const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const infos = {
  "123":{
    username:"唐增瑞",
    sex:"男"
  },
  "456":{
    username:"罗隆基",
    sex:"男"
  }
}
// web server
// node 如何提供http服务？
const server = http.createServer((req,res)=>{
  // 提供访问的，方法都会被执行，伺服状态
  // req 请求对象 request url querystring query body 
  // res 服务结果对象 response
  if(req.url === '/rhino.png'){
    const png = fs.readFileSync('./rhino.png');
    res.statusCode = 200;
    res.setHeader('Content-Type','image/png');
    res.end(png);
    return;
  }

  if(req.url.indexOf('/getInfo') >= 0){
    const qs = req.url.split('?')[1];
    console.log(qs);
    const params = querystring.parse(qs);
    console.log(params);
    const id = params.id;
    console.log(id)
    const info = infos[id] || {};
    res.statusCode = 200
    res.end(JSON.stringify(info));
    return;
  }
  const index = fs.readFileSync('./index.html','utf8');
  res.statusCode = 200;
  res.setHeader('Content-Type','text/html');
  res.end(index);
})
// addEventListener
server.listen(3000,'127.0.0.1',()=>{
  console.log('服务器跑起来了');
})