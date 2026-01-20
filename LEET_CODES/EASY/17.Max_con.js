var findMaxConsecutiveOnes = function(nums) {
    console.log(nums)
    let count = 1

    for(let i = 0; i< nums.length;i++){
        if(nums[i] === nums[i+1]){
            count += 1
        }
        
    }
    console.log(count)
};



nums = [1,1,0,1,1,1]

findMaxConsecutiveOnes(nums)