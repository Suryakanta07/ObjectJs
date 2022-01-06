// Write a JavaScript function to check whether an object contains given property.
const findProperty = (obj, prop) => prop in obj;
console.log(
  findProperty(
    {
      author: 'Bill Gates',
      title: 'The Road Ahead',
      readingStatus: true,
    },
    'author'
  )
); // true
console.log(
  findProperty(
    {
      author: 'Bill Gates',
      title: 'The Road Ahead',
      readingStatus: true,
    },
    'hello'
  )
); // false
