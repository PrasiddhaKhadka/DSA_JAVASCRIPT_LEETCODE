var filter = function(arr, fn) {
    
    var result = []
    for(let i = 0; i<arr.length;i++){
        if(fn(arr[i],i)){
            result.push(arr[i]);
        }
    }
    return result;
};



function greaterThan10(n) { 
    return n > 10; 
}


function firstIndex(n, i) { 
    return i === 0; 
}

function plusOne(n) {
     return n + 1 
}

console.log(filter([1,2,3,4,5,10,20,30],greaterThan10))
console.log(filter([1,2,3,4,5,10,20,30],firstIndex))
console.log(filter([-2,-1,0,1,2],plusOne))

