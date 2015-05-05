// Scope - Precedence

var g = "global";

function go() {
  var l = "local";
  var g = "in here!";
  alert(g + " inside go");
}

go();
alert(g + " outside go");


// Block Scope
var inBlock = false;

for(var i = 0; i < 5; i++) {
  var inBlock = true;
};

if(inBlock) {
  console.log('Is there block scope? ' + !inBlock); // Is there block scope? false
}