/**
 * 给定一个二叉树，检查它是否是镜像对称的。
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 *     1
 *    / \
 *   2   2
 *  / \ / \
 * 3  4 4  3
 * 
 */

const testTree = {"val":1,"right":{"val":2,"right":{"val":3,"right":null,"left":null},"left":{"val":4,"right":null,"left":null}},"left":{"val":2,"right":{"val":4,"right":null,"left":null},"left":{"val":3,"right":null,"left":null}}};

const fn1 = tree => {
  return loop1(tree, tree);
}

const loop1 = (left, right) => {
  if (left === null && right === null) return true;
  if (left === null || right === null) return false;
  return left.val === right.val && loop1(left.right, right.left) && loop1(left.left, right.right); 
}

const result1 = fn1(testTree);
console.log("递归版:", result1);

const fn2 = tree => {
  if (tree === null) return true;
  let leftStack = [tree], rightStack = [tree]
  while (leftStack.length > 0 || rightStack.length > 0) {
    let leftNode = leftStack.pop();
    let rightNode = rightStack.pop();
    
    /**
     * leftStack  = [left, right]  
     * rightStack = [right, left]
     * 两个栈同时pop，末尾元素对称对比
     */
    leftNode.left && leftStack.push(leftNode.left);
    rightNode.right && rightStack.push(rightNode.right);
    leftNode.right && leftStack.push(leftNode.right);
    rightNode.left && rightStack.push(rightNode.left);
    
    if (leftNode.left === null && rightNode.right === null) return true;
    if (leftNode.left === null || rightNode.right === null) return false; 
    if (leftNode.left.val !== rightNode.right.val) {
      return false;
    }
  }
  return true;
}

const result2 = fn2(testTree);
console.log("非递归:", result2);