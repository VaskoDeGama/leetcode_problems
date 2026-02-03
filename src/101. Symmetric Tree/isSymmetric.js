/**
 *
 * Given a binary tree, check whether it is a
 * mirror of itself (ie, symmetric around its center).
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {object} nodeOne
 * @param {object} nodeTwo
 * @returns {object}
 */
function isEqual(nodeOne, nodeTwo) {
  if (nodeOne == null && nodeTwo == null) {
    return true
  }
  if (nodeOne == null || nodeTwo == null) {
    return false
  }
  return nodeOne.val === nodeTwo.val && isEqual(nodeOne.right, nodeTwo.left) && isEqual(nodeOne.left, nodeTwo.right)
}

/**
 * @param {object} root
 * @returns {boolean}
 */
export default function isSymmetric(root) {
  return isEqual(root, root)
}
