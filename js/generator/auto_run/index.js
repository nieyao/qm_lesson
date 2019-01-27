var fetch = require('node-fetch');
function* gen() {
  var url = 'https://api.github.com/users/github';
  var result = yield fetch(url);
  // console.log(result);
  console.log(result.bio);
}

var g = gen();
// console.log(g.next());
// console.log(g.next({ bio:'手持利剑，学好JS闯天涯' }));
// console.log(g.next());
var result = g.next();
console.log(result.value);
result.value
  .then(data => data.json())
  .then(data => {
  // console.log(data)
  g.next(data);
})

