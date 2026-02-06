import { describe, it } from 'node:test'
import assert from 'node:assert'
import DLL from './double-linked-list.js'

describe('DLL', () => {
  it('will be define', () => {
    assert.ok(DLL !== undefined)
  })

  it('add one node after head', () => {
    const dll = new DLL()

    const node = dll.getNode()

    dll.insertAfterHead(node)

    assert.strictEqual(dll.head.next, node, 'Head next not a node')
    assert.strictEqual(node.prev, dll.head, 'Node prev not a head')
    assert.strictEqual(dll.tail.prev, node, 'Tail prev not a node')
    assert.strictEqual(node.next, dll.tail, 'Node next not a tail')
  })

  it('add two node after head', () => {
    const dll = new DLL()

    const nodeOne = dll.getNode()

    nodeOne.key = 1

    const nodeTwo = dll.getNode()

    nodeTwo.key = 2

    dll.insertAfterHead(nodeOne)
    dll.insertAfterHead(nodeTwo)

    assert.strictEqual(dll.head.next, nodeTwo, 'Head next not a nodeTwo')
    assert.strictEqual(nodeTwo.prev, dll.head, 'NodeTwo prev not a head')
    assert.strictEqual(nodeTwo.next, nodeOne, 'NodeTwo next not a nodeOne')
    assert.strictEqual(nodeOne.prev, nodeTwo, 'NodeOne prev not a nodeTwo')
    assert.strictEqual(nodeOne.next, dll.tail, 'NodeOne next not a tail')
    assert.strictEqual(dll.tail.prev, nodeOne, 'Tail prev not a nodeOne')

    assert.strictEqual(dll.head.next, nodeTwo, 'Head next not a nodeOne')
    assert.strictEqual(dll.head.next.next, nodeOne, 'Head next.next not a nodeTwo')
    assert.strictEqual(dll.head.next.next.next, dll.tail, 'Head next.next.next not a tail')

    assert.strictEqual(dll.tail.prev, nodeOne, 'Tail prev not a nodeOne')
    assert.strictEqual(dll.tail.prev.prev, nodeTwo, 'Tail prev.prev not a nodeTwo')
    assert.strictEqual(dll.tail.prev.prev.prev, dll.head, 'Tail prev.prev.prev not a head')
  })

  it('add one node before tail', () => {
    const dll = new DLL()

    const node = dll.getNode()

    dll.insertBeforeTail(node)

    assert.strictEqual(dll.tail.prev, node, 'Tail prev not a node')
    assert.strictEqual(node.next, dll.tail, 'Node next not a tail')
    assert.strictEqual(node.prev, dll.head, 'Node prev not a head')
    assert.strictEqual(dll.head.next, node, 'Head next not a node')
  })

  it('add two node before tail', () => {
    const dll = new DLL()

    const nodeOne = dll.getNode()

    nodeOne.key = 1

    const nodeTwo = dll.getNode()

    nodeTwo.key = 2

    dll.insertBeforeTail(nodeOne)
    dll.insertBeforeTail(nodeTwo)

    assert.strictEqual(dll.head.next, nodeOne, 'Head next not a nodeOne')
    assert.strictEqual(nodeOne.prev, dll.head, 'nodeOne prev not a head')
    assert.strictEqual(nodeOne.next, nodeTwo, 'nodeOne next not a nodeTwo')
    assert.strictEqual(nodeTwo.prev, nodeOne, 'nodeTwo prev not a nodeOne')
    assert.strictEqual(nodeTwo.next, dll.tail, 'nodeTwo next not a tail')
    assert.strictEqual(dll.tail.prev, nodeTwo, 'Tail prev not a nodeTwo')

    assert.strictEqual(dll.head.next, nodeOne, 'Head next not a nodeOne')
    assert.strictEqual(dll.head.next.next, nodeTwo, 'Head next.next not a nodeTwo')
    assert.strictEqual(dll.head.next.next.next, dll.tail, 'Head next.next.next not a tail')

    assert.strictEqual(dll.tail.prev, nodeTwo, 'Tail prev not a nodeTwo')
    assert.strictEqual(dll.tail.prev.prev, nodeOne, 'Tail prev.prev not a nodeOne')
    assert.strictEqual(dll.tail.prev.prev.prev, dll.head, 'Tail prev.prev.prev not a head')
  })

  it('move node to tail', () => {
    const dll = new DLL()

    const nodeOne = dll.getNode()

    nodeOne.key = 1

    const nodeTwo = dll.getNode()

    nodeTwo.key = 2

    const nodeThree = dll.getNode()

    nodeThree.key = 3

    dll.insertBeforeTail(nodeOne)
    dll.insertBeforeTail(nodeTwo)
    dll.insertBeforeTail(nodeThree)

    dll.insertBeforeTail(nodeOne)

    assert.strictEqual(dll.tail.prev, nodeOne, 'Tail prev not a nodeOne')
    assert.strictEqual(nodeOne.next, dll.tail, 'NodeOne next not a tail')
    assert.strictEqual(nodeOne.prev, nodeThree, 'NodeOne prev not a nodeThree')
    assert.strictEqual(nodeThree.next, nodeOne, 'nodeThree next not a nodeOne')

    assert.strictEqual(dll.head.next, nodeTwo, 'Head next not a nodeTwo')
    assert.strictEqual(dll.head.next.next, nodeThree, 'Head next.next not a nodeThree')
    assert.strictEqual(dll.head.next.next.next, nodeOne, 'Head next.next.next not a nodeOne')
    assert.strictEqual(dll.head.next.next.next.next, dll.tail, 'Head next.next.next.next not a tail')

    assert.strictEqual(dll.tail.prev, nodeOne, 'Tail prev not a nodeOne')
    assert.strictEqual(dll.tail.prev.prev, nodeThree, 'Tail prev.prev not a nodeThree')
    assert.strictEqual(dll.tail.prev.prev.prev, nodeTwo, 'Tail prev.prev.prev not a nodeTwo')
    assert.strictEqual(dll.tail.prev.prev.prev.prev, dll.head, 'Tail prev.prev.prev.prev not a head')
  })

  it('move node to head', () => {
    const dll = new DLL()

    const nodeOne = dll.getNode()

    nodeOne.key = 1

    const nodeTwo = dll.getNode()

    nodeTwo.key = 2

    const nodeThree = dll.getNode()

    nodeThree.key = 3

    dll.insertBeforeTail(nodeOne)
    dll.insertBeforeTail(nodeTwo)
    dll.insertBeforeTail(nodeThree)

    dll.insertAfterHead(nodeThree)

    assert.strictEqual(dll.head.next, nodeThree, 'Head next not a nodeThree')
    assert.strictEqual(nodeThree.prev, dll.head, 'nodeThree prev not a head')
    assert.strictEqual(nodeThree.next, nodeOne, 'nodeThree next not a nodeOne')
    assert.strictEqual(nodeOne.prev, nodeThree, 'nodeOne prev not a nodeThree')
  })

  it('delete node', () => {
    const dll = new DLL()

    const nodeOne = dll.getNode()

    nodeOne.key = 1

    const nodeTwo = dll.getNode()

    nodeTwo.key = 2

    const nodeThree = dll.getNode()

    nodeThree.key = 3

    dll.insertBeforeTail(nodeOne)
    dll.insertAfterHead(nodeTwo)
    dll.insertAfterHead(nodeThree)

    dll.delete(nodeTwo)

    let next = dll.head

    while (next) {
      assert.ok(next.key !== 2, 'Has 2 node')
      next = next.next
    }

    assert.strictEqual(dll.head.next, nodeThree, 'head next not a nodeThree')
  })

  it('dll size', () => {
    const dll = new DLL()

    const nodeOne = dll.getNode()

    nodeOne.key = 1

    const nodeTwo = dll.getNode()

    nodeTwo.key = 2

    const nodeThree = dll.getNode()

    nodeThree.key = 3

    dll.insertBeforeTail(nodeOne)
    assert.equal(dll.size, 1, 'DLL size mismatch')

    dll.insertAfterHead(nodeTwo)
    assert.equal(dll.size, 2, 'DLL size mismatch')

    dll.delete(nodeThree)

    assert.equal(dll.size, 2, 'DLL size mismatch')

    dll.delete(nodeTwo)

    assert.equal(dll.size, 1, 'DLL size mismatch')
  })
})
