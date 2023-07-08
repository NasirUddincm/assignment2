// Excercise 1
const obj = { name: 'John', age: 30, city: 'New York' };
const arr = [10, 20, 30, 40];
function destructureExample(obj, arr) {
    const { name, age } = obj;
    const [index0, , index2] = arr;
  
    return { name, age, index0, index2 };
  }
console.log(destructureExample(obj, arr))
function destructureExample(obj, arr) {
    const { name, age } = obj;
    const [index0, , index2] = arr;
  
    return { index0, index2 };
}
console.log(destructureExample(obj, arr))

// Exercise  2
function sumNumbers(...numbers) {
    return numbers.reduce((sum, number) => sum + number);
  }
  
console.log(sumNumbers(1, 2, 3, 4, 5));

// Exercise 3
function createGreeting(name) {
    return `Hello, ${name}! Welcome to our website.`;
  }

console.log(createGreeting('Alice'));

// Exercise 4
function isEven(number) {
    return number % 2 === 0 ? "Even" : "Odd";
  }  
console.log(isEven(7));
  
// Exercise 5
const multiply = (a, b) => {
    return a * b;   
  }
const multiply2 = (a, b) => a * b;

// Exercise 6
function getLargestNumber(a, b) {
    return a > b ? a : b;
  }  
console.log(getLargestNumber(10, 5));

function getLargestNumber(a, b) {
    return a && b ? (a > b ? a : b) : a || b;
  }
  
  console.log(getLargestNumber(10, 5));
  
// Exercise 7
function getAddressCity(address) {
    return address?.city || "Unknown";
  }
const address = { street: '123 Main St', country: 'USA' };
 console.log(getAddressCity(address));
  
// Exercise 8
function doubleNumbers(numbers) {
    return numbers.map(number => number * 2);
  }
  
const numbers = [1, 2, 3, 4, 5];
console.log(doubleNumbers(numbers));
  
// Exercise 9
function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
  }  
const numbers = [1, 2, 3, 4, 5];
console.log(filterEvenNumbers(numbers));
  
// Exercise 10
function sumArray(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
  }
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers));
  
// Exercise 11
function sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }
  
const numbers = [5, 2, 8, 1, 4];
console.log(sortNumbers(numbers));
  