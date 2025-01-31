const PromiseOne = new Promise((resolve, reject) =>{
    // Do an async tasl
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("async task is completed");
        resolve()
    },1000)
})
  
PromiseOne.then(function(){

    console.log("Task is completed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task two ");
        resolve()
        
    }, 1000)
}).then(function(){
    console.log("Task two is completed");
})

const PromiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            username : 'hai' , 
            password : 1234,
            email : "vedantsen905@gmail.com"
        })

    },1000)
})


PromiseThree.then(function(ser){
    console.log(ser);
    

})

const PrmoiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            console.log("Task is completed");
            resolve({username : "vedant", 
                password : 1234
            })
        }
        else{
            reject('Error: Something went wrong')
        }
    }, 1000)


})
 PrmoiseFour
 .then((user)=>{
        console.log(user);
        return user.username
 })
 .then((username)=>{
    console.log(username);
 })
 .catch((error)=>{
     console.log(error);
     
 })
 .finally(()=>{ console.log("the promise is etiher resolved or rejected")} )




 const PromiseFive = new Promise(function(reject,resolve){
        setTimeout(function(){
            let error = true
            if(!error){
                console.log("Task is completed");
                resolve({username : "meemansa", 
                    password : 1234
                })
            }
            else{
                reject('Error: JS went wrong')
            }
        }, 1000)
 })

 async function getPromise(){
    const response = await PromiseFive
    console.log(response);

     
 }

    getPromise()

// async function getAllusers(){
//   try { let response=  await fetch('https://jsonplaceholder.typicode.com/users')
//     console.log(response);
//     // let datav = response.json()
//     // console.log(datav);
    
//   } catch (error) {
    
//     console.log("Error: ", error);
    
//   }
// }

fetch('https://jsonplaceholder.typicode.com/users')
.then((resppo)=>{
    return resppo.json()
})
.then((data)=>{
    console.log(data);  })
.catch((error)=>{
    console.log(error);
    
})

