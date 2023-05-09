import LinkedListNode from "../node";
import SinglyLinkedList from "./linkedlist";

/*
Auxiliary: Given a singly linked list, find the middle of the linked list. For example, if the given linked list is 1->2->3->4->5 then the output should be 3. 
If there are even nodes, then there would be two middle nodes, we need to print the second middle element. 
For example, if the given linked list is 1->2->3->4->5->6 then the output should be 4. 
*/


export default function findMiddle<T>(head: LinkedListNode<T>) {
    let slowPointer = head;
    let fastPointer = head;

    while(fastPointer && fastPointer.next) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }

    return slowPointer.data;
}

