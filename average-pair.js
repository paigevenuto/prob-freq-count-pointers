// add whatever parameters you deem necessary
function averagePair(intArr, avg) {
  let twiceAvg = avg * 2;

  let smallPtr = 0;
  let largePtr = intArr.length - 1;

  while (smallPtr < largePtr) {
    let sum = intArr[smallPtr] + intArr[largePtr];

    if (sum === twiceAvg) {
      return true;
    } else if (sum < twiceAvg) {
      smallPtr++;
    } else if (sum > twiceAvg) {
      largePtr--;
    }
  }
  return false;
}
