// Write a JavaScript program to list the values of a JavaScript object.
const values = obj => Object.values(obj).toString();
console.log(
  values({
    name: 'David Rayy',
    sclass: 'VI',
    rollno: 12,
  })
);