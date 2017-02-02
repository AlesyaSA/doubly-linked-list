const Node = require('./node');

class LinkedList {
    constructor() {
      this.length = 0;
    //  return this;
    }
    append(data) {//assign any nodes to this._head and this._tail if list is ampty
                  //adds new data in the end of the list
if(this.length==0){
this._head = new Node;
this._head.data=data;
this._tail = this._head;

}
else {
  this._tail.next = new Node(data,this._tail);
  this._tail=this._tail.next;

}

this.length++;
return this;
}





    head() {//returns data from this.head
return this._head.data;
}
    tail() {//returns data from this.tail

return this._tail.data;
}
    at(index) {//returns Node.data by index
let p=this._head;
      for(let i=0;i<index;i++){
        p=p.next;
      }
      return p.data;
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
                 //returns -1 if data ian't found


}
}
module.exports = LinkedList;
