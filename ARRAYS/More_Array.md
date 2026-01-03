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

## Key Takeaways

- **Non-mutating methods**: concat(), map(), filter(), find() return new arrays
- **Mutating methods**: sort(), reverse() modify the original array
- **for...of** is preferred for iterating over array values
- **for...in** iterates over indices but is better suited for objects
- Always use a compare function with sort() when working with numbers