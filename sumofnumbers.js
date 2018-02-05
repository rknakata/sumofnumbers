/* Write four functions that return the sum of the numbers in a given list using a for-loop, a while-loop, recursion,
and underscore. Call them sumFor, sumWhile, sumRecursion, and sumTheSimpleWay. */

const testNums = [1, 2, 3, 4];

function sumFor(data) {
  let retVal = 0;
  for (let i = 0; i < data.length; i++) {
    retVal += data[i];
  }
  return retVal;
}

console.log(sumFor(testNums));

function sumWhile(data) {
  let counter = 0;
  let retVal = 0;
  while (counter < data.length) {
    retVal += data[counter];
    counter++;
  }
  return retVal;
}

console.log(sumWhile(testNums));

// You have to pass in zero to retVal and counter
function sumRecursion(data, retVal, counter) {
  if (data.length === counter) {
    return retVal;
  }
  let newRetVal = retVal;
  let newCounter = counter;
  newRetVal += data[counter];
  newCounter += 1;
  return sumRecursion(data, newRetVal, newCounter);
}

console.log(sumRecursion(testNums, 0, 0, 0));

function sumTheSimpleWay(data) {
  return _.reduce(data, function (memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(testNums));
