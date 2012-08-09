# ToolBelt

A set of helpers, that makes the daily work with node a bit easier.

Contributes are welcome!

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

### Module: base/extend

Merge the contents of two or more objects together into the first object.    

    extend( target [, object1] [, objectN] );

*** target *** An object that will receive the new properties
*** object1 *** An object containing additional properties to merge in.
*** object2 *** Additional objects containing properties to merge in.

#### Examples:

*** Shallow extend ***

    var extend = require('toolbelt').pick('base/extend');
    var data = extend({a:1},{b:2});

*** Deep extend ***

    var extend = require('toolbelt').pick('base/extend');
    var data = extend(true,{a:1},{b:2});


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