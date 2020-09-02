function toArr(node, results) {
  if (node === null) {
    return null
  }
  const traverse = function (current) {
    if (current) {
      results.push(current.val)
      traverse(current.left)
      traverse(current.right)
    }
    results.push(null)
  }
  traverse(node)
  return results
}
/**
 * Given two binary trees, write a function to check if they are the same or not.
 * Two binary trees are considered the same if they are structurally
 * identical and the nodes have the same value.
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(p, q) {
  const arrP = toArr(p, [])
  const arrQ = toArr(q, [])
  if (arrQ === arrP) return true
  if (!arrP || !arrQ) return false
  if (!arrP.length || !arrQ.length) return false
  return (
    arrP.length === arrQ.length &&
    arrP.every((value, index) => value === arrQ[index])
  )
}

module.exports = isSameTree
