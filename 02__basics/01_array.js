//array declartion 

const myArr = [1,2,3,4,5,6]
console.log(myArr);

// //to add in array
// myArr.push(56)
// console.log(myArr);

// // to delete last element in array simply use .pop

// myArr.pop()

// console.log(myArr);

// // to add element in start of elemnt simppply use .unshift

// myArr.unshift(9)


// console.log(myArr);

// // to remove first elemnt in the array simpply use .shift

// myArr.shift()

// // to find the element whtehter it is or not in array simply use .includes

// myArr.includes(78)

// console.log(myArr.includes(78));


// // to convert array into string simply use .join 

// console.log(myArr.join());

// slice  in slice like given is .slice(1,3) that means it removes the elemtn starting from 1 , 2 and not remove the last element it removes (1,2)

// console.log("a " , myArr);
// const arr1 = myArr.slice(1,3)

// console.log(arr1);


//splice  like use .splice(4,5) that means the it deletes the element 4,5 and manipulate the original array 

const arr2 = myArr.splice(1,3)


console.log(arr2);

console.log(myArr);

