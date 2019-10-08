const testArr = [1,2,3,4,5,6,7,8,9,10,122,133,144,155,166];

Array.prototype.search = function (target) {
  let result = -1;
  let start = 0, end = this.length - 1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2)
    if (this[mid] === target) {
      result = mid;
      break;
    } else if (target > this[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return result;
}

console.log(testArr.search(166))

