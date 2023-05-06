export class TreeNode<T> {

    private _data: T;
    private _left: TreeNode<T>;
    private _right: TreeNode<T>

    get left(): TreeNode<T> | undefined {
        return this._left;
    }

    get right(): TreeNode<T> | undefined {
        return this._right;
    }

    get data() {
        return this._data;
    }

    set left(node: TreeNode<T>) {
        this._left = node;
    }

    set right(node: TreeNode<T>) {
        this._right = node;
    }

    set data(data: T) {
        this._data = data;
    }
}

export default class BinaryTree<T> {

    private _root: TreeNode<T>;

    constructor(data: T) {
        this._root = new TreeNode<T>();
        this._root.data = data;
    }

    get root(): TreeNode<T> {
        return this._root;
    }

    set root(root: TreeNode<T>) {
        this._root = root;
    }

    insert(data: T) {

        const newNode = new TreeNode<T>();
        newNode.data = data;

        let current = this.root;
        let queue = [current];


        while(queue.length !== 0) {

            current = queue.pop();

            if(current.left) {
                queue.unshift(current.left);   
            }

            else {
                current.left = newNode;
                return;
            }

            if(current.right) {
                queue.unshift(current.right);
            }

            else {
                current.right = newNode;
                return;
            }
        }
    }

    inOrderTraversal(node: TreeNode<T>, cb: (node: TreeNode<T>) => void) {

        if(!node) return;
        
        this.inOrderTraversal(node.left, cb);
        cb(node);
        this.inOrderTraversal(node.right,cb);
    }

    postOrderTraversal(node: TreeNode<T>, cb: (node: TreeNode<T>) => void) {

        if(!node) return;

        this.postOrderTraversal(node.left, cb);
        this.postOrderTraversal(node.right, cb);
        cb(node);
    }

    preOrderTraversal(node: TreeNode<T>, cb: (node: TreeNode<T>) => void) {

        if(!node) return;

        cb(node);
        this.preOrderTraversal(node.left, cb);
        this.preOrderTraversal(node.right, cb);
    }

    levelOrderTraversal(node: TreeNode<T>, cb: (output: TreeNode<T>[][]) => TreeNode<T>[][] | void) {

        if(!node) return; 

        let queue = [];
        let output = [];

        queue.push(node);
        output.push([node.data]);

        while(queue.length != 0) {

            node = queue.pop();

            if(node.left) {
                queue.unshift(node.left);
                output.push([node.left.data]);
            }

            if(node.right) {
                queue.unshift(node.right);
                output[output.length - 1].push(node.right.data);
            };

        }

        cb(output);
    }

    getHeight(node: TreeNode<T>) {

        if(!node) return 0;

        let lmax = this.getHeight(node.left);
        let rmax = this.getHeight(node.right);

        return Math.max(lmax, rmax) + 1;
    }
}