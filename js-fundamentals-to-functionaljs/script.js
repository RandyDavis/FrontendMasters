// Nesting - Nesting Objects


var box = {};
box.innerBox = {};

box['innerBox']['full'] = true;

box.innerBox.babyBox = {};

console.log(box);

var myInnerBox = box.innerBox;
console.log(myInnerBox);  //{full: true}

var bb = box.innerBox.babyBox; // {}
console.log(bb); // {}

box.innerBox.babyBox.says = "What's Up!?"

console.log(box.innerBox.babyBox.says);  // "What's Up!?"

console.log(bb); // { says: "What's Up!?" }