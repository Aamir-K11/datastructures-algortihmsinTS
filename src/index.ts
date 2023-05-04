import BinaryTree, {TreeNode} from "./binarytree";

let binarytree = new BinaryTree<number>(1);

[2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((num) => binarytree.insert(num)); 

binarytree.levelOrderTraversal(binarytree.root, (output) => console.log(output));


