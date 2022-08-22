///////////////////////////////////////////////////////////////
//// EASY GOING
///////////////////////////////////////////////////////////////

// for (let i = 1; i <= 20; i++) {
//     console.log(i);
// }

///////////////////////////////////////////////////////////////
//// GET EVEN
///////////////////////////////////////////////////////////////

// for (let i = 0; i <= 200; i++) {
//     if (i == 0) {
//         continue;
//     }
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// for (let i = 0; i <= 200; i+=2) {
//     if (i == 0) {
//         continue;
//     }
//     console.log(i);
// }

///////////////////////////////////////////////////////////////
//// FIZZ BUZZ
///////////////////////////////////////////////////////////////

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0) {
//         if (i % 5 == 0) {
//             console.log('FizzBuzz');
//         } else {
//             console.log('Fizz');
//         }
//     } else if (i % 5 == 0) {
//         if (i % 3 == 0) {
//             console.log('FizzBuzz');
//         } else {
//             console.log('Buzz');
//         }
//     } else {
//         console.log(i);
//     }
// }

///////////////////////////////////////////////////////////////
//// WILD WILD LIFE
///////////////////////////////////////////////////////////////

//1. plantee[2] = 5001;
//2. wolfy[3] = 'Gotham City';
//3. dart.push('Hawkins');
//4. wolfy[0] = 'Gameboy';

///////////////////////////////////////////////////////////////
//// YELL AT THE NINJA TURTLES
///////////////////////////////////////////////////////////////

// const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

// for (const turtles of ninjaTurtles) {
//     console.log(turtles.toUpperCase());
// }

///////////////////////////////////////////////////////////////
//// METHODS, REVISITED
///////////////////////////////////////////////////////////////

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle','Django Unchained', 'Titanic'];

// // console.log(favMovies.indexOf('Titanic'));

// //1. 
// favMovies.sort(); // sorted the elements according to increasing or alphabetical order
// console.log(favMovies);

// //2.
// favMovies.pop(); // removes last element of the array

// //3.
// favMovies.push('Guardians of the Galaxy'); // adds to the end of the array

// //4.
// favMovies.reverse(); // reverses the array

// //5. 
// favMovies.shift(); // removes the first element of the array and shifts to the right by 1

// //6. 
// console.log(favMovies.unshift()); // returns the length of the array
// console.log(favMovies);

// //7.
// favMovies.splice(favMovies.length-1,1);
// favMovies.push('Avatar');

// //8. & 9.
// let movieLength = favMovies.length;
// let sliceIndex = (movieLength / 2);
// let sliceVar = favMovies.slice(sliceIndex);
// console.log(sliceVar);

// //11.
// console.log(favMovies.indexOf('Fast and Furious')); // returns -1 as indication it DNE in array

// 12. no, as declaring const favMovies as an array means we can mutate it as an array, but cannot change favMovies to another type like String or Integer

///////////////////////////////////////////////////////////////
//// WHERE IS WALDO
///////////////////////////////////////////////////////////////

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert", ["Lucinda", "Jacc", "Neff", "Snoop"], ["Petunia", ["Baked Goods","Waldo"]]];

// whereIsWaldo.splice(1,1);

// whereIsWaldo[1][2] = 'No One';

// console.log(whereIsWaldo[2][1][1]);

///////////////////////////////////////////////////////////////
//// EXCITED KITTEN
///////////////////////////////////////////////////////////////

// for (let i = 0; i < 20; i++) {
//     let randomAns = Math.floor(Math.random() * 3);
//     if (i == 0) {
//         console.log('Love me, pet me! HSSSSSS!');
//     }
//     if (i % 2 == 0) {
        
//         switch(randomAns) {
//             case 0:
//                 console.log('...human...why you taking pictures of me?');
//                 break;
//             case 1:
//                 console.log('...the catnip made me do it...');
//                 break;
//             case 2:
//                 console.log('...why does the red dot always get away...');
//                 break;
//         }
//     } else {
//         console.log('Love me, pet me! HSSSSSS!');
//     }
// }

///////////////////////////////////////////////////////////////
//// FIND THE MEDIAN
///////////////////////////////////////////////////////////////

// const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12, 17, 12, 71, 18, 15, 12];
// console.log(nums.length)
// let median = Math.floor(nums.length/2);
// nums.sort();
// console.log(nums[median]);