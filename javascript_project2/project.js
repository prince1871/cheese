// String Manipulation Functions

function reverseString(s) {
    return s.split('').reverse().join('');
}
// Example usage:
const originalString = "hello";
const reversedString = reverseString(originalString);
console.log(reversedString);  // Output: "olleh"

function countCharacters(s) {
    return s.length;
}
// Example usage
const string = "hello";
console.log(countCharacters(string));  // Output: 5

function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
}
// Example usage
const sentence = "hello world";
const capitalizedSentence = capitalizeWords(sentence);
console.log(capitalizedSentence);  // Output: "Hello World"


// Array Functions

function findMax(arr) {
    if (arr.length === 0) return undefined;
    let maxValue = arr[0];
    for (let num of arr) {
        if (num > maxValue) {
            maxValue = num;
        }
    }
    return maxValue;
}
function findMin(arr) {
    if (arr.length === 0) return undefined;
    let minValue = arr[0];
    for (let num of arr) {
        if (num < minValue) {
            minValue = num;
        }
    }
    return minValue;
}
// Example usage
const Numbers = [3, 1, 4, 1, 5, 9, 2];
console.log("Max:", findMax(numbers));  // Output: Max: 9
console.log("Min:", findMin(numbers));  // Output: Min: 1

function sumOfElements(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

// Example usage
const num = [1, 2, 3, 4, 5];
console.log("Sum:", sumOfElements(numbers));  // Output: Sum: 15

function filterElements(arr, condition) {
    return arr.filter(condition);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6];
// Define a condition function
const isEven = num => num % 2 === 0;

const filteredNumbers = filterElements(numbers, isEven);
console.log("Filtered:", filteredNumbers);  // Output: Filtered: [2, 4, 6]


