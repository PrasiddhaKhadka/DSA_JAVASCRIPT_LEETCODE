var romanToInt = function(s) {
    const mapValue = {
            'I': 1,
            'V':5,
            'X':10,
            'L':50,
            'C':100,
            'D':500,
            'M':1000
        }
    
    // let's split the value at first
    const splittingInput = s.split('')
    console.log(splittingInput)
    let sum = 0;
    for ( let value of splittingInput){
         sum += mapValue[value]
    }
    console.log(sum)
};


romanToInt('MCMXCIV')