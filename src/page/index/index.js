// cats = require('./cats.js');
// console.log(cats);

'use strict';

console.log('index');

// var $ = require('jquery');
// 如果这样引用的话, 所有使用jquery的文件都需要引入

// $('body').html('hello world');

$('body').html('cdn hello world');

var $$ = require('jquery');

setTimeout(function () {
    $$('body').html('external hello world');
}, 5000);
