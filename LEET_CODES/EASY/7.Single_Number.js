var singleNumber = function(nums) {

    const obj = {}

    for(let i of nums){
        obj[i] = (obj[i] || 0) + 1
    }
    // checking object with min value 
    const keys = Object.keys(obj).reduce((a,b)=>obj[a]<obj[b]?a:b)
    return keys
};

const minRepeatedNumber = singleNumber([2,2,1])
console.log(minRepeatedNumber)
