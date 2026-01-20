var compose = function(functions) {

    return function(x) {

        let val = x;
        for(let i=functions.length; i>0; i--)
        {
            let fun = functions[i-1]
            val = fun(val)
            // console.log(val)
        }
        return val

    }

};


const fn = compose([x => x + 1, x => x * x, x => 2 * x])

const newVal = fn(4);
console.log(newVal)