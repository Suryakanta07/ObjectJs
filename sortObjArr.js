// Write a JavaScript program to sort the items of an array.
const sortObjArr = (arr, prop) => {
    if (typeof arr[0][prop] === 'number') {
      arr.sort((a, b) => {
        return a[prop] - b[prop];
      });
    } else {
      arr.sort((a, b) => {
        a = a[prop].toLowerCase();
        b = b[prop].toLowerCase();
        if (a < b) {
          return -1;
        } else if (a > b) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    return arr;
  };
  console.log(
    sortObjArr(
      [
        { type: 'Volvo', year: 2016 },
        { type: 'Saab', year: 2001 },
        { type: 'BMW', year: 2010 },
      ],
      'type'
    )
  ); // [
  //     {type:"BMW", year:2010}
  //     {type:"Saab", year:2001},
  //     {type:"Volvo", year:2016},
  //   ]
  console.log(
    sortObjArr(
      [
        { type: 'Volvo', year: 2016 },
        { type: 'Saab', year: 2001 },
        { type: 'BMW', year: 2010 },
      ],
      'year'
    )
  ); // [
  // {type:"Saab", year:2001},
  // {type:"BMW", year:2010}
  // {type:"Volvo", year:2016},
  //]