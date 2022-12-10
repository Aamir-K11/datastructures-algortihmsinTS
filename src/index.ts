import SinglyLinkedList from "./linkedlist";

let singleLinkedList = new SinglyLinkedList<number>();

[1,2,3,4,5].forEach((num) => singleLinkedList.append(num)); 

singleLinkedList.delete(-1);
console.log(singleLinkedList.printList());

