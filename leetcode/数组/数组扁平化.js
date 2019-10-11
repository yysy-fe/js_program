const testArr = [[0, 1], [2, 3], [4,[5,6,7,[8,[9,[10]]]]]];

const fn1 = (arr, depth = 1) => {
  const fn = (arr, cur = 1) => {
    if (cur <= depth) {
      return arr.reduce((prev, v) => {
        if (Array.isArray(v)) {
          prev = prev.concat(fn(v, cur + 1));
        } else {
          prev.push(v);
        }
        return prev;
      }, []);
    } else {
      return arr;
    }
  };
  return fn(arr, 1)
};

const result1 = fn1(testArr, 2);
console.log('result1', result1);