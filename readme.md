# [ngOverflowScroll](http://mgcrea.github.com/angular-overflow-scroll) [![Build Status](https://secure.travis-ci.org/mgcrea/angular-overflow-scroll.png?branch=master)](http://travis-ci.org/#!/mgcrea/angular-overflow-scroll)

ngOverflowScroll provides the `scrollable` directive for an always-on native style momentum scrolling using `-webkit-overflow-scroll: touch`.

An element with `-webkit-overflow-scroll: touch` won't be scrollable if its content does not overscroll, it does lead to an akward behavior when something is sometimes scrollable & sometimes not.

The directives has a built-in debounce system listening on `$viewContentLoaded` & `$includeContentLoaded` to re-calculate the proper required height efficiently.



## Examples

[![Demo](http://mgcrea.github.io/angular-overflow-scroll/images/demo.gif)](http://mgcrea.github.com/angular-overflow-scroll)

``` html
<div class="content" scrollable>
</div>
```



## Quick start

+ Install the module with [bower](http://bower.io/)

``` bash
$ bower install angular-overflow-scroll --save
```

+ Include the required libraries:

>
``` html
<script src="components/angular-overflow-scroll/dist/overflow-scroll.min.js"></script>
```

+ Inject the `mgcrea.overflowScroll` module into your app:

>
``` javascript
var app = angular.module('myApp', ['mgcrea.overflowScroll']);
```



## Contributing

Please submit all pull requests the against master branch. If your unit test contains JavaScript patches or features, you should include relevant unit tests. Thanks!



## Authors

**Olivier Louvignes**

+ http://olouv.com
+ http://github.com/mgcrea



## Copyright and license

	The MIT License

	Copyright (c) 2013 Olivier Louvignes

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
