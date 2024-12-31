// // the use of .this function is to refeer the current context

// const user = {
//     username : "VEDANT" , 
//     price : 100,

//     myname : function (){
//         console.log(this.username);
        
//     }

// }

// user.username = "meemansa"
// user.myname()


// function chai(){
//     console.log(this);
    
// }

// chai()


// this function is only used in objects 

// arrow function declaration () => {}

// const chai = () => {
//     console.log("VEdant");
    
// }

// chai()


// const addTwonumbers = (num1,num2)=> {
//     return num1 * num2

// }

// console.log(addTwonumbers(2,3));

//implict function means code in one line so not need to return kabhi culry braces mai 
// likha to return likna padega aur () eske saath return nahi karna padega 

const addTwonumbers = (num1,num2)=> (num1 * num2)

console.log(addTwonumbers(2,3));


// explicit method mai return keyword lagate hai  