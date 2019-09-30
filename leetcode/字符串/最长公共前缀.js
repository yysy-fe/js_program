/**
 * 最长公共前缀
 */

const testArr = ['float', 'flower', 'floor'];

const fn = arr => {
  if (arr.length === 0) return '';
  let j = 0, pre = arr[0][0], res = ''
  for (let i = 0; i < arr.length; i++) {
    let isSame = true
    if (arr[i][j] !== pre) {
      isSame = false;
      return res;
    }

    if (isSame && i === arr.length - 1) {
      res += pre;
      i = -1;
      j++;
      pre = arr[0][j];
    }
  }
  return res;
}

const result = fn(testArr);
console.log(result)