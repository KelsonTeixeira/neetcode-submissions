/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        this.walk(root);
        return root;
    }

    walk(root) {
        if(!root) return;

        const temp = root.left;
        root.left = root.right;
        root.right = temp;

        this.walk(root.left);
        this.walk(root.right);
    }
}
