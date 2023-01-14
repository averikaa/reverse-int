module.exports = function reverse (n) {
  let numStr = Math.abs(n).toString();
  let completeStr = "";
  for(let i = numStr.length - 1; i >= 0; i--){
    completeStr = completeStr + numStr[i];
  }
  return completeStr;
}
