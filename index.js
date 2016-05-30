module.exports = LinkedList;

function LinkedList() {}
LinkedList.prototype = {
  length: 0,
  head: null
};

LinkedList.prototype.insert = function(data) {
  var node = new LinkedList.Node(data);
  if(!this.head || node.data < this.head.data) {
    node.next = this.head;
    this.head = node;
  } else {
    current = this.head;
    while(current.next && current.next.data < node.data) {
      current = current.next;
    }
    node.next = current.next;
    current.next = node;
  }
  this.length++;
};

LinkedList.prototype.remove = function(data) {
  if(!this.head) {
    return;
  }
  if(data === this.head.data) {
    this.head = this.head.next;
  } else {
    current = this.head;
    while(current.next && current.next.data !== data) {
      current = current.next;
    }
    if(current.next.data === data) {
      current.next = current.next.next;
    }
    else {
      return;
    }
  }
  this.length--;
};

LinkedList.prototype.clear = function () {
  this.head = null;
  this.length = 0;
};

LinkedList.prototype.iterator = function* () {
  var item = this.head;;
  while(item) {
    yield item.data;
    item = item.next;
  }
}

LinkedList.Node = function(data) {
  this.next = null;
  this.data = data;
};