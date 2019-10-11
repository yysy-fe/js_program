const testNum = 23456789.54321;

const formatMoney = num => {
  let str = String(num);
  let arr = str.split(".");
  let op = '', last = '';
  if (arr.length === 2) {
    op = '.';
    last = arr[1];
  }
  let prev = [], other = [];
  for (let i = arr[0].length - 1; i >= 0; i--) {
    prev.unshift(arr[0][i]); 
    if (i % 3 === 0 && i !== 0) {
      prev.unshift(','); 
    }
  }
  return prev.join("") + op + last;
};

const result = formatMoney(testNum);
console.log('result', result);