const numbers = [2,1,4,3,6,5,8,15,10,30,20,-2]

// time complexity will be O(n^2)
// best would have been O(nlogn)
for (let i = 0; i < numbers.length - 1; i++) { // 1. --> if (n)
  for (let j = 0; j < numbers.length - i - 1; j++) { // n --- then (n*n)
    if (numbers[j] > numbers[j + 1]) {
      let temp = numbers[j]
      numbers[j] = numbers[j + 1]
      numbers[j + 1] = temp
    }
  }
}

console.log(numbers)
