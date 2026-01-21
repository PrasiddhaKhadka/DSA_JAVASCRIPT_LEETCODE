var chunk = function(arr, size) {
    
    const val = arr.map((elements)=>{
        const new_array = Array(size)
        return [new_array.push(elements)]
    })
    console.log(val)
};



let arr = [1,2,3,4,5];
let size = 1

chunk(arr,size)