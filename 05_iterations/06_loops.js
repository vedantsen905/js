 
// const coding = ["java" , "cpp" , "python" , "c" , "swift"]


// coding.forEach( (item) => {
//     console.log(item);
    
// })



const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newnums = myNums.filter((num) => {return num > 4})
// console.log(newnums);


// const mumber =myNums.filter((num) => (num < 4 +1 ))

// console.log(mumber);


// const arr = [1,2,3,4,5,7]

// console.log(arr.filter((num) => num > 3))


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


let books_new = books.filter((bk) => { return bk.genre === 'Fiction' || bk.publish > 2000})
console.log(books_new);