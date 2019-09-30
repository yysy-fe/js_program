/**
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 */

const testTree = {"val":3,"right":{"val":20,"right":{"val":7,"right":null,"left":null},"left":{"val":15,"right":null,"left":null}},"left":{"val":9,"right":null,"left":null}};

const maxDepth = tree => {
  if (!tree) return 0;
  return Math.max(maxDepth(tree.left), maxDepth(tree.right)) + 1;
}

const result = maxDepth(testTree);
console.log("递归版:", result);




const maxDepth2 = tree => {
  if (!tree) return 0; 
  let stack = [{node: tree, deep: 1}], maxDeep = 1;
  while (stack.length > 0) {
    let { node, deep } = stack.pop();
    maxDeep = Math.max(deep, maxDeep);
    node.right && stack.push({ node: node.right, deep: deep + 1 });
    node.left && stack.push({ node: node.left, deep: deep + 1 });
  }  
  return maxDeep;
}

const result2 = maxDepth2(testTree);
console.log("非递归:", result2);