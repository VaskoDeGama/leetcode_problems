import { describe, it } from 'node:test'
import assert from 'node:assert'
import { MyLinkedList } from './double-linked-list.js'

describe('MyLinkedList', () => {
  it('MyLinkedList case1', () => {
    const list = new MyLinkedList()

    list.addAtHead(1)
    list.addAtTail(3)
    list.addAtIndex(1, 2)
    const res1 = list.get(1)

    assert.equal(res1, 2)

    list.deleteAtIndex(1)

    const res2 = list.get(1)

    assert.equal(res2, 3)
  })

  it('MyLinkedList case2', () => {
    const list = new MyLinkedList()

    list.addAtHead(7)
    list.addAtHead(2)
    list.addAtHead(1)
    list.addAtIndex(3, 0)
    list.deleteAtIndex(2)
    list.addAtHead(6)
    list.addAtTail(4)

    const res1 = list.get(4)

    assert.equal(res1, 4)

    list.addAtHead(4)
    list.addAtIndex(5, 0)
    list.addAtHead(6)
  })

  it('MyLinkedList case3', () => {
    const list = new MyLinkedList()

    list.addAtHead(24)
    const res1 = list.get(1)

    assert.equal(res1, -1)

    list.addAtTail(18)

    list.deleteAtIndex(1)

    const res2 = list.get(1)

    assert.equal(res2, -1)
  })
})
