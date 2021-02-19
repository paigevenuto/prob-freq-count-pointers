// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  let arr1 = new Array(...`${num1}`);
  let arr2 = new Array(...`${num2}`);

  while (arr1.length > 0 && arr2.length > 0) {
    let currentVal = arr1.pop();
    let valIdx = arr2.indexOf(currentVal);
    if (valIdx == -1) return false;
    arr2.splice(valIdx, 1);
  }
  if (arr1.length == 0 && arr2.length == 0) return true;
  return false;
}
