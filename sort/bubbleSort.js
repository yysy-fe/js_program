/**
 * 冒泡排序
 * 遍历数组，比较当前元素和下一元素大小，大的元素后移， 每次遍历可以保证最后一个元素最大
 * 
 */

const testArr = [6, 1, 2, 7, 9, 3, 4, 6, 6, 6, 5, 10, 8];

const bubbleSort = arr => {
  for (let i = 0, end = arr.length - 1; i < end; i++) {
    let complete = true;
    for (let j = 0; j < end - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; 
        complete = false;
      }
    }
    // 如果没有发生顺序更换，说明数组已排序好
    if (complete) {
      break;
    }
  }
  return arr;
};

const result = bubbleSort(testArr);
console.log('result', result)