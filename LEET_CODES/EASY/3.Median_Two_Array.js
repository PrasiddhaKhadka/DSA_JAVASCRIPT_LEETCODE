var findMedianSortedArrays = function(nums1, nums2) {
    const arr = nums1.concat(nums2).sort((a, b) => a - b);
    const n = arr.length;

    if (n === 1) return arr[0];

    if (n % 2 !== 0) {
        return arr[Math.floor(n / 2)];
    } else {
        return (arr[n / 2 - 1] + arr[n / 2]) / 2;
    }
};



const output = findMedianSortedArrays([1,2,3,4,5,6,7],[8,9,10,11,12,13,14])
console.log(output)