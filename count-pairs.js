// add whatever parameters you deem necessary
function countPairs(intArr, sum) {
  let count = 0;

  while (intArr.length > 0) {
    let operand1 = intArr.shift();
    let operand2 = sum - operand1;
    let operand2Idx = intArr.indexOf(operand2);
    if (operand2Idx != -1) {
      count++;
      intArr.splice(operand2Idx, 1);
    }
  }

  return count;
}
