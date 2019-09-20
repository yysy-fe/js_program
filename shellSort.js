const testArr = [6, 1, 2, 7, 9, 3, 4, 6, 6, 6, 5, 10, 8];

const shellSort = arr => {
  for (let gap = Math.ceil(arr.length / 3); gap >= 1; gap = Math.ceil(gap / 3)) {
    for (let k = 0; k < gap; k++) {
      for (let i = 0, end = arr.length; i < end; i = i + gap) {
        if (arr[i * gap] < arr[i]) {
          [arr[i], arr[i * gap]] = [arr[i * gap], arr[i]];
        }
      }
    }
  }
  return arr;
};

const result = shellSort(testArr);
console.log(result);