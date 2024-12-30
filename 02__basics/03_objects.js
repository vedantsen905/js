


// syntax of decalring symbol datatype 
let sy = Symbol("key1")


const user = {
    name : "Vedant",
    "fullname" : "Meemansa",
    [sy] : "Vedant" ,
    age : 22,
    location : "bhopal",
    email : "Vedantsen905@gmail.com",
    logged_in : false,
    lastLogindays : ["Monday", "Tuesday"]

}

// console.log(user.logged_in);
// console.log(user.location);

// console.log(user.lastLogindays);
// console.log(user.email);
// console.log(user.name);



//to change the value in js 

user.email = "mmeemansa@gmail.com"

// console.log(user.email);

// to creatr function in js 

user.greeting = function(){
    console.log("Hello world")
}

console.log(user.greeting());
user.greeting_two = function(){console.log(`Hello user ${this.name}`);
}

console.log(user.greeting());
console.log(user.greeting_two());

