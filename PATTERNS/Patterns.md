# Pattern Logic in Programming

## Understanding Pattern Structure

When working with patterns in programming, the key is understanding the relationship between rows and columns (or positions within each row).

## Basic Framework

**Outer Loop → Controls ROWS (how many lines to print)**
**Inner Loop → Controls COLUMNS (what to print in each row)**

---

## Core Concepts

### 1. Outer Loop: Row Control

* Determines **how many lines** the pattern will have
* Usually runs from `1` to `n` (where `n` is the size of the pattern)
* Each iteration represents one complete row

### 2. Inner Loop: Column Control

* Determines **what gets printed** in each row
* Can control:

  * Number of spaces (for alignment)
  * Number of symbols/characters
  * Position-based decisions

---

## Common Pattern Types

### Rectangle Pattern

```
****
****
****
****
```

**Logic Breakdown:**

* Outer loop runs 4 times (4 rows)
* Inner loop prints 4 stars each time

**JavaScript Code:**

```javascript
function rectangle(n) {
    for (let i = 1; i <= 4; i++) {
        let row = "";
        for (let j = 1; j <= 4; j++) {
            row += "*";
        }
        console.log(row);
    }
}
rectangle(4);
```

---

### Right Triangle

```
*
**
***
****
```

**Logic Breakdown:**

* Outer loop controls rows
* Inner loop prints `i` stars

**JavaScript Code:**

```javascript
function rightTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += "*";
        }
        console.log(row);
    }
}
rightTriangle(4);
```

---

### Inverted Triangle

```
****
***
**
*
```

**Logic Breakdown:**

* Stars decrease each row: `n - i + 1`

**JavaScript Code:**

```javascript
function invertedTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n - i + 1; j++) {
            row += "*";
        }
        console.log(row);
    }
}
invertedTriangle(4);
```

---

### Pyramid

```
   *
  ***
 *****
*******
```

**Logic Breakdown:**

* Spaces = `n - i`
* Stars = `2 * i - 1`

**JavaScript Code:**

```javascript
function pyramid(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n - i; j++) row += " ";
        for (let k = 1; k <= 2 * i - 1; k++) row += "*";
        console.log(row);
    }
}
pyramid(4);
```

---

### Inverted Pyramid

```
*******
 *****
  ***
   *
```

**Logic Breakdown:**

* Spaces = `i - 1`
* Stars = `2 * (n - i + 1) - 1`

**JavaScript Code:**

```javascript
function invertedPyramid(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j < i; j++) row += " ";
        for (let k = 1; k <= 2 * (n - i + 1) - 1; k++) row += "*";
        console.log(row);
    }
}
invertedPyramid(4);
```

---

### Diamond Pattern

```
   *
  ***
 *****
*******
 *****
  ***
   *
```

**JavaScript Code:**

```javascript
function diamond(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n - i; j++) row += " ";
        for (let k = 1; k <= 2 * i - 1; k++) row += "*";
        console.log(row);
    }
    for (let i = n - 1; i >= 1; i--) {
        let row = "";
        for (let j = 1; j <= n - i; j++) row += " ";
        for (let k = 1; k <= 2 * i - 1; k++) row += "*";
        console.log(row);
    }
}
diamond(4);
```

---

### Hollow Rectangle

```
****
*  *
*  *
****
```

**JavaScript Code:**

```javascript
function hollowRectangle(rows, cols) {
    for (let i = 1; i <= rows; i++) {
        let row = "";
        for (let j = 1; j <= cols; j++) {
            if (i === 1 || i === rows || j === 1 || j === cols) row += "*";
            else row += " ";
        }
        console.log(row);
    }
}
hollowRectangle(4, 4);
```

---

## Number Patterns

### Incrementing Numbers

```
1
12
123
1234
```

```javascript
function numberPattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) row += j;
        console.log(row);
    }
}
numberPattern(4);
```

---

### Row Number Pattern

```
1
22
333
4444
```

```javascript
function rowNumberPattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) row += i;
        console.log(row);
    }
}
rowNumberPattern(4);
```

---

### Floyd’s Triangle

```
1
2 3
4 5 6
7 8 9 10
```

```javascript
function floydsTriangle(n) {
    let num = 1;
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += num + " ";
            num++;
        }
        console.log(row);
    }
}
floydsTriangle(4);
```

---

## Pattern Analysis Strategy

### Step-by-Step Approach

1. Count the rows → determines the outer loop
2. Analyze each row:

   * Spaces
   * Symbols
   * Relation with row number
3. Find the formula (e.g., `2*i-1`)
4. Write loops
5. Test with small values

---

## Common Formulas

* Pyramid stars: `2*i - 1`
* Pyramid spaces: `n - i`
* Inverted triangle stars: `n - i + 1`
* Diamond = Pyramid + Inverted Pyramid

---

## Practice Problems

* Left-aligned inverted triangle
* Hollow pyramid
* Pascal’s triangle
* Hourglass pattern
* Alphabet patterns (A, AB, ABC…)

---

**Happy Coding! 🚀**
