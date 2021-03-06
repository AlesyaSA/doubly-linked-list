const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        //  return this;
    }
    append(data) { //assign any nodes to this._head and this._tail if list is ampty
        //adds new data in the end of the list
        if (this.length == 0) {
            this._head = new Node;
            this._head.data = data;
            this._tail = this._head;
        } else {
            this._tail.next = new Node(data, this._tail);
            this._tail = this._tail.next;
        }
        this.length++;
        return this;
    }
    head() { //returns data from this.head
        return this._head.data;
    }
    tail() { //returns data from this.tail

        return this._tail.data;
    }
    at(index) { //returns Node.data by index
        let p = this._head;
        for (let i = 0; i < index; i++) {
            p = p.next;
        }
        return p.data;
    }
    insertAt(index, data) { //inserts data by index
        let p = this._head;
        for (let i = 0; i < index; i++) {
            p = p.next;
        }
        p.data = data;
        return p.data;
    }
    isEmpty() { //returns true if list is empty
        if (this.length == 0) {
            return true;
        } else {
            return false;
        }
    }
    clear() { //clear the list
        this._head.data = null;
        this._tail.data = null;
        this.length = 0;
        return this;
    }
    deleteAt(index) { //deletes element by index
        let p = this._head;
        for (let i = 0; i < index; i++) {
            p = p.next;
        }
        let a = p;
        if (a.next != null) {
            a.prev.next = a.next;
            a.next.prev = a.prev;
            a.next = null;
            a.prev = null;
        }
        return this;
    }
    reverse() { //reserve the list
        if (this.length < 2) {
            return this;
        }
        let h = this._head;
        let t = this._tail;
        for (let i = 0; i < (Math.floor(this.length / 2)); i++) {
            let a = h.data;
            h.data = t.data;
            t.data = a;
            h = h.next;
            t = t.prev;
        }
        return this;
    }
    indexOf(data) { //returns index of element if data is found
        //returns -1 if data ian't found
        let p = this._head;
        for (let i = 0; i < this.length; i++) {
            if (p.data == data) {
                return i;
            }
            p = p.next;
        }
        return -1;
    }
}
module.exports = LinkedList;
