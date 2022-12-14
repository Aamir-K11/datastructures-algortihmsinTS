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

   reverse(){
        let current  = this.head;
        let previous, temp;

        while(current) {
            temp = current.next;
            current.next = previous;
            previous = current;
            current = temp;
        }

        this.head = previous;
        
   }

   search(searchItem){
        let index = -1;
        let current = this.head;
        while(current) {
            index ++;
            if(current.data === searchItem) {
                return index;
            }
            current = current.next;
        }
        return -1;
   }

   length() {
        let len = 0;
        let current = this.head;
        while(current) {
            len++;
            current = current.next;
        }
        return len;
   }

   delete(index) {
        if( index === undefined || index < 0 || this.length() - 1 < index) return;

        if(index == 0) {
            let previous = this.head;
            this.head = previous.next;
            previous = null;
            return;
        }

        let current = this.head;
        let previous;

        for(let i = 0; i < index; i++) {
            previous = current;
            current = current.next;
        }

        previous.next = current.next;
        current = null;
   }

   printList(): void {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
   }
}