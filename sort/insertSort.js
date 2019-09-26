/**
 * 将左侧序列看成一个有序序列，每次将一个数字插入该有序序列。
 * 插入时，从有序序列最右侧开始比较，若比较的数较大，后移一位。
 */

const testArr = [6, 1, 2, 7, 9, 3, 4, 6, 6, 6, 5, 10, 8];

const insertSort = arr => {
  for (let i = 1, len = arr.length; i < len; i++) {
    let target = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[target] < arr[j]) {
        [arr[target], arr[j]] = [arr[j], arr[target]];
        target--;
      } 
      else {
        break;
      }
    }
  }
  return arr;
};

const result = insertSort(testArr);
console.log(result);