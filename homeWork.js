// First task of continue section
// let i = 0;
// while(i <= 40){
//     i++;
//     if(i % 2 === 1){
//         continue;
//     }
//     console.log("Here, the even number is:", i);
// }

// Second task of continue section
// let i = 54;
// while(i <= 85){
//     i++;
//     if(i % 2 === 0 || i % 5 === 0){
//         continue;
//     }
//     console.log("Here, the odd number is:", i);
// }

// First task of break section
// let i = 0;
// while(i <= 200){
//     i++;
//     if(i > 100){
//         break;
//     }
//     console.log(i);
// }

// Second task of break section
// let i = 0;
// let sum = 0;
// while(i < 100){
//     i++;
//     if(sum >= 100){
//         break;
//     }
//     sum = sum + i;
//     console.log("Here, the sum is:", sum);
// }

// Third task of break section

// Quiz section
const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
 if (i == 5) {
  continue;
 }
 console.log(array[i]);
}