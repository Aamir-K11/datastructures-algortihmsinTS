import BinaryTree, {TreeNode} from "./binarytree";

let binarytree = new BinaryTree<number>(100);

[20, 200, 10, 30, 150, 300].forEach((num) => binarytree.insert(num)); 

binarytree.inOrderTraversal(binarytree.root, (node) => console.log(node.data));