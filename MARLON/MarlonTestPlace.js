
//The forEach Method
//----------------------
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// numbers.forEach(function (el) {
//     if (el % 2 === 0) {
//         console.log(el)
//     }
// })

// for (let el of numbers) {
//     console.log(el);
// }

//USING TRY/CATCH
//-------------------------------------------

// try {
//     hello.toUpperCase();
// } catch {
//     console.log("ERROR!!!!")
// }
// hello.toUpperCase();

// // console.log("AFTER!")

// function yell(msg) {
//     try {
//         console.log(msg.toUpperCase().repeat(3));
//     } catch (e) {
//         console.log("Please pass a string next time!")
//     }
// }


// RETURNING FUNCTIONS
// ---------------------------------------------

// function makeBetweenFunc(min, max) {
//     return function (num) {
//         return num >= min && num <= max;
//     }
// }
// ----------------------------------------------


//DEFINING METHODS
//-------------------------------------------------
// const myMath = {
//     PI: 3.14159,
//     square(num) {
//         return num * num;
//     },
//     cube(num) {
//         return num ** 3;
//     }
// }
//-------------------------------------------------


// KEYWORD THIS
// ------------------------------------------
// const cat = {
//     name: 'Blue Steele',
//     color: 'grey',
//     breed: 'scottish fold',
//     meow() {
//         console.log("THIS IS:", this)
//         console.log(`${this.name} says MEOWWWW`);
//     }
// }

// const meow2 = cat.meow;

// -----------------------------------------------