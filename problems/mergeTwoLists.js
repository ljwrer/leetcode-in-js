const ListNode = require('../util').ListNode
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let p = new ListNode()
    let l = p
    while (l1&&l2){
        if(l1.val<l2.val){
            p.next = new ListNode(l1.val)
            l1  = l1.next
        }else {
            p.next = new ListNode(l2.val)
            l2 = l2.next
        }
        p = p.next
    }
    while (l1){
        p.next = new ListNode(l1.val)
        p = p.next
        l1 = l1.next
    }
    while (l2){
        p.next = new ListNode(l2.val)
        p = p.next
        l2 = l2.next
    }
    return l.next
};
const arr2list= require('../util').arr2list
const l1 = arr2list([1,2,3])
const l2 = arr2list([0])
console.log(JSON.stringify(mergeTwoLists(l1,l2)))