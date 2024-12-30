
// // // function addTwonumbers(num1 , num2){
// // //     // let result = num1 + num2
// // //     return num1 + num2
// // // }

// // // let res = addTwonumbers(2,3)

// // // console.log(res);


// // // function userlogin(username){
// // //     if(username === undefined) {
// // //         console.log("please enter a username");
// // //         return
        

// // //     }
// // //     return ` ${username} just logged in`
// // // }

// // function userlogin(username = "VEDANT"){
// //     if(username === undefined) {
// //         console.log("please enter a username");
// //         return
        

// //     }
// //     return ` ${username} just logged in`
// // }
// // userlogin("Vedant")

// // console.log(userlogin("Vedant"));

// // console.log(userlogin());



// //// rest operator to take multiple parameters ...

// // function calculatecartprice(...num1){
// //     return num1
// // }

// // console.log(calculatecartprice(111,112,112,11,232,323,232,21312,12,31232,122,232,2));


// // to  access object into unction following is used

// const new_object = {
//     name : "Vedant" , 
//     price : 300 , 
//     email : "vedant@google.com"
// }

// // now let's make a function 

// function object(anyobject) {
//     return `The name is ${anyobject.name}, the email is ${anyobject.email}, and the price is ${anyobject.price}`;
// }

// console.log(object({
//     name: "Vedant", 
//     price: 300, 
//     email: "vedant@google.com"
// }));


// console.log(object());


// console.log(object(new_object));

// or we can direct pass the object in function without declaring it 
    // function object(anyobject) {
    //     return `The name is ${anyobject.name}, the email is ${anyobject.email}, and the price is ${anyobject.price}`;
    // }

    // console.log(object({
    //     name: "Vedant", 
    //     price: 300, 
    //     email: "vedant@google.com"
    // }));


// as it is to pass array in function 


const  my_arr = [1,2,3,4,5,6]

function new_arr(any_arr){
    return any_arr[1]
}

console.log(new_arr(my_arr));

// or directly pass array in function 

console.log(new_arr([222,34,3232,2]));

