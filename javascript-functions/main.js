// IIFE
const module = (function() {
    let privateVar = 0;
    return {
        getVar: function() { return privateVar; },
        setVar: function(value) { privateVar = value; }
    };
})();

console.log(module.getVar()); // returns 0
module.setVar(42);            // sets 42
console.log(module.getVar()); // returns 42

// CLOSURES
function createSimpleCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = createSimpleCounter();
console.log(counter()); // returns 1
console.log(counter()); // returns 2

// HIGHER-ORDER
function filterArray(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5];
const evens = filterArray(numbers, x => x % 2 === 0);
console.log(evens); // returns [2, 4]

// RECURSION
function fibonacci(n) {
    // Casos base
    if (n === 0) return 0;
    if (n === 1) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); // returns 5 (0, 1, 1, 2, 3, 5)
console.log(fibonacci(7)); // returns 13 (0, 1, 1, 2, 3, 5, 8, 13)
