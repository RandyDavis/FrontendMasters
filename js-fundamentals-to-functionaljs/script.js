// ARRAYS - Iteration

var box = [];

box['size'] = 9;

box['0'] = 'meow';
box.push('Whoohoo!');

for(var k in box) {
    console.log(box[k]);
}

for(var i = 0; i < box.length; i++) {
    console.log(box[i]);
}