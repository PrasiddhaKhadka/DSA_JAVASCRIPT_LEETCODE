var compose = function(functions) {

    return function(x) {
        for(let i of functions){
            console.log('Here')
            console.log(i(5))
        }
        
        console.log(x)    


    }

};


const fn = compose([x => x + 1, x => 2 * x])

fn(10);