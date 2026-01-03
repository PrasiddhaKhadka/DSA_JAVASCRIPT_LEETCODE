# JavaScript String and Array Transformation Methods

A guide to transforming strings into arrays and back, with practical examples of manipulation.

## String to Array: split()

The `split()` method divides a string into an array of substrings based on a specified separator.

```javascript
const myName = 'John Cena'
const transformedData = myName.split(' ')

console.log(transformedData) // ['John', 'Cena']
```

### split() Parameters

**Syntax:** `string.split(separator, limit)`

- `separator`: The character or pattern where the string should be split
- `limit` (optional): Maximum number of splits to perform

### Common Use Cases

```javascript
// Split by space
'Hello World'.split(' ') // ['Hello', 'World']

// Split by comma
'apple,banana,orange'.split(',') // ['apple', 'banana', 'orange']

// Split into individual characters
'Hello'.split('') // ['H', 'e', 'l', 'l', 'o']

// Split with limit
'a-b-c-d-e'.split('-', 3) // ['a', 'b', 'c']

// Split by multiple characters
'Hello::World'.split('::') // ['Hello', 'World']
```

## Array Manipulation: reverse()

The `reverse()` method reverses the order of elements in an array **in place** (modifies the original array).

```javascript
const transformedData = ['John', 'Cena']
const reversedData = transformedData.reverse()

console.log(reversedData) // ['Cena', 'John']
console.log(transformedData) // ['Cena', 'John'] (also changed!)
```

### Important Note

`reverse()` is a **mutating method**—it changes the original array. If you need to keep the original:

```javascript
const original = ['John', 'Cena']
const reversed = [...original].reverse()

console.log(original) // ['John', 'Cena'] (unchanged)
console.log(reversed) // ['Cena', 'John']
```

## Array to String: join()

The `join()` method combines all array elements into a single string, separated by a specified separator.

```javascript
const reversedData = ['Cena', 'John']
const joinedData = reversedData.join(' ')

console.log(joinedData) // 'Cena John'
```

### join() Parameters

**Syntax:** `array.join(separator)`

- `separator` (optional): String to separate array elements (default is comma)

### Common Use Cases

```javascript
// Join with space
['Hello', 'World'].join(' ') // 'Hello World'

// Join with comma
['apple', 'banana', 'orange'].join(', ') // 'apple, banana, orange'

// Join without separator
['H', 'e', 'l', 'l', 'o'].join('') // 'Hello'

// Join with hyphen
['2024', '01', '15'].join('-') // '2024-01-15'

// Default join (comma)
['a', 'b', 'c'].join() // 'a,b,c'
```

## Complete Transformation Example

Here's the full workflow from the code example:

```javascript
const myName = 'John Cena'

// Step 1: Split string into array
const transformedData = myName.split(' ')
// Result: ['John', 'Cena']

// Step 2: Reverse the array
const reversedData = transformedData.reverse()
// Result: ['Cena', 'John']

// Step 3: Join array back into string
const joinedData = reversedData.join(' ')
// Result: 'Cena John'

console.log(joinedData) // 'Cena John'
```

### One-Liner Version

```javascript
const myName = 'John Cena'
const reversed = myName.split(' ').reverse().join(' ')
console.log(reversed) // 'Cena John'
```

## Practical Applications

### Reversing Words in a Sentence

```javascript
const sentence = 'Hello World JavaScript'
const reversedWords = sentence.split(' ').reverse().join(' ')
// 'JavaScript World Hello'
```

### Reversing Individual Characters

```javascript
const word = 'Hello'
const reversedChars = word.split('').reverse().join('')
// 'olleH'
```

### Creating URL Slugs

```javascript
const title = 'JavaScript Array Methods Guide'
const slug = title.toLowerCase().split(' ').join('-')
// 'javascript-array-methods-guide'
```

### Converting CSV to Array

```javascript
const csv = 'apple,banana,orange,grape'
const fruits = csv.split(',')
// ['apple', 'banana', 'orange', 'grape']
```

### Building Formatted Strings

```javascript
const date = ['2024', '01', '15']
const formatted = date.join('/') // '2024/01/15'
```

## Method Comparison

| Method | Type | Mutates Original? | Returns |
|--------|------|-------------------|---------|
| `split()` | String method | No | Array |
| `reverse()` | Array method | **Yes** | Reversed array |
| `join()` | Array method | No | String |

## Key Takeaways

- `split()` converts strings to arrays based on a separator
- `reverse()` reverses array order **in place** (mutates original)
- `join()` combines array elements into a string with a separator
- These methods can be chained for efficient transformations
- Always be aware that `reverse()` modifies the original array
- Use the spread operator `[...array]` before `reverse()` to preserve the original