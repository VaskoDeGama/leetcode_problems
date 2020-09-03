/**
 *
 * Given a binary tree, find its maximum depth.
 * The maximum depth is the number of nodes along the
 * longest path from the root node down to the farthest leaf node.
 *
 * Note: A leaf is a node with no children.
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
  if (!root) {
    return 0
  }
  let depth = 0
  if (root && root.left !== null) {
    depth = Math.max(depth, maxDepth(root.left))
  }
  if (root && root.right !== null) {
    depth = Math.max(depth, maxDepth(root.right))
  }
  console.log(depth)
  return depth + 1
}

module.exports = maxDepth
