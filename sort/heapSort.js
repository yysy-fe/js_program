/**
 * 堆 是基于完全二叉树实现的
 * 若设二叉树的深度为h，除第 h 层外，其它各层 (1～h-1) 的结点数都达到最大个数，
 * 第 h 层所有的结点都连续集中在最左边，这就是完全二叉树。
 * 
 * 堆可以用数组表示
 * 特性：第n个节点的左子节点为2n+1  右子节点为2n+2
 * 如果想找到最后一个非叶子节点
 * 1）最后一个非叶子节点只有左孩子  节点总数为偶数
 * 2）最后一个非叶子节点有左右孩子  节点总数为奇数
 * 
 * 1) 左孩子为 length - 1; length - 1 = 2n + 1   -->   n = (length - 2) / 2    
 * 2) 左孩子为 length - 2; length - 2 = 2n + 1   -->   n = (length - 3) / 2  length为奇数  等价于 Math.floor((length - 3 + 1) / 2)
 * 
 * 所以最后一个非叶子节点n 为 n = Math.floor((length - 3 + 1) / 2);
 */


/**
 * 堆排序
 * [1]构建大顶堆 核心思路找到最后一个非叶子节点 n = 
 * [2]堆顶为最大值，把堆顶元素和末尾元素置换，数组最后一位为最大值 2n + 1 = len - 1  -->   n - 
 * 对 length - 1 的数组重复 [1][2] 
 */

const testArr = [7,6,8,3,9,5,10,2,4,1,11,2,6,8,6];

const createMaxHeap = (arr, len) => {
  let lastRootNodeIndex = Math.floor((len - 3 + 1) / 2);
  for (let i = lastRootNodeIndex; i >= 0; i--) {
    let leftChildIndex = 2 * i + 1;
    let rightChildIndex = 2 * i + 2;

    /**  堆排序中，构建大顶堆时，len之后的元素有可能是最后一个非叶子节点的右孩子参与计算，所以要过滤掉右孩子大于len的的场景
     * 为什么不需要判断左孩子： 非叶子节点至少有一个左孩子
     */
    if (rightChildIndex >= len) {
      rightChildIndex = -1;
    }

    if (Math.max(arr[leftChildIndex], arr[rightChildIndex]) > arr[i]) {
      if (arr[leftChildIndex] > arr[rightChildIndex]) {
        [arr[i], arr[leftChildIndex]] = [arr[leftChildIndex], arr[i]];
      } else {
        [arr[i], arr[rightChildIndex]] = [arr[rightChildIndex], arr[i]]
      }
    }
  }
  return arr;
}

const heapSort = arr => {
  arr = createMaxHeap(arr, arr.length);
  let end = arr.length - 1;
  while (end >= 1) {
    [arr[0], arr[end]] = [arr[end], arr[0]];
    arr = createMaxHeap(arr, end)
    end--;
  }
  return arr;
};

const result = heapSort(testArr);
console.log(result)