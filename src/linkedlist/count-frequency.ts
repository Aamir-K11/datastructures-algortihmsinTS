import LinkedListNode from "../node";

/*
Given a singly linked list and a key, count the number of occurrences of the given key in the linked list. 
For example, if the given linked list is 1->2->1->2->1->3->1 and the given key is 1, then the output should be 4.
*/

export default function getFrequency<T>(head: LinkedListNode<T>, key: T) {

    let current = head;
    let count = 0;

    while(current) {

        if(current.data === key) count ++;

        current = current.next;
    }

    return count;
}