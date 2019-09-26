/**
 * 归并排序
 * 
 * 拆分数组，从长度为1的数组开始排序合并，最终返回的就是排好序的数组
 */

const testArr = [6, 1, 2, 7, 9, 3,  4, 6, 6, 6, 5, 10, 8];

const mergeSort = arr => {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let prev = arr.slice(0, mid);
  let last = arr.slice(mid, arr.length);
  return merge(mergeSort(prev), mergeSort(last));
}

const merge = (prev, last) => {
  let result = [];

  while (prev.length !== 0 && last.length !== 0) {
    if (prev[0] <= last[0]) {
      result.push(prev.shift());
    } else {
      result.push(last.shift());
    }
  }
  
  if (prev.length > 0) {
    result = result.concat(prev);
  }
  
  if (last.length > 0) {
    result = result.concat(last);
  }

  return result;
}

const result = mergeSort(testArr);
console.log(result);
