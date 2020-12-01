"use strict";

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function(str) {
    return this.text = str;
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    return this.highlighted = true;
}

console.log("----ES5----");
var myAttachedPost = new AttachedPost("Bob", "About Bob", "10.12.2002");
console.log(JSON.stringify(myAttachedPost));
myAttachedPost.edit("New story about Bib");
myAttachedPost.makeTextHighlighted();
console.log(JSON.stringify(myAttachedPost));