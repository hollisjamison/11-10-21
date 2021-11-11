// What does it do?
// Takes a year and returns a century

// What param types does it take?
// Takes one number

// What does it return?
// A number

function getCentury(number) {
  // Creating a variable and setting a default value of 0
  let returnNumber = 0;

  // Divides the param number by 100, then rounds up to the nearest integer OR the same number if it is
  // already an integer
  returnNumber = Math.ceil(number / 100);

  // Return the result
  return returnNumber;
}

console.log(getCentury(1901))
console.log(getCentury(2000))