import LinkedListNode from "../node";

/*
Given a singly linked list, we have to convert it into circular linked list. 
For example, we have been given a singly linked list with four nodes and we want to convert this singly linked list into circular linked list.
*/
export default function toCircular<T>(head: LinkedListNode<T>) {

    let current = head;

    while(current.next) {
        current = current.next;
    }

    current.next = head;

    return head;
}
