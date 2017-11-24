/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const arr = []
    let startPointer = {next:head}
    let vernierPointer = startPointer
    while (vernierPointer){
        arr.unshift(vernierPointer)
        vernierPointer = vernierPointer.next
    }
    const before = arr[n]
    before.next = before.next.next
    return startPointer.next
};
var removeNthFromEnd2 = function(head, n) {
    let startPointer = {next:head}
    let vernierPointer = {next:head}
    while (n-->0) vernierPointer = vernierPointer.next
    if(!vernierPointer.next) return head.next
    while (vernierPointer.next){
        startPointer = startPointer.next
        vernierPointer = vernierPointer.next
    }
    startPointer.next = startPointer.next.next
    return head
};

const build = function (arr) {
    function ListNode(val) {
         this.val = val;
         this.next = null;
    }
    arr = arr.map(item=>new ListNode(item))
    arr.forEach((item,index)=>{
        item.next = arr[index+1]||null
    })
    return arr[0]
}
console.log(JSON.stringify(removeNthFromEnd2(build([1,2]),2)))


