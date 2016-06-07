module.exports = LinkedList;

function LinkedList(parameters) {
  if (!parameters || !parameters.values || 
    ( Object.prototype.toString.call( parameters.values ) !== '[object Array]' )) {
    return;
  }
  for (var i=0; i<parameters.values.length; i++) {
    this.insert(parameters.values[i]);
  }
  this._actionCount = 0;
}

LinkedList.prototype = {
  length: 0,
  head: null,
  _indices: [],
  _actionCount: 0
};

LinkedList.prototype.insert = function(data) {
  var node = new LinkedList.Node(data);
  this.actionCount();
  if (!this.head || node.data < this.head.data) {
    node.next = this.head;
    this.head = node;
    if(this._indices.length > 0) {
      this._indices.shift();
      this._indices.unshift(node);
    }
  } else {
    if(this._indices.length > 0) {
      var i;
      for(i=0; (i < this._indices.length) && (node.data > this._indices[i].data); i++);
      current = this._indices[i-1];
    } else {
      current = this.head;
    }
    while (current.next && current.next.data < node.data) {
      current = current.next;
    }
    node.next = current.next;
    current.next = node;
  }
  this.length++;
};

LinkedList.prototype.remove = function(data) {
  if (!this.head) {
    return false;
  }
  this.actionCount();
  if (data === this.head.data) {
    this.head = this.head.next;
    if(this._indices.length > 0) {
      this._indices.shift();
      if(this.head) {
        this._indices.unshift(this.head);
      } else {
        this.actionCount(true);
      }
    }
  } else {
    if(this._indices.length > 0) {
      var i;
      for(i=0; (i < this._indices.length) && (data > this._indices[i].data); i++);
      current = this._indices[i-1];
      if(current === this._indices[i]) {
        if(current.next) {
          this._indices.splice(i,1, current.next);
        } else {
          this._indices.splice(i,1);
        }
      }
    } else {
      current = this.head;
    }
    while (current.next && current.next.data < data) {
      current = current.next;
    }
    if (current.next.data === data) {
      current.next = current.next.next;
    }
    else {
      return false;
    }
  }
  this.length--;
  return true;
};

LinkedList.prototype.contains = function(data) {
  if (!this.head) {
    return false;
  }
  current = this.head;
  while (current.next && current.next.data < data) {
    current = current.next;
  }
  if (this.head.data === data || 
    (current.next ? current.next.data === data : false)) {
   return true;
  }
  return false;
};

LinkedList.prototype.clear = function () {
  this.head = null;
  this.length = 0;
  this.actionCount(true);
};

LinkedList.prototype.iterator = function* () {
  var item = this.head;;
  while (item) {
    yield item.data;
    item = item.next;
  }
};

LinkedList.prototype.actionCount = function (empty) {
  if (empty) {
    this._actionCount = 0;
    return;
  }
  this._actionCount++;
  if(this._actionCount > 2000) {
    this._actionCount = 0;
    this._indices = [];
    if(this.length >= 2000) {
      var index_point = Math.floor(this.length / 100);
      var curr_node = this.head;
      while(curr_node) {
        this._indices.push(curr_node);
        for(i=0;curr_node && i<index_point;i++) {
          curr_node = curr_node.next;
        }
      }
    }
  }
};

LinkedList.prototype.toArray = function() {
  var arr = [];
  var current = this.head;
  while(current) {
    arr.push(current.data);
    current = current.next;
  }
  return arr;
};

LinkedList.Node = function(data) {
  this.next = null;
  this.data = data;
};