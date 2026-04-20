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
     * @return {number}
     */

    diameterOfBinaryTree(root) {
        let maxDiameter = 0;

        const height = (root) => {
            if(!root) return 0;

            let leftDepth = height(root.left);
            let rightDepth = height(root.right);

            let diameter = leftDepth + rightDepth;
            maxDiameter = Math.max(maxDiameter, diameter);

            return 1 + Math.max(leftDepth, rightDepth)
        }

        height(root);

        return maxDiameter;
    }
}
