//Reverse a String: Write a function that reverses a given string
function reverseString(a){
return a.split("").reverse().join("");
}
console.log(reverseString("hello"))


//Reverse a String: Write a function that reverses a given string part 2
function reverseString(str){
    let element = " ";
    for (let index = str.length-1; index >= 0; index--) {
        element += str[index]; 
    }
    return console.log ( element );
}
reverseString("hello")
// Count Characters: Create a function that counts the number of characters in a string.

let arras = "furthermathematics";
let azzaz = arras.split("");
function testing(arr){

    for(let i =1; i<arr.length; i++){
       
    }
     console.log(arr.length);
}
testing(azzaz)
// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function captilize(arr){
    let store1 = arr.split(" ");

for(let i = 0; i<store1.length; i++){
    store1[i] = store1[i].charAt(0).toUpperCase() + store1[i].slice(1);
} 
return console.log ( store1.join(" ") );
}
captilize("messi is the best player in the world")
// to get the biggest no
function findMax(arr){
    let max = arr[0]; // 10 
for(let i = 1 ; i<arr.length; i++){
if( arr[i]  > max){
    max = arr[i]; }
}
return max;
}

let numbers = [10,20,100,200,300,400];

// Find the maximum value in the array using the findMax function
let maxNumber = findMax(numbers);
console.log("The maximum number is:", maxNumber); 
// find minimum
function findMin(arr){
    let min = arr[0] ;
    for(let i = 1; i<arr.length; i++){
if( arr[i]<min){
min = arr[i];
}
}
return `The minimum number is ${min}`;
    
}
let numbersz = [10,20,100,200];
console.log (findMin(numbersz))

// sum of array
function sumofarray(arr){
let store = 0;
for(let i = 0; i<arr.length; i++){
    store+=arr[i]
}
return console.log ( store )
}
let arrax = [10,20,30,40,50];
sumofarray(arrax);