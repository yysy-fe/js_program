/**
 * 数组乱序 
 */

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const fn1 = arr => {
  return arr.sort(() => {
    return Math.random() - 0.5;
  })
};

const result1 = fn1(testArr);
console.log('result1', result1);

const fn2 = arr => {
  let m = arr.length - 1;
  while (m > 0) {
    let random = Math.floor(Math.random() * m);
    [arr[random], arr[m]] = [arr[m], arr[random]];
    m--;
  }
  return arr;
}

const result2 = fn2(testArr);
console.log('result2', result2);