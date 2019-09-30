/**
 * 是否回文
 * 
 * 双指针
 */

const testNum = 121212121;

const fn = num => {
  let str = String(num);
  let start = 0, end = str.length - 1;
  while (start < end) {
    if (arr[start] === arr[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
}

const result = fn(testNum);
console.log(result);