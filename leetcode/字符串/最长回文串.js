/**
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 */

const testStr = "baaaabaaaaad";

const fn = str => {
  let result = '';  
  for (let i = 0, len = str.length; i < len; i = i + 0.5) {
    let item = str[i] ||'';
    let prev = i - 1;
    let next = i + 1;
    if (String(i).indexOf('.') > -1) {
      prev = Math.ceil(i - 1);
      next = Math.floor(i + 1);
    }
    
    while (str[prev] === str[next] && str[prev] !== undefined) {
      item = str[prev] + item + str[next];
      prev--;
      next++;
    }
    if (item.length > result.length) {
      result = item;
    }
  }
  return result;
}; 

const result = fn(testStr);
console.log('result', result);