/**
 * 给定两个数组，编写一个函数来计算它们的交集
 */

const testArr1 = [1, 2, 3, 4, 9, 8, 7, 6, 6, 5, 3];
const testArr2 = [4, 10, 12, 5, 13, 12, 4];

const fn = (arr1, arr2) => {
  let obj = {};
  const result = [];
  for (let i = 0, len = Math.max(arr1.length, arr2.length); i < len; i++ ) {
    let item1 = arr1[i], item2 = arr2[i];
    if (!obj[item1]) {
      obj[item1] = {i1: 1};
    } else {
      if (obj[item1].i1) {
        obj[item1].i1 += 1;
      }
      else {
        obj[item1].i1 = 1;
      }
    }
    if (!obj[item2]) {
      obj[item2] = {i2: 1};
    } else {
      if (obj[item2].i2) {
        obj[item2].i2 += 1;
      }
      else {
        obj[item2].i2 = 1;
      }
    }
  }

  for (let key in obj) {
    let item = obj[key];
    if (item.i1 > 0 && item.i2 > 0) {
      result.push(key);
    }
  }
  return result;
};

const result = fn(testArr1, testArr2);
console.log('result', result);