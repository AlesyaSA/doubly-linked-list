const Node = require('./node');

class LinkedList {
    constructor() {
      this.length = 0;
    }
    append(data) {//assign any nodes to this._head and this._tail if list is ampty
                  //adds new data in the end of the list
if(this.length==0){
this._head = new Node;
this._tail = new Node;
}
this.length++;
//this.tail=this.head;
//this.head=data;

//this._tail=this.data;

}





    head() {//returns data from this.head
return this.head;
}
    tail() {//returns data from this.tail

return this.tail;
}
    at(index) {//returns Node.data by index
}
    insertAt(index, data) {//inserts data by index
}
    isEmpty() {//returns true if list is empty
}
    clear() {//clear the list
}
    deleteAt(index) {//deletes element by index
}
    reverse() {//reserve the list
}
    indexOf(data) {//returns index of element if data is found
}                  //returns -1 if data ian't found

}
module.exports = LinkedList;
