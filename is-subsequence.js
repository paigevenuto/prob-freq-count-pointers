// add whatever parameters you deem necessary
function isSubsequence(smallStr, bigStr) {
  let smallArr = new Array(...smallStr);
  let bigArr = new Array(...bigStr);

  for (let i = 0; i < bigArr.length; i++) {
    if (smallArr[0] === bigArr[i]) {
      smallArr.shift();
    }
  }

  if (smallArr.length === 0) return true;

  return false;
}
