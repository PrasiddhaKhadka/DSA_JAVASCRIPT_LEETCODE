# JavaScript Array Methods Guide

A comprehensive overview of commonly used JavaScript array methods with practical examples.

## Array Manipulation Methods

### concat()
Combines two or more arrays without modifying the original arrays, returning a new array.

```javascript
const fruits = ['Apple', 'Mango', 'Orange']
const addedFruits = fruits.concat(['Litchi', 'Grapes'])
// Result: ['Apple', 'Mango', 'Orange', 'Litchi', 'Grapes']
```

## Searching and Finding

### indexOf()
Returns the first index at which a given element is found, or -1 if not present.

```javascript
fruits.indexOf('Apple') // Returns: 0
```

### lastIndexOf()
Returns the last index at which a given element is found, or -1 if not present.

```javascript
addedFruits.lastIndexOf('Litchi') // Returns: 3
```

### find()
Returns the first element that satisfies the provided testing function.

```javascript
const searching = addedFruits.find((fruit) => {
    return fruit === 'Mango'
})
// Returns: 'Mango'
```

### includes()
Checks if an array contains a specific element, returning true or false.

```javascript
fruits.includes('Apple') // Returns: true
```

## Iteration Methods

### for...of Loop
Iterates over array values directly.

```javascript
for (let fruit of fruits) {
    console.log(fruit) // Logs: 'Apple', 'Mango', 'Orange'
}
```

### for...in Loop
Iterates over array indices (not recommended for arrays, better for objects).

```javascript
for (let fruit in fruits) {
    console.log(fruit) // Logs: 0, 1, 2
}
```

### forEach()
Executes a function for each array element.

```javascript
fruits.forEach((fruit, index) => console.log(fruit))
```

## Transformation Methods

### map()
Creates a new array by transforming each element with a provided function.

```javascript
const newFruitsPrice = fruits.map((fruit, index) => {
    return {
        "count": index + 1,
        "name": fruit,
        "price": 10.00
    }
})
// Returns array of objects with count, name, and price properties
```

## Sorting Methods

### sort()
Sorts array elements in place. For numbers, a compare function is needed for correct sorting.

```javascript
const prices = [10.2, 3.3, 5.5, 20, 60, 5]
const sortedPrice = prices.sort((a, b) => {
    if (a > b) return 1
    else if (a == b) return 0
    else return -1
})
// Returns: [3.3, 5, 5.5, 10.2, 20, 60]
```

**Simplified version:**
```javascript
prices.sort((a, b) => a - b) // Ascending order
```

### reverse()
Reverses the array in place.

```javascript
sortedPrice.reverse()
// Returns: [60, 20, 10.2, 5.5, 5, 3.3]
```

## Filtering Methods

### filter()
Creates a new array with elements that pass a test function.

```javascript
const filteredArray = sortedPrice.filter((price) => {
    return price < 6
})
// Returns: [5.5, 5, 3.3]
```

## Reduction Methods

### reduce()
Executes a reducer function on each array element, resulting in a single output value. It's commonly used for calculating totals, combining values, or transforming arrays into single values.

```javascript
const prices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

const sum = prices.reduce((previousValue, currentValue, currentIndex, prices) => {
    return previousValue + currentValue
}, 0)
// Returns: 550
```

**Parameters:**
- `previousValue` (accumulator): The accumulated result from previous iterations
- `currentValue`: The current element being processed
- `currentIndex`: The index of the current element
- `prices`: The original array being reduced
- `0`: Initial value for the accumulator

**Simplified version:**
```javascript
const sum = prices.reduce((acc, curr) => acc + curr, 0)
```

**Common use cases:**
```javascript
// Finding maximum value
const max = prices.reduce((max, curr) => curr > max ? curr : max, prices[0])

// Counting occurrences
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1
    return acc
}, {})
// Returns: { apple: 3, banana: 2, orange: 1 }
```

## Key Takeaways

- **Non-mutating methods**: concat(), map(), filter(), find(), reduce() return new arrays or values
- **Mutating methods**: sort(), reverse() modify the original array
- **for...of** is preferred for iterating over array values
- **for...in** iterates over indices but is better suited for objects
- Always use a compare function with sort() when working with numbers
- reduce() is powerful for aggregating array values into a single result