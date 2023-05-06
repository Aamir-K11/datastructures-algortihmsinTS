import BinaryTree, {TreeNode} from "./binarytree";
import SinglyLinkedList from "./linkedlist";

let singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.append(1);
singlyLinkedList.append(2);
singlyLinkedList.append(3);
singlyLinkedList.append(4);

console.log(singlyLinkedList.length());
// let binarytree = new BinaryTree<number>(1);

// [2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((num) => binarytree.insert(num)); 

// //binarytree.levelOrderTraversal(binarytree.root, (output) => console.log(output));
// console.log(binarytree.getHeight(binarytree.root));

