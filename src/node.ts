export default class LinkedListNode<T> {
    private _data: T;
    private _next: LinkedListNode<T> | null = null;

    constructor(data: T) {
        this._data = data;
    }

    get next() {
        return this._next;
    }

    set next(nextNode: LinkedListNode<T>) {
        this._next = nextNode;
    }

    get data() {
        return this._data;
    }
}