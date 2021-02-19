// add whatever parameters you deem necessary
function constructNote(message, someLetters) {
  let lettersArr = new Array(...someLetters);
  let messageArr = new Array(...message);

  for (let i = 0; i < messageArr.length; i++) {
    let letterIdx = lettersArr.indexOf(messageArr[i]);
    if (letterIdx === -1) return false;
    lettersArr.splice(letterIdx, 1);
  }
  return true;
}
