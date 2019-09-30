/**
 * 最长公共前缀
 */

const testArr = ['float', 'flower', 'floor'];

const fn = arr => {
  if (strs.length === 0) return '';
  let j = 0, pre = strs[0][0], res = ''
  for (let i = 0; i < strs.length; i++) {
    let isSame = true
    if (strs[i][j] !== pre) {
      isSame = false;
      return res;
    }

    if (isSame && i === strs.length - 1) {
      res += pre;
      i = -1;
      j++;
      pre = strs[0][j];
    }
  }
  return res;
}

const result = fn(testArr);
console.log(result)