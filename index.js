function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const match = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === match) return true;
    }
  }
  return false;
}

/* 
Write the Big O time complexity of your function here
*/

/* 
Add your pseudocode here
// The function should return true
//if any pair of numbers in the array
//adds up to the target number
*/

/*
Add written explanation of your solution here
//hasTargetSum([3, 8, 12, 4, 11, 7], 10); //true
// hasTargetSum([22, 19, 4, 6, 30], 25); // true
// hasTargetSum([1, 2, 5], 4); //false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([10, 12, 5], 11));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([13, 11, 15, 17, 19], 24));
}

module.exports = hasTargetSum;
