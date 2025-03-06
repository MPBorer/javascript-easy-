// Q1) return the sum of two numbers ///////////////////////////////
//      create a function that takes two arguments as functioins and 
//      return their sum.

//  addition (3, 2)-->5
//  addition (-3, -6)->-9
//  addition (7, 3)-->10

// --------solution------------------------------------------------
   function addition(num1, num2){
    return num1 + num2
}
console.log(addition(3, 2))
console.log(addition(-3, -6))
console.log(addition(7, 3))

// Q2)convert hours to seconds//////////////////////////////////////
//    ---create function that converts hours into seconds. 
//     hoursIntoSeconds(2)---->7200
//     hoursIntoSeconds(10)--->3600
//     hoursIntoSeconds(24)--->86400

// ---------solution-----------------------------------------------
// single line solution--------------------------------------------

function hoursIntoSeconds(hour){
    return hour * 60 * 60
}

// // longer form solution----------------------------------------

function hoursIntoSeconds(hour){
    let minutes = hour * 60
    let seconds = minutes * 60
    return seconds
}

console.log(hoursIntoSeconds(2))
console.log(hoursIntoSeconds(10))
console.log(hoursIntoSeconds(24))

// Q3) calculate the perimeter of a rectangle///////////////////////
//   ----create a function that takles length and width of a rectangle
//     and return its perimeter.a
    
//     calcPerimeter(6, 7)--->26
//     calcPerimeter(20, 10)->60
//     calcPerimeter(2, 9)--->22
// --------------Solution-----------------------------------------
function calcPerimeter(length, width){
          return length * 2 + width * 2 
/* or */  return 2 * (length + width)
}
console.log(calcPerimeter(6, 7))
console.log(calcPerimeter(20, 10))
console.log(calcPerimeter(2, 9))

// Q4) calculate the area of a triangle////////////////////////////
//   write a function that takes the base and height of a triangle and 
//   return its area (triangle area formula is 0.5 * base * height)

//   calcTriangleArea(3, 2)--->3
//   calcTriangleArea(10, 10)->50
//   calcTriangleArea(20, 20)->200
// ----------------Solution---------------------------------------
function calcTriangleArea(base, height){
    return 0.5 * base * height
}
console.log(calcTriangleArea(3, 2))
console.log(calcTriangleArea(10,10))
console.log(calcTriangleArea(20,20)) 

// Q5) extend a String/////////////////////////////////////////////
//   write a function accepts a string and adds `frontend` onto the 
//   end of instanceof.

//   appendFrontend(`apple`)---->`appleFrontend`
//   appendFrontend(`banana`)--->`bananaFrontend`
//   appendFrontend(`orange`)--->`orangeFrontend`
// ---------------Solution-------------------------------------
function appendFrontend(string){
     return string + `Frontend`
}
console.log(appendFrontend(`apple`))
console.log(appendFrontend(`banana`))
console.log(appendFrontend(`orange`))

// Q6) Greater than 100////////////////////////////////////////////
//   given 2 numbers return true if the sum of both numbers is greater 
//   than 100 otherwise return false. 

//   sumGreaterThan100(20, 10)---->false
//   sumGreaterThan100(50, 60)---->true
//   sumGreaterThan100(100, -50)-->false
// ------------solution----------------
// ---------------------------simple-------------------------
 function sumGreaterThan100(num1, num2){
    return num1 + num2 > 100
 }
 console.log(sumGreaterThan100(20, 10))
 console.log(sumGreaterThan100(50, 60))
 console.log(sumGreaterThan100(100, -50))
//  ------------------------longer solution-------------------
function sumGreaterThan100(num1, num2){
    let total = num1 = num2
    return total > 100
}
console.log(sumGreaterThan100(20, 10))
console.log(sumGreaterThan100(50, 60))
console.log(sumGreaterThan100(100, -50))
// ------------------ longest Solution w If/Else--------------
function sumGreaterThan100(num1, num2){
    if (num1 + num2 > 100) {
        return true
   }
   else{
       return false 
    }
}
console.log(sumGreaterThan100(20, 10))
console.log(sumGreaterThan100(50, 60))
console.log(sumGreaterThan100(100, -50))

// Q7)less than or equal to 0. //////////////////////////////////////
// write a function that accepts a number and returns true if it is 
// less than or equal to zero otherwise return false.

// lessThanOrEqualToZero(3)--->false
// lessThanOrEqualToZero(0)--->true
// lessThanOrEqualToZero(-2)-->true
// --------------------solution------------------------------
function lessThanOrEqualToZero(number){
    return number <= 0
}
console.log(lessThanOrEqualToZero(3))
console.log(lessThanOrEqualToZero(0))
console.log(lessThanOrEqualToZero(-2))

// Q8)opposite boolean//////////////////////////////////////////////
//   given a boolean (true, false) return the opposite boolean.

// oppositeBoolean(true)--->false
// oppositeBoolean(false)-->true
// ---------------------solution-----------------------------
// -----------------simple Solution--------------------------
function oppositeBoolean(value){
    return !value
}
console.log(oppositeBoolean(true))
console.log(oppositeBoolean(false))
// ------------------If/Else Solution------------------------
function oppositeBoolean(bool){
    if (bool === false){
        return true;
    }
    else{
        return false;
    }
}
console.log(oppositeBoolean(true))
console.log(oppositeBoolean(false))

// Q9)is not the number 0///////////////////////////////////////////
//  Given any element, return true if it is not the number 0.

//  isNotZero(5)----->true
//  isNotZero(0)----->false 
//  isNotZero(null)-->true 
// -----------------------solution---------------------------
function isNotZero(number){
    return number !== 0
}
console.log(isNotZero(5))
console.log(isNotZero(0))
console.log(isNotZero(null))
// ----------------------If/Else Solution--------------------
function isNotZero(num){
    if (num !== 0){
        return true 
    }
    else {return false}
}
console.log(isNotZero(5))
console.log(isNotZero(0))
console.log(isNotZero(null))

// Q10)calculate the remainder ////////////////////////////////////////
// given the two numbers, return their remainder when divided by
// each other. 

// calcRemainder(4, 2)---->0
// calcRemainder(7, 8)---->7
// calcRemainder(9, 8)---->1
// --------------------solution-------------------------------
function calcRemainder(num1, num2){
    return num1 % num2
}
console.log(calcRemainder(4, 2))
console.log(calcRemainder(7, 8))
console.log(calcRemainder(9, 8))

// Q11) is the number odd?////////////////////////////////////////
// given the two numbers, return true is the number is odd.

// isOdd(1)--->true
// isOdd(2)--->false
// isOdd(3)--->true
// ------------------------solution----------------------------
// -----------------simple Solution--------------------------
function isOdd(number){
    return number % 2 === 0
}
console.log(isOdd(1))
console.log(isOdd(2))
console.log(isOdd(3))
// -----------------IF/Else Solution--------------------------
function isOdd(number){
    if (number % 2 === 0){
        return false 
    }
    return true
}
console.log(isOdd(1))
console.log(isOdd(2))
console.log(isOdd(3))

// Q12) if a number is even return 1 otherwise return -1//////////
//  create a function that takes a number argument and returns 1 if the 
//  number is even. if the number is off return -1.

//  booleanInteger(1)----->-1
//  booleanInteger(2)----->1
//  booleanInteger(5)----->-1
// ------------------solution------------------------------------
// -----------------simple Solution--------------------------
function booleanInteger(number){
     number % 2 === 0 ? 1 : -1
}
console.log(booleanInteger(1))
console.log(booleanInteger(2))
console.log(booleanInteger(5))
// ----------------IF/Else Solution--------------------------
function booleanInteger(number){
    if (number % 2 === 0) {
        return 1
    }
    return -1
}
console.log(booleanInteger(1))
console.log(booleanInteger(2))
console.log(booleanInteger(5))