import SinglyLinkedList from "./linkedlist";

/*
Auxiliary: Given a singly linked list, find the middle of the linked list. For example, if the given linked list is 1->2->3->4->5 then the output should be 3. 
If there are even nodes, then there would be two middle nodes, we need to print the second middle element. 
For example, if the given linked list is 1->2->3->4->5->6 then the output should be 4. 
*/
let singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.append(1); 
singlyLinkedList.append(2); 
singlyLinkedList.append(3); 
singlyLinkedList.append(4); 
singlyLinkedList.append(5); 
singlyLinkedList.append(6);
singlyLinkedList.append(7); 
singlyLinkedList.append(8); 
singlyLinkedList.append(9); 

let slowPointer = singlyLinkedList.head;
let fastPointer = singlyLinkedList.head;

while(fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
}

console.log(slowPointer.data);

