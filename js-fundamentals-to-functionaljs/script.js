// Scope - Parent vs Child Scope

function blender(fruit) { // parent scope
  var b = fruit;
  var y = 'yogurt';

  function blendSmoothie() { // child scope
    alert(b + ' and ' + y + ' makes ' + b + ' swirl');
    var x = 'asdf';
  }
  // console.log(x); // x is not defined error... the child scope can't be reached by the parent scope
  blendSmoothie();
}

blender('blueberry');