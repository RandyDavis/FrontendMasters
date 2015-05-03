// Nesting - More Nesting Examples


var box = {};
box['innerBox'] = {};
box['innerBox'].full = true;

box['innerBox']['height'] = 10;

// Make the innerBox2 object line work Here
box.innerBox2 = {};

box.innerBox2.full = false;

