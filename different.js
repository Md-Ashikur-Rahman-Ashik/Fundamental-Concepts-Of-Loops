// for(let i = 0; i < 20; i++){
//     if(i % 2 === 1){
//         console.log(i);
//     }
// }

// for(let i = 1; i < 20; i++){
//     if(i % 3 === 0){
//         console.log(i);
//     }
// }

// for(let i = 1; i <= 30; i++){
//     if(i % 5 === 0){
//         console.log(i);
//     }
// }

// for(let i = 1; i <= 30; i++){
//     if(i % 3 === 0 || i % 5 === 0){
//         console.log(i);
//     }
// }

// for(i = 1; i <= 30; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(i);
//     }
// }

// let sum = 0;
// for(let i = 1; i <= 30; i++){
//     if(i % 3 === 0){
//         console.log(i);
//         sum = sum + i;
//     }
// }
// console.log("The sum of the numbers which can be divided with three in between 1 to 30 is:", sum)

// for(let i = 0; i < 15; i++){
//     console.log(i);
//     if(i >= 10){
//         break;
//     }
// }

// let i = 0;
// while(i < 15){
//     console.log(i);
//     if(i >= 5){
//         break;
//     }
//     i++;
// }

// for(let i = 0; i < 15; i++){
//     if(i % 2 === 0){
//         continue;
//     }
//     console.log(i);
// }

let i = 1;
while(i < 10){
    i++;
    if(i % 2 === 1){
        continue;
    }
    console.log(i);
}