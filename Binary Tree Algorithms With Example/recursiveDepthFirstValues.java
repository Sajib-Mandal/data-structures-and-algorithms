/* recursive depth-first-values
in Binary search tree using call-stack. */

class Node {
    String val;
    Node left;
    Node right;
    Node(String val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

public class depthFirstValues {
    Node root;
    depthFirstValues(){
        this.root = null;
    }

    private void depthFirstTraversalRecursive(Node root) {
        if (root == null) return;
        System.out.print(root.val + " ");
        depthFirstTraversalRecursive(root.left);
        depthFirstTraversalRecursive(root.right);
    }

    public static void main(String[] args) {
        depthFirstValues ob = new depthFirstValues();
        Node a = new Node("a");
        Node b = new Node("b");
        Node c = new Node("c");
        Node d = new Node("d");
        Node e = new Node("e");
        Node f = new Node("f");

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f;

        //           a
        //         /  \
        //        b    c
        //       / \    \
        //      d   e    f
        // [a, b, d, e, c, f]

       ob.depthFirstTraversalRecursive(a);
    }
}
