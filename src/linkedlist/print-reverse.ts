/*
We are given a linked list, we need to print the linked list in reverse order.
*/

import LinkedListNode from "../node";
import SinglyLinkedList from "./linkedlist";

export default function printReverse<T>(head: LinkedListNode<T>) {

    let stack = [];

    while(head) {
        stack.push(head);
        head = head.next;
    }

    const print = () => {

        let current = stack.pop();

        if(!current) return;

        console.log(`${current.data} `);

        print();
    }

    return print;
}

let linkedlist = new SinglyLinkedList();
linkedlist.append(1);
linkedlist.append(2);
linkedlist.append(3);
linkedlist.append(4);
linkedlist.append(5);


const print = printReverse(linkedlist.head);
print();