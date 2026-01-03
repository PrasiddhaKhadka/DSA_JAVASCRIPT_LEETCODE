var longestCommonPrefix = function(strs) {

  // Edge case: if the array itself is empty, there is no prefix
  if (strs.length === 0) return "";

  // Take the first string as the initial candidate prefix
  // We will gradually shrink this until it works for all strings
  let prefix = strs[0];

  // Loop through the rest of the strings (starting from index 1)
  for (let i = 1; i < strs.length; i++) {

    // While the current string does NOT start with the current prefix
    // indexOf(prefix) !== 0 means "prefix is not at the start"
    while (strs[i].indexOf(prefix) !== 0) {

      // Remove the last character from the prefix
      // This shortens the prefix step by step
      prefix = prefix.slice(0, -1);

      // If the prefix becomes empty, no common prefix exists
      if (prefix === "") return "";
    }
  }

  // If we survived all comparisons, prefix is common to all strings
  return prefix;
};


const val = longestCommonPrefix(["flower","flow","flight"])
const newVal = longestCommonPrefix(["dog","cat","new"])
console.log(val)
console.log(newVal)