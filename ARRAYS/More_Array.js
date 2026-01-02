// CONCAT
const fruits = ['Apple','Mango','Orange']

const addedFruits = fruits.concat(['Litchi','Grapes'])

console.log(fruits)
console.log(addedFruits)


// INDEX OF 
console.log(fruits.indexOf('Apple'))

// LAST INDEX OF 
console.log(addedFruits.lastIndexOf('Litchi'))




// finding
const searching = addedFruits.find((fruit) => {
    return fruit === 'Mango';
});

console.log(searching);


// Includes
console.log(fruits.includes('Apple'))


// FOR LOOPS: ARRAY ARE ITERATABLES

for (let fruit of fruits){
    // OF FOR FRUIT NAMES
    console.log(fruit)
}


for(let fruit in fruits){
    // IN FOR INDEX
    console.log(fruit)
}


// for each
fruits.forEach((fruit,index)=>console.log(fruit));


// MAP
const newFruitsPrice = fruits.map((fruits,index)=>{
    const updated = 
        {   
            "count":index+1,
            "name":fruits,
            "price":10.00
        }
    
    return updated;
})

console.log(newFruitsPrice)



// SORTING AND REVERSING