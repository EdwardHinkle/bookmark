"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//export * from './lib/goodreads';
var goodreads_1 = require("./lib/goodreads");
var test = new goodreads_1.Goodreads({ key: 'KSXzo3GFar32jnjtiVlQjw', secret: 'hP7UPqEHVGUlDEdAd5JiRsiCwBj5OMDqPwe5rZz9o' });
test.showUser('eddiehinkle').then(function (val) {
    console.log(val.user);
});
