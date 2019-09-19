/**
 * 每次循环选取一个最小的数字放到前面
 */

const testArr = [6, 1, 2, 7, 9, 3, 4, 6, 6, 6, 5, 10, 8];

const selectionSort = arr => {
  for (let i = 0, end = arr.length; i < end; i++) {
    let minIndex = i;
    for (let j = i; j < end; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
};

const result = selectionSort(testArr);
console.log(result);