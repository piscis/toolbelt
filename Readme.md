![toolbelt logo](http://labs.pirsig.net/toolbelt/toolbelt_logo.jpg)

A set of sexy little helper, to make the daily work with nodeJS a bit easier :-)

[![Build Status](https://secure.travis-ci.org/piscis/toolbelt.png)](http://travis-ci.org/piscis/toolbelt)

--------------------------------------------------------------

## Installation

    $ npm install toolbelt

--------------------------------------------------------------

## Running Tests

To run the tests first invoke the following command to install all dev dependencies.

    $ npm install

Run the tests with
 
    $ npm test

--------------------------------------------------------------

## List of available modules

###### Base:
* [base/extend](#module-baseextend)
* [base/has](#module-basehas)
* [base/stack](#module-basestack)
* [base/uuid](#module-baseuuid)

###### Format:
* [format/date](#module-formatdate)
* [format/money](#module-formatmony)

###### Filesystem:
* [fs/copy](#module-fscopy)
* [fs/copySync](#module-fscopysync)
* [fs/dirwalkParallel](#module-fsdirwalkparallel)
* [fs/dirwalkSeriel](#module-fsdirwalkseriel)
* [fs/parentdir](#module-parentdir)

###### Radom:
* [rand/item](#module-randitem)
* [rand/between](#module-randbetween)
* [rand/max](#module-randmax)

###### Sorting:
* [sort/queue](#module-sortqueue)
* [sort/natsort](#module-sortnatsort)

###### Textmanipulation:
* [ txt/wordwrap](#module-txtwordwrap)
* [ txt/iwordwrap](#module-txtiwordwrap)


--------------------------------------------------------------

## Modules

### Basic usage

Load and use a module:

    var module = require('toolbelt').pick([module_namespace]);
    var data = module([do_your_thing]);

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

### Module: rand/item

Returns a random position from a number, hash, string or array

    item(list);

* **list** A number, hash, string or array.

#### Examples:

    var ritem = require('toolbelt').pick('rand/item');
    var entry = ritem([0,1,2,3,4]); // returns random integer from array
    var entry = ritem('ABC'); // returns random position from string
    var entry = ritem({a:1,b:2}); // returns a random key from a hash
    var entry = ritem(123); // returns a random pos from the number [1|2|3]

--------------------------------------------------------------

### Module: rand/max

Returns a random number limited by a specified upper threshold.

    rmax(maxVal,[floatVal]);

* **maxVal** The upper threshold for the random number.
* **floatVal** floating point decimal.

#### Examples:

    var rmax = require('toolbelt').pick('rand/max');
    var entry = rmax(4); // returns random integer <= 4
    var entry = rmax(4,1); // returns random integer <= 4.0

--------------------------------------------------------------

### Module: rand/between

Returns a random number limited by a upper and lower threshold.

    rbetween(minVal, maxVal,[floatVal]);

* **minVal** The lower threshold for the random number.
* **maxVal** The upper threshold for the random number.
* **floatVal** floating point decimal.

#### Examples:

    var rbetween = require('toolbelt').pick('rand/between');
    var entry = rmax(1,4); // returns random integer <= 4
    var entry = rmax(1,4,1); // returns random integer <= 4.0

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

### Module: fs/parentdir

Returns the parent directory for a given path.

    parentdir(path);

* **path** Path from which to resolve from

#### Examples:

    var parentdir = require('toolbelt').pick('fs/parentdir');

    parentdir('C:\A\B\C'); // Returns: C:\A\B
    parentdir('C:\A\B\C.html'); // Returns: C:\A\B
    parentdir('.'); // Returns: Parent from current working directory
    parentdir('..'); // Returns: Parents Parent from current working directory etc. ...
    parentdir('..','/A/B/C'; // Returns: '/A/B' 

--------------------------------------------------------------

### Module: sort/queue

Sort a list/queue of objects by an identifier/key.

    sortqueue(queue,key,sort);
    

* **queue** List of objects.
* **key** Common identifier to use for sorting
* **sort** Array.sort compatible sorting algorithm @see [Array.sort](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/sort) for details 

#### Examples:

    var list = [
        {id:2},
        {id:4},
        {id:1},
        {id:3}
    ];

    var numericSort = function(a,b){
        return a-b;
    }

    var sortqueue = require('toolbelt').pick('sort/queue');    

    var sortedList = sortqueue(list,'id',numericSort);

    // sortedList is now:
    //[
    //    {id:1},
    //    {id:2},
    //    {id:3},
    //    {id:4}
    //]    

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

### Module: txt/wordwrap

WordWrap for Hipsters.

    wordwrap(str [,width] [,fill] [,brk] [,cut]);

* **str** The string to be wrapped
* **width** The column width (a number, default: 75)
* **brk** The character(s) to be inserted at every break (default: '\n')
* **cut** A Boolean value (false by default). [PHP docs](http://us3.php.net/manual/en/function.wordwrap.php) for more info.

#### Examples:

    var wordwrap = require('toolbelt').pick('txt/wordwrap');
    var wrapedTxt = wordwrap('Thundercats polaroid sartorial synth messenger bag wes anderson.', 20, '<br/>\n');

    // returns 
    // Thundercats polaroid <br/>\n
    // sartorial synth <br/>\n
    // messenger bag wes <br/>\n
    // anderson.

--------------------------------------------------------------

### Module: txt/iwordwrap

WordWrap for Hipsters. A iOS like wordwarp that shorts a Text in the middle deppending on its length.

    iwordwrap(str [, length] [,fill]);

* **str** Text to shortend.
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

#####Copyright (c) 2010-2012 Alexander Pirsig <self@pirsig.net>

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