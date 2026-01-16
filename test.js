let arr = [1,2,3,2,4,1,5,1]
let newArr = []

for ( let item of arr){
    if(!newArr.includes(item)){
        newArr.push(item)
    }
}

console.log(newArr)



// LONGEST STRING DETECTION
let names = [ 'JS','Javascript','React'];
let longestArray = '';

for (let i of names){
    if(i.length > longestArray.length){
        longestArray = i
    }
    // console.log(i)
}

console.log(longestArray)



// RECEURRENCE NUMBER CHECKER
let numbers = [1,2,3,4,2,4,1,5,1,4]
const recurrenceObj = {}

for ( let num of numbers){
    recurrenceObj[num] = (recurrenceObj[num] || 0) + 1
}

console.log(recurrenceObj)


// creating array from key
let data = {
    name:"anil",
    age:30,
    email:"anil@gmail.com"
}

let arrayOfData = []

for(let i of Object.keys(data)){
    arrayOfData.push(i)
}

console.log(arrayOfData)