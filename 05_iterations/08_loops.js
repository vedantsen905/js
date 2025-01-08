// reduce method 
const mynums = [1,2,3]

// here acc is the short form of accumulator and curval is the short form of currrent value


let total = mynums.reduce( function (acc , curval) {
    return acc + curval} , 0)

    console.log(total);
    
 const mytotal = mynums.reduce((acc, curval) => acc + curval,0)   
 console.log(mytotal);

 

const cart = [
    {
        itemname : "js course" , 
        price : 2999
    },

    {
        itemname : "python" , 
        price : 1999
    },
    {
        itemname : "c++" , 
        price : 3999
    },
    {
        itemname : "swift" , 
        price : 12999
    },


]


let shopping = cart.reduce((acc, item) => acc + item.price , 0)
console.log(shopping);
