//        6
//      /   \
//     4      3
//    /\      /\  
//   9  1  null 8

// Traversing the tree
// Iterative, breadth-first search, level order traversal [6, 4, 3, 9, 1, null, 8]
// Recursive, depth-first search
// [6, 4, 9, 1, 3, null, 8] pre order
// [9, 4, 1 , 6, null, 3, 8] in order
// [9, 1, 4, null, 8, 3, 6] post order

let node = {
    val: 6,
    left: null,
    right: null
}

const root = { val: 6 };
root.left = { val: 4 };
root.right = { val: 3 };
root.left.left = { val: 9 };
root.left.right = { val: 1 };
root.right = { val: 3 };
root.right.right = { val: 8 };

// Inorder
const inorder = (node) => {
    if (node === undefined) {
        return;
    }
    inorder(node.left);
    console.log(node.val);
    inorder(node.right);
}
inorder(root);

// Preorder
const preorder = (node) => {
    if (node === undefined) {
        return;
    }
    console.log(node.val);
    preorder(node.left);
    preorder(node.right);
}
preorder(root);

// Postorder
const postorder = (node) => {
    if (node === undefined) {
        return;
    }
    postorder(node.left);
    postorder(node.right);
    console.log(node.val);
}
postorder(root);

// Level Order Traversal
const levelOrder = (root) => {
    const queue = [];

    queue.push(root);
    while (queue.length !== 0) {
        const node = queue.shift();
        if (node === undefined) {
            continue;
        }
        console.log(node.val);
        queue.push(node.left, node.right);
    }
}

levelOrder(root);

// Given inorder and postorder traversal of a tree, construct the binary tree.
// inorder = [9,3,15,20,7]
// postorder = [9,15,7,20,3]


// Given inorder and postorder traversal of a tree, construct the binary tree.
// Note:
// You may assume that duplicates do not exist in the tree.
// inorder = [9,3,15,20,7]
// postorder = [9,15,7,20,3]


// Given a singly linked list where elements are 
// sorted in ascending order, convert it to a height balanced BST.
// For this problem, a height-balanced binary tree 
// is defined as a binary tree in which the depth 
// of the two subtrees of every node never differ by more than 1.
// Given the sorted linked list: [-10,-3,0,5,9],


// Given a binary tree in which each node 
// element contains a number. Find the maximum 
// possible sum from one leaf node to another.

// Find the maximum distance


