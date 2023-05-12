/*
Given a circular linked list, count the number of nodes in it. For example, the output is 5 for the below list. 
*/

import LinkedListNode from "../node";

export default function getLengthCircular<T>(head: LinkedListNode<T>) {

    if (!head) {
        return 0;
    }

    let count = 0;
    let current = head;

    do {
        count++;
        current = current.next;
    } while (current !== head);

    return count;
}

