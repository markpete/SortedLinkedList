
var LinkedList = require('./');

var randomString = require("random-string");
var chalk = require("chalk");
var InputValues = [];
var DeleteValues = [];
var count = 100000;

var chalkTitle = chalk.blue.bgWhite;
var chalkTime = (ms) => {
    var str = ms + "ms";
    if(ms <= 1000) {
        return chalk.green(str);
    } else {
        return chalk.red(str);
    }
}

var Timer = () => {
    return new Date().getTime();
};

var MeasureSLL = () => {
    var currString;
    for(x=0; x<count; x++) {
        currString = randomString();
        InputValues.push(currString);
        if(x % 10 === 0) {
            DeleteValues.push(currString);
        }
    }

    var start, end;
    start = Timer();

    var myList = new LinkedList();
    for(x=0; x<count; x++) {
        myList.insert(InputValues[x]);
    }

    end = Timer();
    console.log("LinkedList insert " + count + " strings: " + chalkTime(end - start));

    start = Timer();
    for(x=0; x < DeleteValues.length; x++) {
        myList.remove(DeleteValues[x]);
    }
    end = Timer();
    console.log("LinkedList remove " + DeleteValues.length + " strings: " + chalkTime(end - start));

    start=Timer();
    var result = myList.toArray();
    end=Timer();
    console.log("Map sort time: " + chalkTime(end - start));
}

var MeasureBasicArray = () => {
    var currString;
    for(x=0; x<count; x++) {
        currString = randomString();
        InputValues.push(currString);
        if(x % 10 === 0) {
            DeleteValues.push(currString);
        }
    }

    var start, end;
    start = Timer();

    var myArray = new Array();
    for(x=0; x<count; x++) {
        var index = 0;
        while(!!myArray[index] && InputValues[x]>myArray[index]) index++;
        myArray.splice(index, 0, InputValues[x]);
    }
    end = Timer();
    console.log("Array insert " + count + " strings: " + chalkTime(end - start));

    start = Timer();
    for(x=0; x<DeleteValues.length; x++) {
        var index = 0;
        while(!!myArray[index] && DeleteValues[x]>myArray[index]) index++;
        if(!!myArray[index] && myArray[index] === DeleteValues[x]) myArray.splice(index, 1);
    }

    end = Timer();
    console.log("Array remove " + DeleteValues.length + " strings: " + chalkTime(end - start));

    start=Timer();
    var mapAsc = myArray;
    end=Timer();
    console.log("Array sort time: " + chalkTime(end - start));
}

var MeasureMap = () => {
    var currString;
    for(x=0; x<count; x++) {
        currString = randomString();
        InputValues.push(currString);
        if(x % 10 === 0) {
            DeleteValues.push(currString);
        }
    }

    var start, end;
    start = Timer();

    var myMap = new Map();
    for(x=0; x<count; x++) {
        myMap.set(InputValues[x]);
    }
    end = Timer();
    console.log("Map insert " + count + " strings: " + chalkTime(end - start));
    start = Timer();
    for(x=0; x<DeleteValues.length; x++) {
        myMap.delete(DeleteValues[x]);
    }
    end = Timer();

    console.log("Map remove " + DeleteValues.length + " strings: " + chalkTime(end - start));

    start=Timer();
    var mapAsc = [...myMap.entries()].sort();
    end=Timer();
    console.log("Map sort time: " + chalkTime(end - start));
}

var MeasureSortedMap = () => {
    var SortedMap = require("collections/sorted-map");
    var currString;
    for(x=0; x<count; x++) {
        currString = randomString();
        InputValues.push(currString);
        if(x % 10 === 0) {
            DeleteValues.push(currString);
        }
    }

    var start, end;
    start = Timer();

    var myMap = new SortedMap();
    for(x=0; x<count; x++) {
        myMap.set(InputValues[x]);
    }
    end = Timer();
    console.log("SortedMap insert " + count + " strings: " + chalkTime(end - start));
    start = Timer();
    for(x=0; x<DeleteValues.length; x++) {
        myMap.delete(DeleteValues[x]);
    }
    end = Timer();

    console.log("SortedMap remove " + DeleteValues.length + " strings: " + chalkTime(end - start));

    start=Timer();
    var mapAsc = myMap.toJSON();
    end=Timer();
    console.log("SoredMap sort time: " + chalkTime(end - start));
}

MeasureSortedArray = () => {
    var SortedArray = require("collections/sorted-array");
    var currString;
    for(x=0; x<count; x++) {
        currString = randomString();
        InputValues.push(currString);
        if(x % 10 === 0) {
            DeleteValues.push(currString);
        }
    }

    var start, end;
    start = Timer();

    var myArray = new SortedArray();
    for(x=0; x<count; x++) {
        myArray.add(InputValues[x]);
    }
    end = Timer();
    console.log("SortedArray insert " + count + " strings: " + chalkTime(end - start));
    start = Timer();
    for(x=0; x<DeleteValues.length; x++) {
        myArray.delete(DeleteValues[x]);
    }
    end = Timer();

    console.log("SortedArray remove " + DeleteValues.length + " strings: " + chalkTime(end - start));

    start=Timer();
    var mapAsc = myArray.toArray();
    end=Timer();
    console.log("SortedArray sort time: " + chalkTime(end - start));
}

//--------------------------
console.log(chalkTitle("Sorted Linked List"));
MeasureSLL();
console.log(chalkTitle("Maps"));
MeasureMap();
console.log(chalkTitle("SortedMaps"));
MeasureSortedMap();
console.log(chalkTitle("SortedArray"));
MeasureSortedArray();
console.log(chalkTitle("BasicArray"));
MeasureBasicArray();