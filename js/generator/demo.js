function* listPeople () {
  let i = 0;
  yield i;
  i++;
  yield i;
  i++;
  yield i;
}
const people = listPeople();

console.log(people.next());
console.log(people.next());
console.log(people.next());