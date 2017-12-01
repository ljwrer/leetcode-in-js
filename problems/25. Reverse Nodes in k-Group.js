const util = require('../util')
const ListNode = util.ListNode
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let ret = head
    let hasReverse = false
    const reverse = function (node,k) {
        let begin = node.next
        let cache = begin
        let cursor = begin.next
        while (k>1){
            const tmp = cursor.next
            const head = cursor
            head.next = cache
            cache = head
            cursor = tmp
            k--
        }
        node.next = cache
        begin.next = cursor
        if(!hasReverse){
            ret = cache
            hasReverse = true
        }
        return begin
    }
    const shouldReverse = function (node,k) {
        let cursor = node
        while (cursor.next&&k>0){
            cursor = cursor.next
            k--
        }
        return k===0
    }
    let cursor = new ListNode()
    cursor.next = head
    while (shouldReverse(cursor,k)){
        cursor = reverse(cursor,k)
    }
    return ret
};

const l1 = util.arr2list([1,2,3,4,5,6,7,8])
reverseKGroup(l1,3).log()
/**
 * 1->2->3->4
 * 4->3->2->1
 *
 *  cursor  cache   result
 *  2       1
 *  3       2       2->1 3->4
 *  4       3       3->2->1 4
 *  5       4       4->3->2->1
 *  node->4  begin->5
 */