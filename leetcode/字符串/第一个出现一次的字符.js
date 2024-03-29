/**
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 */

const testStr = 'abcbcabbbderffffegsz';

const fn = str => {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]].times += 1;
    } else {
      obj[str[i]] = {
        times: 1,
        index: i
      };
    }
  }

  for (let k in obj) {
    if (obj[k].times === 1) return obj[k].index;
  }
  
  return -1;
};

const result = fn(testStr);
console.log('result', result);