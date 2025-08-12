


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
// }


 12-8-2025

 // - 1

 function isMagicNumber(num) {
  if (num % 3 === 0 && num % 7 === 0) {
    console.log("* It's magic!");
  } else {
    console.log("Not magic");
  }
}

isMagicNumber(21);
isMagicNumber(10);

// - 2

let shoutName = function(name) {
    console.log(name.toUpperCase() + "!!!");
};

shoutName("chris");

// - 3

const tellFortune = (name, place = "Unknown") => {
    console.log(`Dear ${name}, you will travel to ${place} soon!`);
};

tellFortune("Chris", "London");
tellFortune("James");

// - 4

function scopeDetective() {
    if (true) {
        var varVariable = "I am var!";
        let letVariable = "I am let!";
        const constVariable = "I am const!";

        console.log("Inside block - var:", varVariable);
        console.log("Inside block - let:", letVariable);
        console.log("Inside block - const:", constVariable); 
    }

    console.log("Outside block - var:", varVariable); 

    try {
        console.log("Outside block - let:", letVariable); 
    } catch (error) {
        console.log("Outside block - let: Not accessible (" + error.message + ")");
    }

    try {
        console.log("Outside block - const:", constVariable);
    } catch (error) {
        console.log("Outside block - const: Not accessible (" + error.message + ")");
    }
}

scopeDetective();

// - 5

const sumNumbers = (a, b) => a + b;

console.log(sumNumbers(1, 6));


 










   
     

 












 












