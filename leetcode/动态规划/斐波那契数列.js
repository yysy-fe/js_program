var fib = function(N) {
  if (N < 1) return N;
  if (N === 2) return 1;
  let queue = [1, 1];
  for (let i = 2; i < N; i++) {
    queue.unshift(queue[0] + queue[1])
  }
  return queue[0];
};

const result = fib(5);
console.log('result', result);