var lengthOfLastWord = function(s) {    

    // to make the last word come to the front  
   splitting_list = s.trim().split(' ').reverse()

   return splitting_list[0].length
   
};

const lengthofWord = lengthOfLastWord('   fly me   to   the moon  ')
console.log(lengthofWord)