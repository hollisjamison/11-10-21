// 1. What does the function do?
// a: It loops through the array, multiplying each consecutive pair of numbers, and returns the greatest
//    product found. 
// 
// 2. What types does this function accept as a param?
// a: One param, type: array
//
// 3. What type does the function return?
// a: Returns a number

const findGreatestAdjacentProduct = (array) => {
  // This checks if the array length is 1 or empty, if so skip the rest of the function and return 0
  // This is called a guard clause
  if (array.length === 1 || array.length === 0) return 0;
  
  // Creates a variable named result that is equal to the product of the first and second element of the array
  let result = array[0] * array[1];

  // Starts a for loop, that loops through the array, except the last element
  for(let i = 1; i < array.length - 1; i++) {
      // Check if the result of the current element, and the next element is more than the existing result
      if(array[i] * array[i+1] > result) {
          // Replacing the result with the product we just calculated (because it's greater than our current result)
          result = array[i] * array[i+1];
      }
  }
  
  // Stop the function and return the highest product found
  return result;
}

console.log(findGreatestAdjacentProduct([3, 6, -2, -5, 7, 3]))