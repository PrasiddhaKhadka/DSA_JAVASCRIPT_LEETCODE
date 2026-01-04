var isPalindrome = function(s) {
    // removing the special characters from the sentences 
    const cleaned = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()
    
 
    // removing the uppercase, spaces and reversing
    const refactorText = cleaned.split("").reverse().join('')
    if(cleaned === refactorText){
        return true;
    }
    else{
        return false;
    }
};

const output = isPalindrome('A man, a plan, a canal: Panama')
const outputSecond = isPalindrome('race a car')


console.log(output)
console.log(outputSecond)
