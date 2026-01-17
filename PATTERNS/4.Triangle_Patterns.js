let n = 5

for (let i = 0; i<n; i++){
    let row = ''

    for(let j = 0; j<i+1; j++){
        row += "*" + ' '
    }
    console.log(row)
}

// output:
// *
// **
// ***
// ****
// *****




console.log(' ==== BREAK ====')

for(let j = n; j>=0; j--){
        console.log('*'.repeat(j))
}

//output:
// *****
// ****
// ***
// **
// *



console.log(' ==== BREAK ==== ')
let num = 1

for(let i = 0 ; i<n;i++){
    let row = ''
    for(let j=0; j<i+1; j++){
        row += num + ' '
    }
    num += 1
    console.log(row)
    // num = 1
}

// output:
// 1 
//  2 2 
//  3 3 3 
//  4 4 4 4 
//  5 5 5 5 5 





console.log(' ==== BREAK ==== ')

let characters = ['A','B','C','D','E','F','G','H','I','J']
let count = 0;
for(let i = 0; i<n;i++){
    let row = '';
    for(let j= 0 ; j< i+1;j++){
        row += characters[count] + ' '
    }
    count++
    console.log(row)
}

// A 
// B B 
// C C C 
// D D D D 
// E E E E E 



console.log(' ==== BREAK ==== ')

for(let i = 0; i< n;i++){
    let row = ''
    let counter = 1;
    for(let j=0; j<i+1;j++){
        row += counter + ' '
        counter++
    }
    
    console.log(row)
}

// OUTPUT:
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 


console.log(' ==== BREAK ==== ')


for(let i = 0 ; i< n;i++){
    let row = ''
    for(let j=i+1;j>0;j--){
        row += j + ' '
    }
    console.log(row)
}