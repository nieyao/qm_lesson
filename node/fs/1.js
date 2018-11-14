const fs = require('fs');

try {
  // Promise 也可以 then 链
  const fileAPromise = new Promise((resolve, reject) => {
    fs.readFile('./a.txt', 'utf8', function(err, data) {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  });
  const fileBPromise = new Promise((resolve, reject) => {
    fs.readFile('./b.txt', 'utf8', function(err, data) {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  });
  const fileCPromise = new Promise((resolve, reject) => {
    fs.readFile('./c.txt', 'utf8', function(err, data) {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  });
  
  // fileAPromise 
  //   .then(data => {
  //     console.log('文件A', data);
  //     return fileBPromise
  //   })
  //   .then(data => {
  //     console.log('文件B', data);
  //     return fileCPromise
  //   })
  //   .then(data => {
  //     console.log('文件C', data);
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // const dataA = fs.readFileSync('./a.txt', 'utf8');
  // const dataB = fs.readFileSync('./b.txt', 'utf8');
  // const dataC = fs.readFileSync('./c.txt', 'utf8');
} catch(e) {
  console.log('读取文章失败' + e.message);
}
