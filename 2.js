// // problem 1

// // if the number is even and less than 15, print a
// // if the number is even and more than 15, print b
// // if the number is odd and less than 10, print c
// // if the number is odd and more than 10, print d

// // We need to solve this using two methods
// // method 1: using nested if else
// // method 2: using logical operators

// /**
//  * use the number variable as user input.
//  * 
//  * change this number yourself to other values and see if
//  * you are getting the right answer
//  * example: const number = 12
//  */ 
//using nested if
 const number = 50;

    if((number % 2 === 0) && (number < 15)) {
        console.log("a");
    }
    if((number % 2 === 0) && (number > 15)) {
        console.log("b");
    }
    if((number % 2 !== 0) && (number < 10)) {
        console.log("c");
    }
    if((number % 2 !== 0) && (number > 10)) {
        console.log("d");
    }
  
        
    





// // =================================================================================================== //

// // problem 2

const letters = ["Hi", "my", "name", "is", "Akash"];

// /**
//  * concat the strings in the aboeve array to get the following result
//  * "Hi, my name is Akash."
//  * Caution: string has a comma and a full stop
//  */

// // Hint: solve this using for loop
let newLetters = '';
for(let i = 0; i < letters.length; i++){
    newLetters = newLetters + letters[i];
    console.log(newLetters)
}

// // =================================================================================================== //

// // problem 3
// /**
//  * what will be the result of the consoles and why?
//  * 
//  */

// let age = 20;
// age = 100;
// const place = "Delhi";
// {
//     let age = 30;
//     age = 40;
//     console.log("this is age one ===>", age);
//     console.log("this is place ====>", place);
// }

// age = 60;
// console.log("this is age two ===>", age);

//the result of console will be 40, Delhi, 60 because they are taking the value of their respective variable from their own scope. in the scope of first age variable the value of age is 40 so it will take the value from its scope and dont go to globla age which is 100. the value of variable place is Delhi as in the scope of this second console the value of place is not given so it goes to global scope and takes the value. in the third console the value of age is 60 because the age is reassigned to 60.
// // =================================================================================================== //

// // problem 4

// // Find sum and multiplication of  all natural numbers from 10 to 20
let multiplication = 1;
let sum = 0;
for(let i =10; i < 21; i++ ){
    multiplication = multiplication * i;
    console.log(multiplication);
    sum = sum + i;
    console.log(sum);
}


// // =================================================================================================== //

// // problem 5

// // print "yes" if a given year is a leap year else "no"
// //solve this using two methods
// // method 1: using if else
// // method 2: using ternary operator

// /**
//  *
//  * Hint:
//  * every year that is exactly divisible by four is a leap year,
//  * except for years that are exactly divisible by 100,
//  * but these centurial years are leap years if they are exactly divisible by 400
//  *
//  */

// /**
//  * use the year variable as user input.
//  * 
//  * change this number to other values yourself and see if
//  * you are getting the right answer
//  * example: const year = 1000
//  */
 const year = 2022;
if(year % 4 === 0){
    console.log("yes");
}
else if(year % 100 !== 0){
    console.log("yes");
}
else if(year % 400 === 0){
    console.log("yes");
}
else console.log("no");

//using ternary operator
(year % 400) ? ((year % 100) ? ((year % 4) ? console.log("no") : console.log("yes") ) : console.log("no") ) : console.log("yes") ;
// // =================================================================================================== //

// // problem 6

// // find the area of a triangle.  Lengths of its sides are 5, 6, 7
function area(side1, side2, side3){
    let s = (side1 + side2 + side3)/2;
    let totalArea =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
    console.log(totalArea);
}
area(5,6,7);
// // =================================================================================================== //

// // problem 7


// // write program to check whether num variable is between 100 and 200 or 400 and 500
// // print true if it is, else print false
// // handle edge cases. Hint: what if number is a string or null?


 const num = 20;
// /**
//  * use the num variable as user input.
//  * 
//  * change this number to other values yourself and see if
//  * you are getting the right answer
//  * example: const num = 250
//  */
if ((num > 100 && num < 200) && (num > 400 && num < 500)){
    console.log("true")
}
else console.log("false")



// // =================================================================================================== //

// // problem 8

// // you have 3 numbers.
// // write a program which can find the largest number
const numOne= 3;
const numTwo = 4;
const numThree = 5;

// /**
//  * use the numOne, numTwo and numThree variable as user input.
//  * 
//  * change them to other values yourself and see if
//  * you are getting the right answer
//  * example: const numOne = 250, numTwo = 4, numThree = 5
//  */
let max = numOne;
if((numTwo > max) && (numTwo > numThree)){
    max = numTwo;
    console.log(max);
}
else {
    max = numThree;
    console.log(max);
}


// // =================================================================================================== //

// // problem 9


// // write a code which prints true ifÂ one of them is 8 or their sum or difference is 8. 
// // Otherwise it should print false


// const a = 7;
// const b = 9;
// /**
//  * use the a and b variable as user input.
//  * 
//  * change them to other values yourself and see if
//  * you are getting the right answer
//  * example: const a = 8, b = 5
//  */
let sum1 = a + b;
let diff = a - b ;
if(( a === 8) || (b === 8) || (sum1 === 8) || (diff === 8)){
    console.log("true")
}
else console.log("false");