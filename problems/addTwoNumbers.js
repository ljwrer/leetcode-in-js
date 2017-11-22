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
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    const l = [];
    do{
        const l1Bit = l1.val || 0;
        const l2Bit = l2.val || 0;
        const result = l1Bit + l2Bit + carry;
        const bit = result%10;
        carry = Math.floor(result/10)
        l.push(bit)
        l1 = l1.next;
        l2 = l2.next;
    }while (l1.val&&l2.val)
    while(l1){
        const result = l1.val + carry
        const bit = result%10;
        carry = Math.floor(result/10)
        l.push(bit)
        l1 = l1.next;
    }
    while(l2){
        const result = l2.val + carry
        const bit = result%10;
        carry = Math.floor(result/10)
        l.push(bit)
        l2 = l2.next;
    }
    if(carry){
        l.push(carry)
    }
    return l
};
