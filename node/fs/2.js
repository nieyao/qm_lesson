const fs = require('fs');
const path = require('path');
//遍历目录及其子目录，把文件输出
const getFilesInDir = function(dir) {
  const results = [path.resolve(dir)];
  const files = fs.readdirSync(dir,'utf8');
  console.log(files)
  files.forEach(file => {
    file = path.resolve(dir,file);
    //文件的信息
    const stats = fs.statSync(file);
    // console.log(stats);
    if(stats.isFile()){
      results.push(file);
    }else{
      results = results.concat(getFilesInDir(file));
    }
  })
  return results;
}
const files = getFilesInDir('./src');
console.log(files);