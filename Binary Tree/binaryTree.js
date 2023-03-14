class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const depthFirstValues = root => {
  if (root === null) return [];
  const result = []
  stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.val);

    if (current.left) stack.push(current.right);
    if (current.right) stack.push(current.left);
  }
  return result;
};


const depthFirstValues = (root) => {
  if (root === null) return [];
  const leftValues = depthFirstValues(root.left);  //[b, d, e]
  const rightValues = depthFirstValues(root.right);  //[c, f]
  return [root.val, ...leftValues, ...rightValues]; 
};

const breadthFirstValues = (root) => {
  if (root === null) return [];

  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current.val);

    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
  return result;
}


DFS recursive
const treeIncludes = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;
  return treeIncludes(root.left, target) || treeIncludes(root.right, target);
}


BFS iterative
const treeIncludes = (root, target) => {
  if (root === null) return false;
  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current.val === target) {
      return true;
    }
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return false;
}


const treeSum = (root) =>{
  if (root === null) return 0;

  let total = 0;
  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    total += current.val;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return total;
}

const treeSum = (root) => {
  if (root === null) return 0;
  // const leftValues = treeSum(root.left);
  // const rightValues = treeSum(root.right);
  // return root.val + leftValues + rightValues;
  return root.val + treeSum(root.left) + treeSum(root.right);
}


const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

        a
       / \
      b    c
    /  \     \
   d    e     f

console.log(depthFirstValues(a));
console.log(breadthFirstValues(a));
console.log(treeIncludes(a, 'a'));
console.log(treeIncludes(a, 'i'));


const treeMinValue = (root) => {
   const queue = [root];  
   let smallest = root.val; // Or, let smallest = infinity
   while (queue.length > 0) {
    const current = queue.shift();
    if (current.val < smallest) smallest = current.val;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
   }
   return smallest;
};

const treeMinValue = (root) => {
  if (root == null) return Infinity;
  const leftValues = treeMinValue(root.left);
  const rightValues = treeMinValue(root.right)          
  return Math.min(root.val, leftValues, rightValues); 
  //return Math.min(root.val, treeMinValue(root.left), treeMinValue(root.right));
  // Work but not good practice
}

const maxPathSum = (root) => {
  if (root === null) return 0;  // Or, return -Infinity;
  if (root.left === null && root.right ===  null) return root.val; // No need this condition
  const leftValues = maxPathSum(root.left);
  const rightValues = maxPathSum(root.right);
  return root.val + Math.max(leftValues, rightValues);
};


const a = new Node(5);
const b = new Node(11);
const c = new Node(3);
const d = new Node(4);
const e = new Node(2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


console.log(maxPathSum(a));
