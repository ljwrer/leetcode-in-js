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
 * @return {ListNode}
 */
var swapPairs = function(head) {
    var switchNode = function(node){
        const left = node.next
        const right = left.next
        const rightNext = right.next
        node.next = right
        right.next = left
        left.next = rightNext
        return left
    }
    let begin = new ListNode()
    begin.next = head
    let cursor = begin
    while(cursor&&cursor.next&&cursor.next.next){
        cursor = switchNode(cursor)
    }
    return begin.next
};
const l1 = util.arr2list([1,2,3,4,5])
console.log(JSON.stringify(swapPairs(l1)))