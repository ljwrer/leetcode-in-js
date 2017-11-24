function ListNode(val) {
    this.val = val;
    this.next = null;
}
exports.arr2list = function (arr) {
    arr = arr.map(item=>new ListNode(item))
    arr.forEach((item,index)=>{
        item.next = arr[index+1]||null
    })
    return arr[0]
}
exports.ListNode = ListNode