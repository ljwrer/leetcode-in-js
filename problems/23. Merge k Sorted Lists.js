const util = require('../util')
const ListNode = util.ListNode
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    class MinHeap{
        constructor(minData=-Infinity) {
            this.elements = [];
            this.size = 0;
            this.maxData = minData;
            this.elements.push(minData);
        }

        switchElement(i, j) {
            const temp = this.elements[i];
            this.elements[i] = this.elements[j];
            this.elements[j] = temp;
        }

        insert(item) {
            this.elements[++this.size] = item;
            let i = this.size;
            while (this.elements[i].val < this.elements[parseInt(i / 2)].val&&i>0) {
                this.elements[i] = this.elements[parseInt(i / 2)];
                this.elements[parseInt(i / 2)] = item;
                i = parseInt(i / 2);
            }
        }

        isEmpty() {
            return this.size === 0
        }

        deleteMin() {
            const ret = this.elements[1];
            this.elements[1] = this.elements.pop();
            this.size--;
            let i = 1;
            while (i * 2 <= this.size) {
                let child = 2 * i;
                if (child < this.size &&(this.elements[child].val > this.elements[child + 1].val)) {
                    child++
                }
                if (this.elements[i].val > this.elements[child].val) {
                    this.switchElement(i, child);
                    i = child
                } else {
                    break;
                }
            }

            return ret
        }
        siftDown(i){
            while (i * 2 <= this.size) {
                let child = i*2;
                if (child < this.size&&(this.elements[child].val > this.elements[child + 1].val)) {
                    child++
                }
                if (this.elements[i].val > this.elements[child].val) {
                    this.switchElement(i, child);
                    i = child
                } else {
                    break;
                }
            }
        }
        create(list){
            this.elements.push(...list);
            this.size = list.length;
            let i = parseInt(this.size/2);
            while (i>0){
                this.siftDown(i);
                i--
            }
        }
    }
    const head = new ListNode()
    let cursor = head
    const heap = new MinHeap()
    heap.create(lists.filter(list=>list&&list.hasOwnProperty('val')))
    while (!heap.isEmpty()){
        let node = heap.deleteMin()
        cursor.next = new ListNode(node.val)
        cursor = cursor.next
        node = node.next
        if(node!==null){
            heap.insert(node)
        }
    }
    return head.next
};

const l1 = util.arr2list([0,2,5])
const l2 = util.arr2list([5,8,9,20,11])
const l3 = util.arr2list([0,2,3,6,8,20])
mergeKLists([l1,l2,l3]).log()
