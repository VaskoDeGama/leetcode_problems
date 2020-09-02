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
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
  function isEqual(nodeOne, nodeTwo) {
    if (nodeOne == null && nodeTwo == null) return true
    if (nodeOne == null || nodeTwo == null) return false
    return (
      nodeOne.val === nodeTwo.val &&
      isEqual(nodeOne.right, nodeTwo.left) &&
      isEqual(nodeOne.left, nodeTwo.right)
    )
  }
  return isEqual(root, root)
}

module.exports = isSymmetric
