var expect = require('chai').expect;
var LinkedList = require('./');

describe('sorted-linked-list', function() {
	var myList;

	before(function() {
		myList = new LinkedList();
	});

	it('validate new list', function () {
		expect(myList).to.not.be.null;
		expect(myList).to.be.ok;
		expect(myList.length).to.equal(0);
		expect(myList.contains(33)).to.equal.false;
	});

	it('add items to the list', function () {
	    myList.insert(10);
	    myList.insert(5);
	    myList.insert(13);
	    myList.insert(7);
	    expect(myList.length).to.equal(4);
	    expect(myList.head.data).to.equal(5);
	    myList.remove(5);
	    expect(myList.length).to.equal(3);
	    expect(myList.head.data).to.equal(7);
	});
    
	it('validate iterator', function () {
		var values = [7, 10, 13];
	    var current = myList.iterator();
	    while(!(x = current.next()).done) {
	    	expect(x.value).to.equal(values.shift());
	    };
	});

	it('clear the list', function () {
	    myList.clear();
	    expect(myList).to.not.be.null;
	    expect(myList).to.be.ok;
	    expect(myList.length).to.equal(0);
	});

	it('list to and from array', function () {
		myList = new LinkedList({values: ['dog', 'liger', 'cat', 'donkey']});
		expect(myList).to.not.be.null;
		expect(myList).to.be.ok;
		expect(myList.length).to.equal(4);
		expect(myList.head.data).to.equal('cat');
		var myArray = myList.toArray();
		expect(myArray).to.deep.equal(['cat', 'dog', 'donkey', 'liger']);
	});

	it('validate contains', function () {
		expect(myList.contains('liger')).to.be.true;
		myList.clear();
		myList.insert('one');
		expect(myList.contains('one')).to.equal.true;
		expect(myList.contains('two')).to.equal.false;
	});
});