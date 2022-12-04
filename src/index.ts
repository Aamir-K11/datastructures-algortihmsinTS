import SinglyLinkedList from "./linkedlist";

let singleLinkedList = new SinglyLinkedList<number>();

[1,2,3,4].forEach((num) => singleLinkedList.append(num)); 

singleLinkedList.reverse();
singleLinkedList.printList();
