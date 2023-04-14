class TreeNode<T> {

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

class BinaryTree<T> {

    private _root: TreeNode<T>;

    constructor(root: TreeNode<T>) {
        this._root = root;
    }

    get root(): TreeNode<T> {
        return this._root;
    }

    set root(root: TreeNode<T>) {
        this._root = root;
    }

    insert(node: TreeNode<T>) {

        let current = this.root;

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
}