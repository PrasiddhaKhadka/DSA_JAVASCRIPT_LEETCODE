// PRINTING A RIGHT ANGLED TRIANGLE
console.log('---> PRINTING THE TRIANGLE <---')
for(let i=1;i<=5;i++){
    console.log("*".repeat(i))
}

// PRINTING THE TRIANGLE IN REVERSE
console.log('---> PRINTING THE TRIANGLE IN REVERSE <---')
for(let i=5;i>0;i--){
    console.log("*".repeat(i))
}

// PRINTING THE EQUALATERAL TRAINGLE
const n = 5;

for (let i = 1; i <= n; i++) {
  let row = "";

  // spaces
  for (let space = 1; space <= n - i; space++) {
    row += " ";
  }

  // stars
  for (let star = 1; star <= 2 * i - 1; star++) {
    row += "*";
  }

  console.log(row);
}
