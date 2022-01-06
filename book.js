// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
const book = books => {
    books.forEach(({ author, title, readingStatus }) => {
      console.log(
        `${
          readingStatus ? 'Already' : 'You still need to'
        } read \'${title}\' by ${author}`
      );
    });
  };
  book([
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
  ]);