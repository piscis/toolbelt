# ToolBelt

A set of helpers, that makes the daily work with node a bit easier.
Contributions are welcomed!

[![Build Status](https://secure.travis-ci.org/piscis/toolbelt.png)](http://travis-ci.org/piscis/toolbelt)

## Installation

    $ npm install toolbelt

## Running Tests

To run the tests first invoke the following command to install all dev dependencies.

    $ npm install

Run the tests with
 
    $ npm test

## Modules

### Basic usage

Load and use a module:

    var helper = require('toolbelt').pick([module_namespace]);
    var data = helper([do_your_thing]);

--------------------------------------------------------------

### Module: base/extend

Merge the contents of two or more objects/arrays together into the first object/array.    

    extend([deepCopy,] target [, object1] [, objectN] );

* **deepCopy** A Boolean that if true enables deepcopy.
* **target** An object that will receive the new properties.
* **object1** An object containing additional properties to merge in.
* **object2** Additional objects containing properties to merge in.

#### Examples:

**Shallow extend**

    var extend = require('toolbelt').pick('base/extend');
    var data = extend({a:1},{b:2});

**Deep extend**

    var extend = require('toolbelt').pick('base/extend');
    var data = extend(true,{a:1},{b:2});

--------------------------------------------------------------

### Module: base/has

A extend version of "hasOwnProperty" tests if a object has a certain structure.

    has(object, path);

* **object** A object to check.
* **path** A path of keys to test against the object.

#### Examples:

    var has = require('toolbelt').pick('base/has');
    var data = {foo:{bar:{baz:1}}};
    var hasPath = has(data,'foo.bar.baz'); // returns true
    var hasPath = has(data,'foo.bar.nuv'); // returns false

--------------------------------------------------------------

### Module: base/stack

Modifies a stack of data and returns the result.

    stack(stack, worker, callback);

* **stack** Array with data to work on.
* **worker** A reducer function.
* **callback** A callback that is called when finished.

#### Examples:

Takes a stack of numbers and increments them by 1

    var stack = require('toolbelt').pick('base/stack');
    var list = [1,2,3,4,5];
    var worker = function(data,cb){

        // LONNNGGG Calculation :-)
        setTimeout(function() {
            data = data+1;
            cb(false,data);
        },100);
    };

    var callback = function(err, data){

        if(err) throw new Error('Upps');
        console.log(data);
    }

    stack(list, worker, callback); // returns [2,3,4,5,6];

--------------------------------------------------------------

### Module: base/uuid

Generates a UUID

    uuid();

#### Examples:

    var uuid = require('toolbelt').pick('base/uuid');
    var myId = uuid(); // returns [random uuid]

--------------------------------------------------------------

### Module: format/date

Format a local date/time. Its basicaly a port from PHPs date() function. For more info on the format string see [function.date-Page](http://php.net/manual/en/function.date.php).

    date(format, [Date]);

* **format** The format of the outputted date string.
* **Date** Instance of "Date" set to a specific time otherwise current date.

#### Examples:

    var date = require('toolbelt').pick('format/date');
    var testTime = new Date();
    var dateFormarted = date('Y-m-d H:i:s',testTime); // returns "2012-08-07 17:39:27"

--------------------------------------------------------------

### Module: format/money

Formats a Number/Float/Double.

    money(amount,radix,ThsSeperator,DecDelimiter);

* **amount** Number or Float to be used.
* **accuracy** The accuracy to be used for amount.
* **ThsSeperator** Delimiter that is used for thousand seperator.
* **DecDelimiter** Decimal delimiter that should be used.

#### Examples:

    var money = require('toolbelt').pick('format/money');
    var formatedString = money(1000.111, 2, '.',','); // returns "1,000.11"

--------------------------------------------------------------

### Module: fs/copy

Asynchronously copies a file from a source to a destination

    copy(source,destination,callback);

* **source** Path to a filesource
* **destination** Path to the destination we´re the file gets copied.
* **callback** Callback to test for errors.

#### Examples:

    var copy = require('toolbelt').pick('fs/copy');
    copy('/tmp/a.txt','/tmp/b.txt',function(err) {
        if(err) throw Error('Copy failed!');
    });

--------------------------------------------------------------

### Module: fs/copySync

Synchronously copies a file from a source to a destination

    copy(source,destination);

* **source** Path to a filesource
* **destination** Path to the destination we´re the file gets copied.

#### Examples:

    var copySync = require('toolbelt').pick('fs/copySync');
    copySync('/tmp/a.txt','/tmp/b.txt');

--------------------------------------------------------------

### Module: fs/dirwalkParallel

Walks a directory recusive in parallel and lists all files in it.

    dirwalkParallel(path,callback);

* **source** Path to directory
* **callback** Callback with error and data handler.

#### Examples:

    var dirwalkParallel = require('toolbelt').pick('fs/dirwalkParallel');
    dirwalkParallel('/tmp',function(err,data){

        if(err) throw new Error('Error');
        console.log(data); // Array with all files in subdirectory
    });

--------------------------------------------------------------

### Module: fs/dirwalkSeriel

Walks a directory recusive in seriel (one-by-one) and lists all files in it.

    dirwalkParallel(path,callback);

* **source** Path to directory
* **callback** Callback with error and data handler.

#### Examples:

    var dirwalkSeriel = require('toolbelt').pick('fs/dirwalkSeriel');
    dirwalkSeriel('/tmp',function(err,data){

        if(err) throw new Error('Error');
        console.log(data); // Array with all files in subdirectory
    });

--------------------------------------------------------------

### Module: sort/natsort

Natural sort algorithm in Javascript. Can be used together with Array.sort as a comperator.

    natsort(a,b);

* **a** Input A.
* **b** Input B.

#### Examples:

    var natsort = require('toolbelt').pick('sort/natsort');
    var ipList = [
        '10.5.1.1',
        '10.5.1.6',
        '10.5.2.2'
    ];

    var ipListSorted = ipList.sort(natsort);

--------------------------------------------------------------

### Module: txt/iwordwrap

WordWrap for Hipsters.

    iwordwrap(text [, length] [,fill]);

* **text** Text to shortend.
* **length** Maximal length after shortend.
* **fill** String to use to fill the space.

#### Examples:

    var iwordwrap = require('toolbelt').pick('txt/iwordwrap');
    var res = iwordwrap('CaWaBunGa-CaWaBunGa'); // returns "CaWaB...unGa";

--------------------------------------------------------------

## ToDo´s

* Complete modules list method
* More Modules

## License

###(The MIT License)

#####Copyright (c) 2010-2012 Alexander Pirsig <apirsig@web.de>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.