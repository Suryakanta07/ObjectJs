// Write a JavaScript program to list the properties of a JavaScript object.
const keys = obj => Object.keys(obj).toString();
console.log(
  keys({
    name: 'David Rayy',
    sclass: 'VI',
    rollno: 12,
  })
);