/**
 * 只出现一次的数字
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 */

 /**
 *  位运算
 *  n ^ 0 = n
 *  n ^ n = 0
 *  n ^ m ^ n = n
 */

const testArr = [2,1,2,4,6,8,6,8,4];

const fn = arr => {
  let res = 0;
  for (let i = 0, len = arr.length; i < len; i++) {
    res = res ^ arr[i];
  }
  return res;
};

const result = fn(testArr);
console.log('result', result)