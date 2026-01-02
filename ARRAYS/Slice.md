# 📌 Understanding `slice()` in JavaScript

The `slice()` method in JavaScript is used to **copy parts of an array** or **create a duplicate of an existing array** without affecting the original.

---

## ✨ Example

```js
const testResults = [1, 5.3, 1.5, 10.99, -5, 10, 100];

const newResults = testResults.slice(); // Creates a copy of the array

newResults[2] = 50; // Changing the copied array

console.log(testResults); // Original array stays the same
console.log(newResults);  // Only the copied array is changed
```


```
Outputs:

[1, 5.3, 1.5, 10.99, -5, 10, 100]
[1, 5.3, 50, 10.99, -5, 10, 100]

```


### 🎯 Extracting Specific Elements

``
console.log(testResults.slice(2, 3));
``


### 📤 Output:
```
[1.5]
```