// -----------------------------declare date -------------------------------
// Qno:01
// var date = new Date ();
// document.write(date);
// ---------------------------GREETING WITH USERNAME--------------------------
// Qno:02
// function yourName()
// {
//     var fname = prompt("Enter first Name");
//     var lname = prompt("Enter last Name");
//     var fullName = fname + " " + lname; 
//     return fullName;
// }
// var add = yourName();
// document.write("Have A Nice Day " + add);
// -------------------------------SUM-------------------------
// Qno:03
//   function addtwoNum()
//   {
//     var num1 = +prompt("Enter Value1")
//     var num2 = +prompt("Enter Value2")
//     var sum = num1+num2
//     return sum;
//   }
// var result = addtwoNum()
// document.write("The sum of the two numbers is: " + result)
// ------------------------------CALCULATOR--------------------------------
// Qno:04
// var num1 = +prompt("Enter value 1");
// var oper = prompt("Enter Operator");
// var num2 = +prompt("Enter value 2");
<<<<<<< HEAD

// function Operator(num1, num2, oper) {
//     if (oper == "+") {
//         return num1 + num2;
//     } else if (oper == "-") {
//         return num1 - num2;
//     } else if (oper == "*") {
//         return num1 * num2;
//     } else if (oper == "/") {
//         if (num2 !== 0) {
//             return num1 / num2;
//         } else {
//             return "Error: Division by zero";
//         }
//     } else {
//         return "Error: Invalid operator";
//     }
// }

// var result = Operator(num1, num2, oper);
// document.write("The result of " + num1 + " " + oper + " " + num2 + " is: " + result);
// ------------------------------------------SQUARE VALUE ---------------------------------
// Qno:05
// function square(x)
// {
//   return x*x
// }
// alert(square(5))
// ---------------------------------FACTORIAL NUM ---------------------------------------------------
// Qno:06
// function factorial()
// {
//     var num = +prompt("Enter the number");
//     if(num<0)
//     {
//         alert("Error:")
//     }
//     else{
//         var result = 1
//         for(var i = 1; i<=num; i++)
//         {
//          result*=i
//         }
//         alert( "the factorial is " + num + " " +  result)
//     }
// }
// factorial()
// -----------------------------------------------Hypotenus---------------------------------------------
// Qno:07
// // AS VARIABLE
// var width = 10
// var height = 10
// function area ()
// {
//     return  width * height
// }
// alert(area(width * height))

// // AS VALUE
// function area(w,h)
// {
//     return w*h
// }
// alert(area(5,6))

// Qno:08
// var num1 = parseInt(prompt("Enter the num where counting starts"));
// var num2 = parseInt(prompt("Enter the num where counting ends"));

// function counting() {
//     for (var i = num1; i <= num2; i++) {
//         document.write(i + "<br>");
//     }
// }

// counting();
// ----------------------------------------Palandrom------------------------------------------------------
// Qno:10
// function palandrom()
// {
    
//     var palan = prompt("Enter Palandrom Words")
//     var len = palan.length;
//     for(var i = 0; i<len/2; i++)
//     {
//         if(palan[i] !== palan[len -i -1])
//         {
//             return palan + " is not palandrom"
//         }
//         else
//         {
//             return palan + " is palandrom"
//         }
//     }
// }
// alert(palandrom());

// Qno:9
//  ----------------------------------------Title Case With Fun -------------------------------------------------------
// function capatalizeword(string) {
//     var words = string.split(" ");
//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).tolowerCase;
//     }
//     return words.join(" ");
// }
// let exampleString = 'the quick brown fox';
// let capitalizedString = capatalizeword(exampleString);
// document.write(capitalizedString);
// ----------------------------------------Title Case Without Fun -------------------------------------------------------
// var sentance = "we are studing jAvAscrIpt"
// var word = sentance.split(" ");
// var titleCase = ""
// for (var i = 0; i<word.length ; i++)
// {
//     titleCase += word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase()+ " ";
// }
// console.log(titleCase)
// -------------------------- largest word of array ---------------------
// var web = "web development tutorial";
// var brek = web.split(" ");
// var store = "";
// var maximumlength = 0;

// for (var i = 0; i < brek.length; i++) {
//   if (brek[i].length > maximumlength) {
//     store = brek[i];
//     maximumlength = brek[i].length; // Corrected from '==' to '='
//   }
// }

// // Display the longest word and its length
// document.write(store + " is the longest word with length " + maximumlength);
// -------------------------- largest word of array ---------------------
// function findLargestNum() 
// {  
//     var sentence = prompt("Enter any sentence...");
//    var words = sentence.split(" ");
//    var longestWord = "";
//    var maximumLength = 0;
//    for (var i = 0; i < words.length; i++) {
//      if (words[i].length > maximumLength) {
//        longestWord = words[i];
//        maximumLength = words[i].length;
//      }
//    }
 
//    return longestWord;
//  }
 
//  document.write("The longest word is: " + findLargestNum());

// ---------------------Find repeate Letter-----------------------
// function countOccurrences(string, letter) {
//    let count = 0;
//    for (let i = 0; i < string.length; i++) {
//      if (string[i] === letter) {
//        count++;
//      }
//    }
//    return count;
//  }

//  const result = countOccurrences('JSResourceS.com', 'o');
// alert(result + " occurance is in alert ");  
// --------- Calculate the circumfarance and area of circle -------------
// Calculate the circumfarance 
// function calcCircumference()
// {
//    var radius = 61;
//    var circum = 2*Math.PI*radius
//    return "the circumfarance of circle is " + circum
// }
// document.write(calcCircumference());
// calculate the area of circle 
// function calculateArea()
// {
//    var radius = 50;
//    var area = Math.PI * Math.pow(radius, 2);
//    return "the area of circle is " + area;
// }
// document.write(calculateArea());

 
 

// function Operator(num1, num2, oper) {
//     if (oper == "+") {
//         return num1 + num2;
//     } else if (oper == "-") {
//         return num1 - num2;
//     } else if (oper == "*") {
//         return num1 * num2;
//     } else if (oper == "/") {
//         if (num2 !== 0) {
//             return num1 / num2;
//         } else {
//             return "Error: Division by zero";
//         }
//     } else {
//         return "Error: Invalid operator";
//     }
// }

// var result = Operator(num1, num2, oper);
// document.write("The result of " + num1 + " " + oper + " " + num2 + " is: " + result);

// Qno:05
// function square(x)
// {
//   return x*x
// }
// alert(square(5))

// Qno:06
// function factorial()
// {
//     var num = +prompt("Enter the number");
//     if(num<0)
//     {
//         alert("Error:")
//     }
//     else{
//         var result = 1
//         for(var i = 1; i<=num; i++)
//         {
//          result*=i
//         }
//         alert( "the factorial is " + num + " " +  result)
//     }
// }
// factorial()

// Qno:07
// AS VARIABLE
// var width = 10
// var height = 10
// function area ()
// {
//     return  width * height
// }
// alert(area(width * height))

// AS VALUE
// function area(w,h)
// {
//     return w*h
// }
// alert(area(5,6))

// Qno:08
// var num1 = parseInt(prompt("Enter the num where counting starts"));
// var num2 = parseInt(prompt("Enter the num where counting ends"));

// function counting() {
//     for (var i = num1; i <= num2; i++) {
//         document.write(i + "<br>");
//     }
// }

// counting();

// Qno:09
// function capatalizeword(string) {
//     var words = string.split(" ");
//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     return words.join(" ");
// }

// let exampleString = 'the quick brown fox';
// let capitalizedString = capatalizeword(exampleString);
// document.write(capitalizedString);

