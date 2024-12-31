// Immediately invoked function expression 

// global scope ke pollution to hatane ke liye iife function ka use koya jaata hai 

// aur esko aise use karte hai 

(function chai(){
    //named iife
    console.log("CONNECTED");
    
})();


(() =>  {
    //unnamed iife
    console.log(`vedant`);
    
} )();