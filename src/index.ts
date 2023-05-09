import BinaryTree, {TreeNode} from "./binarytree";
import SinglyLinkedList from "./linkedlist/linkedlist";

let singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.append(1);
singlyLinkedList.append(2);
singlyLinkedList.append(3);
singlyLinkedList.append(4);
singlyLinkedList.append(5);
singlyLinkedList.append(6);
singlyLinkedList.append(7);
singlyLinkedList.append(8);

//singlyLinkedList.print();
console.log(singlyLinkedList.length());
// let binarytree = new BinaryTree<number>(1);

// [2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((num) => binarytree.insert(num)); 

// //binarytree.levelOrderTraversal(binarytree.root, (output) => console.log(output));
// console.log(binarytree.getHeight(binarytree.root));

