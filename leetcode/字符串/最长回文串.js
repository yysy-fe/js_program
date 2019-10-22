/**
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 */

const testStr = "baaaabaaaaad";

const fn = str => {
  let result = '';  
  for (let i = 0, len = str.length; i < len; i++) {
    let item = str[i];
    let prev = i - 1;
    let next = i + 1;
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