// What does it do?
// A: Compares two strings and returns the number of unique characters they share

// What params does it accept (how many, and what types)
// A: Accepts two strings

// What does it output (what type)
// A: Outputs a number

function countSharedChars(stringOne, stringTwo) {
  // Creates a variable called result and sets default to 0
  let result = 0
  
  // Split two strings into two arrays on each empty character. (Creates two arrays that contain each letter of the string)
  let array1 = stringOne.split('')
  let array2 = stringTwo.split('')

  // Loops through first string letter by letter
  for(i = 0; i < array1.length; i++){
      // Creating a variable named index, which represents the index of the current letter (if found) in the 2nd string
      let index = array2.findIndex(item => item === array1[i])

      // When you run findIndex it returns one of two things
      // It either returns -1 if it WAS NOT found
      // OR returns the index (which is always 0 or greater) if it was found

      // If the letter WAS found in the second string then....
      if(index !== -1){
          // Increase our result by 1
          result++
          // We remove that letter from the second string (so it doesnt get counted again)
          array2.splice(index, 1)
      }

  }
  
  // Return that count
  return result
}

const testStringOne = "aabcc"
const testStringTwo = "adcaa"

console.log(countSharedChars(testStringOne, testStringTwo))