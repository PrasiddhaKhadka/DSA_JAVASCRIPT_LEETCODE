var shuffle = function(nums, n) {
    const result = [];

    for (let i = 0; i < n; i++) {
        result.push(nums[i]);      
        result.push(nums[i + n]);  
    }

    return result;
};


nums = [2,5,1,3,4,7]
n = 3

const shuffledval = shuffle(nums,n)
console.log(shuffledval)