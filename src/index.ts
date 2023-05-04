import BinaryTree, {TreeNode} from "./binarytree";

let binarytree = new BinaryTree<number>(100);

[1000, 2000, 50].forEach((num) => binarytree.insert(num)); 

binarytree.levelOrderTraversal(binarytree.root);

