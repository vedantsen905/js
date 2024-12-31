//{ this is called scope} 

// let a = 30 

// if (true){
//     let a = 23 
//     const b = 33 
// }

// console.log(a);


function one (){
    const username = "VEDANT"

    function two(){
        const website = "YOUTUBE"
        // console.log(username);
        
    }
    // console.log(website);
    
console.log(two())

}

one()

// in functionos into functions child function access the parent function but parent function cannot

// and same this concept works in if lese and in loops also 

if(true){
    const username = "Meemansa"
    if( username = "Meemansa"){
        const website = "Yotube"
        console.log(username + website)
    }
console.log(website);

}
console.log(username);


// ++++++++++++++++++++++++++++ Intersting ++++++++++++++++++++++++++++++++

function addone(num){
    return num +1
}

