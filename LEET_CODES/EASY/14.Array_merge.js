let nums = [1,2,1]


let len = nums.length;

for (let i = 0; i < len; i++) {
    nums.push(nums[i]);
}

console.log(nums)