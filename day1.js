


//    var x = 5
//    x = "hellow"
//    var x = true;
//    console.log(x)


//     {
//       let  a  = 10
//  }
//      console.log(10)


//      let date1 = 42;
//      let data2 = "42";
//      let data3

//      console.log(typeof date1);
//      console.log(typeof data2);
//      console.log(typeof data3);


//    let userinput = prompt("Enter Your age:")
//    console.log(typeof userinput)


//    const name = "John"
       
//          console.log(name);


// 7-8-2025

// console.log(10 + 10)
// console.log(10 - 10)
// console.log(10 * 10)
// console.log(10 / 10)
// console.log(10 % 11)
// console.log(10 ** 10)

// let int = 10;
//     int = int++
// console.log(int)

// let numbers  = 20
// let numbers1 = ++numbers
// console.log(numbers, numbers1) 

// let a1 = 12
// let b1 = ++a1
// let c1 = ++b1
// console.log(a1,b1,c1)

// let d1 = 1
// let e1 = --d1
// let f1 = ++e1
// console.log(d1,e1,f1)

// let num1 = 20
// let num2 = num1++ + --num1
// console.log(num1,num2)



// 8-8-2025

//  // - 1

//     let x  = 5
//     let y  = x++ + ++x
//     console.log(x,y)

//  // - 2

//     let total  = 50
//         total += 30
//         total /= 4
//     console.log(total)

//  // - 3

//     console.log(10=="10")
//     console.log(10==="10")
    
//  // - 4

//     let age = 25
//     let experience = 3
//     console.log((age>=25)&&(experience>=3))

//  // - 5

//     console.log(typeof(5 + "5"));

//  // - 6

//     console.log(Boolean(0));
//     console.log(Boolean("false"));
//     console.log(Boolean([]));

//  // - 7

//     let str = Number("123")
//     let num = 10
//     let add = str + num
//     console.log(add)

//  // - 8

//     console.log(Boolean({}));
//     console.log(Boolean(null));

//  // - 9

//     let greeting = "Hello" + " " + "Students";
//     console.log(greeting);

//  // - 10

//     let a = "10";
//     let b = 10;
//     console.log(a + b);
//     console.log(Number(a) + b);


//  11-8-2025

//  // - 1

//  let Number = prompt("Enter Your Number")

//  if (Number > 0) {
//     console.log("Positive Number");

//  } else if ( Number < 0) {
//      console.log("Negative Number");

//  } else {
//     console.log("Zero");
//  }

//   // - 2

//    let monthNumber = 7;

//   switch (monthNumber) {

//     case "1":console.log("January"); break;
        
//     case "2": console.log("February"); break;
        
//     case "3": console.log("March"); break;
        
//     case "4": console.log("April"); break;

//     case "5":console.log("May"); break;
    
//     case "6": console.log("June"); break;
       
//     case 7:console.log("July"); break;
        
//     case 8:  console.log("August"); break;
      
//     case 9:console.log("September"); break;
        
//     case "10": console.log("October"); break;
        
//     case "11": console.log("November"); break;
          
//     case "12": console.log("December"); break;
        
//     default:
//         console.log("Invalid month number");
// }



// // - 3

// let number = 7;

// for (let i = 1; i <= 10; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
// }

// // - 4

// let colors = ["red", "green", "blue", "yellow", "Black"];

// for (let color of colors) {
//     console.log(color.toUpperCase());
// }

// // - 5

// let car = {
//   brand: "Mercedes-Benz",
//   model: "S-Class",
//   year: 2025
// };

// for (let property in car) {
//   console.log(property + ": " + car[property]);
// // }


//  12-8-2025

//  // - 1

//  function isMagicNumber(num) {
//   if (num % 3 === 0 && num % 7 === 0) {
//     console.log("* It's magic!");
//   } else {
//     console.log("Not magic");
//   }
// }

// isMagicNumber(21);
// isMagicNumber(10);

// // - 2

// let shoutName = function(name) {
//     console.log(name.toUpperCase() + "!!!");
// };

// shoutName("chris");

// // - 3

// const tellFortune = (name, place = "Unknown") => {
//     console.log(`Dear ${name}, you will travel to ${place} soon!`);
// };

// tellFortune("Chris", "London");
// tellFortune("James");

// // - 4

// function scopeDetective() {
//     if (true) {
//         var varVariable = "I am var!";
//         let letVariable = "I am let!";
//         const constVariable = "I am const!";

//         console.log("Inside block - var:", varVariable);
//         console.log("Inside block - let:", letVariable);
//         console.log("Inside block - const:", constVariable); 
//     }

//     console.log("Outside block - var:", varVariable); 

//     try {
//         console.log("Outside block - let:", letVariable); 
//     } catch (error) {
//         console.log("Outside block - let: Not accessible (" + error.message + ")");
//     }

//     try {
//         console.log("Outside block - const:", constVariable);
//     } catch (error) {
//         console.log("Outside block - const: Not accessible (" + error.message + ")");
//     }
// }

// scopeDetective();

// // - 5

// const sumNumbers = (a, b) => a + b;

// console.log(sumNumbers(1, 6));



//  13-8-2025

//  // - 1


// function sayHello() {
//     console.log('Hello World');
// }
// sayHello();


// let fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes'];
// console.log(fruits[0]); 
// console.log(fruits[fruits.length - 1]);


// let student = {
//     name: 'John',
//     age: 20
// };
// console.log(student.name);


// for (let letter of 'CHRISTOBER') {
//     console.log(letter);
// }


// (function() {
//     console.log('I am learning JavaScript');
// })();


// function calculate(a, b, callback) {

//     console.log("Sum:", a + b);
    
//     callback(a, b);
// }

// function logDifference(x, y) {
//     console.log("Difference:", x - y);
// }

// calculate(10, 4, logDifference);

//  // - 2

//  const power = a => b => a ** b;

//  console.log(power(2)(3));  
// console.log(power(5)(2));   
// console.log(power(10)(0)); 
// console.log(power(3)(4));  

// // - 3

// (function(shopName, discount) {
//     alert(`Welcome to ${shopName}! Get ${discount}% off today!`);
// })("SuperMart", 20);

// // - 4

// function* colorGenerator() {
//     yield 'red';
//     yield 'green';
//     yield 'blue';
// }

// const colors = colorGenerator();

// console.log(colors.next()); 
// console.log(colors.next());
// console.log(colors.next()); 
// console.log(colors.next());

// // - 5

// let word = 'developer';
// for (let letter of word) {
//     console.log(letter);
// }

// let laptop = { brand: 'Dell', price: 45000, isNew: true };
// for (let key in laptop) {
//     console.log(laptop[key]);
// }



//  14-8-2025

// //  Spread & Rest Operator

//  // - 1 

// let arr1 = ['a', 'b'];
// let arr2 = ['c', 'd'];

// let merged = [...arr1, ...arr2];

// console.log(merged);

// // - 2

// let person = { name: 'John', age: 25 };

// let clonePerson = { ...person };

// console.log(clonePerson);

// // - 3

// let obj1 = { x: 1, y: 2 };
// let obj2 = { y: 3, z: 4 };

// let merged1 = { ...obj1, ...obj2 };
// console.log(merged1);

// // - 4

// function sumAll(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sumAll(1, 2, 3, 4, 5));
// console.log(sumAll(10, 20));       
// console.log(sumAll());

// // - 5

// function logArguments(a, b, ...rest) {
//   console.log("First argument:", a);
//   console.log("Second argument:", b);
//   console.log("Remaining arguments:", rest);
// }


// logArguments(10, 20, 30, 40, 50, 60);

// // Array Destructuring

// // - 6

// let colors = ['red', 'green', 'blue'];

// let [c1, c2] = colors;

// console.log(c1); 
// console.log(c2);

// // - 7

// let items = ['pen', 'pencil', 'eraser', 'sharpener'];
// let [first, , , last] = items;

// console.log(first); 
// console.log(last); 

// // - 8

// let nums = [10, 20, 30, 40, 50];
// let [n1, n2, ...rest] = nums;

// console.log(n1);   
// console.log(n2);   
// console.log(rest); 

// // - 9

// let vehicles = ['car', ['bike', ['bus', 'train']]];
// let [, [, [bus]]] = vehicles;

// console.log(bus); 

// // - 10

// let a = 5, b = 10;
// [a, b] = [b, a];

// console.log(a); 
// console.log(b); 

// // Array Methods - Manipulation

// // - 11

// let arr = [1, 2, 3];
// arr1.push(4, 5);
// console.log(arr1);

// // - 12

// let arr3 = [1, 2, 3];
// arr2.pop();
// arr2.pop();
// console.log(arr3); 

// // - 13

// let arr4 = [3, 4, 5];
// arr3.unshift(1, 2);
// console.log(arr4); 

// // - 14

// let arr5 = [1, 2, 3, 4];
// arr4.shift();
// console.log(arr5); 

// // - 15

// let arr6 = [10, 20, 30, 40, 50];
// arr5.splice(1, 2, 99, 100); 
// console.log(arr6); 

// // Array Methods - Merge, Slice, Flat, Fill

// // - 16

// let arr7 = [1, 2];
// let arr8 = [3, 4];
// let merged3 = arr7.concat(arr8);
// console.log(merged3); 

// // - 17

// let nums1 = [5, 6, 7, 8, 9];
// let sliced = nums1.slice(1, 3);
// console.log(sliced); 

// // - 18

// let nested = [1, [2, [3, [4]]]];
// let flatArray = nested.flat(Infinity);
// console.log(flatArray); 

// // - 19

// let filled = new Array(5).fill('Hello');
// console.log(filled);

// // - 20

// let deepArr = [1, 2, 3, [4, [5, 6]]];
// let flatArr = deepArr.flat(Infinity);
// console.log(flatArr); 


 19-8-2025

  // - 1

let nums = [45, 12, 3, 99, 23, 8];

let asc = [...nums].sort((a, b) => a - b);

console.log("Ascending:", asc);

let desc = [...nums].sort((a, b) => b - a);

console.log("Descending:", desc)
  
  // - 2

let colors = ["red", "blue", "green", "yellow"];

if (!colors.includes("pink")) {
  colors.push("pink");
}
console.log(colors);
  
  // - 3

let arr = ["HTML", "CSS", "JS"];

console.log("join('-'):", arr.join("-"));   

console.log("toString():", arr.toString());
  
  // - 4

let items = ["pen", "book", "pen", "pencil", "pen"];

console.log("First index:", items.indexOf("pen"));  

console.log("Last index:", items.lastIndexOf("pen"));
  
  // - 5

let students = ["Kamal", "Sita", "Ravi"];

students.forEach(name => console.log(name));

let newArr = students.map(name => "Student: " + name);

console.log(newArr);
  
  // - 6
  
  let products = [
  {name: "Laptop", price: 45000},
  {name: "Phone", price: 20000},
  {name: "Tablet", price: 20000},
  {name: "Monitor", price: 12000}
];

let filtered = products.filter(p => p.price === 20000);

console.log("Filtered:", filtered);

let found = products.find(p => p.price === 20000);

console.log("Found:", found);

  // - 7

let numbers = [5, 10, 15, 20, 25];

let sum = numbers.reduce((acc, num) => acc + num, 0);

console.log("Sum:", sum);
  
  // - 8

let ages = [22, 18, 25, 30, 16];

console.log("Any under 18?", ages.some(age => age < 18)); 
console.log("All above 15?", ages.every(age => age > 15));

 // - 9

let str = "Hello World";

let replaced = str.replace("World", "JavaScript");
console.log("Replaced:", replaced);

let sliced = str.slice(0, 5);
console.log("Sliced:", sliced);

 // - 10

let sentence = "I love coding";

let words = sentence.split(" ");

console.log("Split:", words);
console.log("Repeat:", sentence.repeat(3));

 

   


















   
     

 












 












