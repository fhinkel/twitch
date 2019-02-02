let node = {
    val: 6,
    left: null,
    right: null
}

const root = { val: 6 };
root.left = { val: 4 };
root.right = { val: 3 };
root.left.left = { val: -9 };
root.left.right = { val: 1 };
root.right.right = { val: 8 };
root.left.left.left = { val: 100 };

//        6
//      /   \
//     4      3
//    /\       \  
//   -9  1       8
//   /
// 100

// Given a binary tree in which each node 
// element contains a number. Find the maximum 
// possible sum from one leaf node to another.

const maxSumUntilNode = (node, currentMax) => {
    if (!node) {
        return 0;
    }
    if (!node.left && !node.right) {
        return node.val;
    }
    if (node.left && node.right) {
        const maxLeft = maxSumUntilNode(node.left, currentMax);
        const maxRight = maxSumUntilNode(node.right, currentMax);
        currentMax.val = Math.max(currentMax.val, maxLeft + maxRight + node.val);
        return Math.max(maxLeft, maxRight) + node.val;
    }
    if (!node.left) {
        return maxSumUntilNode(node.right, currentMax) + node.val;
    }
    if (!node.right) {
        return maxSumUntilNode(node.left, currentMax) + node.val;
    }
}

const maxSum = (root) => {
    if (!root || !root.left || !root.right) {
        return Number.NEGATIVE_INFINITY;
    }
    let max = { val: Number.NEGATIVE_INFINITY };

    maxSumUntilNode(root, max);
    return max.val;
}

console.log(maxSum(root));


// Traversing the tree
// Iterative, breadth-first search, level order traversal [6, 4, 3, 9, 1, null, 8]
// Recursive, depth-first search
// [6, 4, 9, 1, 3, null, 8] pre order
// [9, 4, 1 , 6, null, 3, 8] in order
// [9, 1, 4, null, 8, 3, 6] post order



// // Inorder
// const inorder = (node) => {
//     if (node === undefined) {
//         return;
//     }
//     inorder(node.left);
//     console.log(node.val);
//     inorder(node.right);
// }
// inorder(root);

// // Preorder
// const preorder = (node) => {
//     if (node === undefined) {
//         return;
//     }
//     console.log(node.val);
//     preorder(node.left);
//     preorder(node.right);
// }
// preorder(root);

// // Postorder
// const postorder = (node) => {
//     if (node === undefined) {
//         return;
//     }
//     postorder(node.left);
//     postorder(node.right);
//     console.log(node.val);
// }
// postorder(root);

// // Level Order Traversal
// const levelOrder = (root) => {
//     const queue = [];

//     queue.push(root);
//     while (queue.length !== 0) {
//         const node = queue.shift();
//         if (node === undefined) {
//             continue;
//         }
//         console.log(node.val);
//         queue.push(node.left, node.right);
//     }
// }

// levelOrder(root);

// Given inorder and postorder traversal of a tree, construct the binary tree.
// const inorderInput = [9,3,15,20,7]
// const postorderInput = [9,15,7,20,3] // left, right, parent

//      3
//     / \
//    9   20
//        /\
//      15  7

const makeTree = (inorder, postorder) => {
    if (inorder.length === 0) {
        return null;
    }
    let val = postorder[postorder.length - 1]; // last entry
    let index = inorder.indexOf(val);

    const root = { val };

    root.left = makeTree(inorder.slice(0, index), postorder.slice(0, index));
    root.right = makeTree(inorder.slice(index + 1), postorder.slice(index, -1));

    return root;
}

const tree = makeTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]);
console.log(tree);

// Given a singly linked list where elements are 
// sorted in ascending order, convert it to a height balanced BST.
// For this problem, a height-balanced binary tree 
// is defined as a binary tree in which the depth 
// of the two subtrees of every node never differ by more than 1.
// Given the sorted linked list: [-10,-3,0,5,9],
// -10
//   \
//   -3
//    \
//     0
//      \
//      5
//       \
//        9

//     0
//    / \
//  -3   5
//  /     \
// -10     9

//     0
//    / \
//  -3   9
//  /   /
// -10  5


//     -3
//    / \
//  -10   5
//       / \
//      0   9

//      5
//    /  \
//   -3   9
//  /  \
// -10  0 
// Solution: https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree






// Find the maximum distance


