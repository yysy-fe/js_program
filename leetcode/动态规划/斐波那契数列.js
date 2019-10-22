var fib = function(N) {
  if (N < 2) return N;
  let queue = [1, 0];
  let res = 1;
  for (let i = 2; i < N; i++) {
    queue.unshift(queue[0] + queue[1])
  }
  return queue[0];
};

const result = fib(5);
console.log('result', result);