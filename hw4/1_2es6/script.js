"use strict";

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

console.log("----ES6----");
var myAttachedPost = new AttachedPost("Bob", "About Bob", "10.12.2002");
console.log(JSON.stringify(myAttachedPost));
myAttachedPost.edit("New story about Bib");
myAttachedPost.makeTextHighlighted();
console.log(JSON.stringify(myAttachedPost));