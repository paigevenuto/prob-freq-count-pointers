// add whatever parameters you deem necessary
function separatePositive(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr.unshift(arr[i]);
      arr.splice(i + 1, 1);
    }
  }
  return arr;
}
