/**
 * Given a binary tree, return the bottom-up level order
 * traversal of its nodes' values.
 * (ie, from left to right, level by level from leaf to root).
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 *      3
 *     / \
 *    9  20
 *      /  \
 *     15   7
 * return its bottom-up level order traversal as:
 * [
 *  [15,7],
 *  [9,20],
 *  [3]
 * ]
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * @param {TreeNode|null} node
 * @param {number} level
 * @param {number[][]} output
 */
function bfs(node, level, output) {
  if (!node) {
    return
  }
  if (!output[level]) {
    output[level] = []
  }
  output[level].push(node.val)

  bfs(node.left, level + 1, output)
  bfs(node.right, level + 1, output)
}

/**
 * @param {TreeNode} root
 * @returns {number[][]}
 */
export default function levelOrderBottom(root) {
  const output = []

  bfs(root, 0, output)
  return output.reverse()
}
