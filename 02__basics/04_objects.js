// // // // singleton object

// // // // const obj = new Object()

// // // //
// // // // non singleton Object

// // // const value = {}

// // // value.name = "123abc"
// // // value.add = "VEdant"


// // // console.log(value);
// // // // console.log(obj);


// // // to declare objects in object 

// // const user = {
// //     full_name : {
// //         username : {
// //             f_name : "Vedant" , 
// //             l_name : "Sen"
// //         }}
// //     , 
// //     id : 1232 , 
// //     email : "Vedant@google.com"
// // }

// // // to access objects in ojects 

// // console.log(user.full_name)
// // console.log(user.full_name.f_name);

// // // to add two objects in one

// const obj1 ={
//     "a" : 1,
//     "b" : 2
// }

// const obj2 = {
//     "c" : 3 , 
//     "d" : 4
// }
// //.assign method is used
// const obj3 = Object.assign({} , obj1, obj2) 
// console.log(obj3);


// // another method is spreaad just like array adding method 

// const obj4 = {...obj1 , ...obj2, ...obj3}

// console.log(obj4);


// destructuring of object 


const user = {
    name : "Vedant" , 
    id : 1232 , 
  email : "Vedant@google.com"
}

const {email} = user

console.log(email);
