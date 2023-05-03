import BinaryTree, {TreeNode} from "./binarytree";

let binarytree = new BinaryTree<number>(40);

[30, 50, 25, 35].forEach((num) => binarytree.insert(num)); 

binarytree.preOrderTraversal(binarytree.root, (node) => console.log(node.data));