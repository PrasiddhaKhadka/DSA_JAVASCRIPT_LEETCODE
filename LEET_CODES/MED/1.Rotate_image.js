// let matrix = [[1,2,3],[4,5,6],[7,8,9]]
let matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]


var rotate = function(matrix) {
    let totalMat = []

    for(let i = matrix.length-1; i>=0; i--){
        let val = []
        for(let j=0; j<matrix.length; j++){
            val.push(matrix[j][i])
        }
        totalMat.push(val.reverse())
    }
    return totalMat.reverse()
};


const val = rotate(matrix)
console.log(val)




// problem scenario 

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]