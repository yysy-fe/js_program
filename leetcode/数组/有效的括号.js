/**
 * 有效的括号 - 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 */

const testStr = '([()]{[]})';

const fn = str => {
  let stack = [];
  let map = {
    ")": "(",
    "]": "[",
    "}": "{",
  }
  for (let i = 0, len = str.length; i < len; i++) {
    if (stack[stack.length - 1] === map[str[i]] && map[str[i]]) {
      stack.push(str[i]);
    } else {
      stack.pop();
    }
  }

  return stack.length === 0;
};

const result = fn(testStr);
console.log('result', result)