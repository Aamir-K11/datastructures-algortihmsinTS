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

        let current = this._root;
        let node = new TreeNode<T>();
        node.data = data;

        while(true) {
            
            if(node.data < current.data) {

                if(current.left !== undefined) {
                    current = current.left;
                } else {
                    current.left = node;
                    return current.left;
                }
            }

            else if(node.data > current.data) {
                
                if(current.right !== undefined) {
                    current = current.right;
                } else {
                    current.right = node;
                    return current.right;
                }

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

    printSameLevelNodes(node: TreeNode<T>) {
        
        console.log(node.data)
        
    }

    levelOrderTraversal(node: TreeNode<T>) {

        if(!node) return; 

        let queue = [];

        queue.push(node);

        while(queue.length != 0) {

            node = queue.pop();
            console.log(node.data);

            if(node.left) queue.unshift(node.left);

            if(node.right) queue.unshift(node.right);

        }
        
    }
}