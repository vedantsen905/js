// // for (let i = 0; i <= 10; i++) {
// //     const element = i;
// //     console.log(element);
    
    
// // }

// // console.log(element);

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 2) {
//         console.log("is best number");
//     }
//     console.log(element);
    
// }

// // console.log(element);

// for (let i = 1; i < 10; i++) {
//     console.log(`outer loop ${i}`);
    
//     for (let j = 1; j < 10; j++) {
//         // console.log(`inner loop ${j} and inner loop ${i}`);
//         console.log(i + '*' + j + '= ' + i*j );       
//     }
    
// }

let my_arr = ["VEDANT" , "FLASH" , "IRONMAN"]
// console.log(my_arr.length);


for (let index = 0; index < my_arr.length; index++) {
    const element = my_arr[index];
    // console.log(element);
    
    
}


//  break and continue

for (let index = 0; index < 20; index++) {
    if (index == 5 ) {
        // console.log(` 5 is detected`);
        break
        }
        
        // console.log(index);
        }



for (let index = 0; index < 20; index++) {
    if (index == 5 ) {
        console.log(` 5 is detected`);
        continue
        }
        
        console.log(index);
        }