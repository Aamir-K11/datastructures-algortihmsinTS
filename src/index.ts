import SinglyLinkedList from "./linkedlist";

let singleLinkedList = new SinglyLinkedList<number>();

[].forEach((num) => singleLinkedList.append(num)); 

console.log(singleLinkedList.search(4));
