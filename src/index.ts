import SinglyLinkedList from "./linkedlist";

let singleLinkedList = new SinglyLinkedList();

[1,2,3,4].forEach((num) => singleLinkedList.append(num)); 

singleLinkedList.printList();