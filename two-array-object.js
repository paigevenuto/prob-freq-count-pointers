// add whatever parameters you deem necessary
function twoArrayObject(keyArr, valueArr) {
  let keyPair = {};
  for (let i = 0; i < keyArr.length; i++) {
    keyPair[keyArr[i]] = valueArr[i] ? valueArr[i] : null;
  }
  return keyPair;
}
