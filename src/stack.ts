export default class Stack<T> {

    private _stack: Array<T>;

    push(data: T) {
        this._stack.push(data);
    }

    pop(): T | undefined {

        return this._stack.pop();
    }

    peek(): T | undefined {

        return (this._stack.length > 0) ? this._stack[this._stack.length - 1] : undefined;
    }

    isEmpty() : boolean {
        
        return (this._stack.length == 0); 
    }

}