import LinkedListNode from "./node";
export default class SinglyLinkedList<T> {
    private _head: LinkedListNode<T> | null = null;

    get head() {
        return this._head;
    }

    set head(head: LinkedListNode<T>) {
        this._head = head;
    }

    append(data: T): void {
        if(!this.head) {
            this.head = new LinkedListNode(data);
        }
        else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = new LinkedListNode(data);
        }
    }

   printList(): void {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
   }
}