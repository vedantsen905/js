// to add two arrays into one .concat() is used 

let marvel = ["Ironman" , "Captain America" , "Thor"]
let dc = ["Superman" , "Batman" , "Flash"]

// let avenger = marvel.concat(dc)

// console.log(avenger);

// and another method is  spread method

let avenger = [...dc, ...marvel]
console.log(avenger);


// to organize tthe array into array situation we use .flat() method 

let arr = [1,2,3, [2,3,4,4] , 2, 23, [2323,23 ,3 , [32,23]]]
let arr1 = arr.flat(Infinity)

console.log(arr1);

// to convert string into array 

console.log(Array.from("Vedant"));


