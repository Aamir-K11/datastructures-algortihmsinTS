import LinkedListNode from "../node";

/*
Auxiliary: Given a singly linked list, find if the linked list is circular or not.  
An empty list is considered circular.
*/
export default function isCircular<T>(head: LinkedListNode<T>) : boolean {

    if(!head) return true;

    let current = head.next;

    while(current && current !== head) {

        current = current.next;
    }

    return (current == head);

}