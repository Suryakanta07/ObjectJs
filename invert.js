// Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.
const invert = books => {
    const result = [];
    books.forEach(book => {
      const invertBook = {};
      for (let key in book) {
        invertBook[book[key]] = key;
      }
      result.push(invertBook);
    });
    return result;
  };
  console.log(
    invert([
      {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true,
      },
      {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true,
      },
      {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false,
      },
    ])
  );