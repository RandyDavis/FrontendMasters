// Scope - Local and Global Scope

// Anatomy of a function
var add = function(a, b) {
  return a + b;
};

console.log(add(3, 4, 5)); // 7

// Local scope 
var func = function() {
  var local = true;
};

//console.log(local); // undefined


// Global scope
var x = 'global';
 // inside a function
 function encapsulate() {
  z = "global here, too!"; // leaving "var" off automatically makes variable part of global scope

  window.y = 'also, global!'; // all global variables are attached to the window environment
 }

 console.log(x); // 'global'
