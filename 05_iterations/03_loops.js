// for of 

/// in this object means jis  per loop lagaana hai usko likhna rehta hai 

const arr = [1,2,3,4,5,6]

for (const  num of arr) {
    // console.log(num);}
}


const greetings =  "Hello world"

for (const greet of greetings) {
    // console.log(`${greet}`);
    
    
}

// maps 

const map = new Map()
map.set('IN' , 'INDIA')
map.set('AUS' , 'AUSTRAILA')


for (const [key, value] of map) {
    console.log(key ,":" , value);
    
    
}

// maps is not iteratable

let num = "IRONMAN"

for (const nums of num) {
    console.log(nums);
    
    
}