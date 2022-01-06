// Write a JavaScript program to get the length of a JavaScript object.
const keyLength = obj => Object.entries(obj).length;
console.log(
  keyLength({
    name: 'David Rayy',
    sclass: 'VI',
    rollno: 12,
  })
);