import LinkedListNode from "./node";
export default class SinglyLinkedList<T> {
    private _head: LinkedListNode<T> | null = null;

    constructor(data?: T) {
        if(data) this._head = new LinkedListNode<T>(data);
    }

    get head() {
        return this._head;
    }

    set head(head: LinkedListNode<T>) {
        this._head = head;
    }

    append(data: T, node = this._head ): void {

        if (!node) {
            this._head = new LinkedListNode<T>(data);
            return;
        } 
        else if (!node.next) {
            node.next = new LinkedListNode<T>(data);
            return;
        } 
        else {
            return this.append(data, node.next);
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

   search(searchItem: T, node = this._head, index: number = 0) {

        if(!node) return -1;

        if(node.data === searchItem) return index; 
        
        return this.search(searchItem, node.next, index + 1);
   }

   length(node = this._head) {
        
        if(!node) return 0;

        return 1 + this.length(node.next);
   }

   delete(index) {
        if( index === undefined || index < 0 || this.length(this.head) - 1 < index) return;

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

   print(node = this._head): void {
        
        if(node) {
            console.log(node.data);
            this.print(node.next);
        }
   }
}