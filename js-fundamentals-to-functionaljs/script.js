// Functions - Arguments/Parameters

var nameImprover = function (name, adj) {
    return 'Col ' + name + ' Mc' + adj + ' pants';
};

function nameStaySame(name) {
    return name;
}

console.log(nameImprover('Randy', 'Sexy'));

$('body').hide();

// The following is just an example of how we would run the forEach() on an array
// called myArr that is NOT currently defined
//myArr.forEach(function(val){ console.log(val);});
//
//$('button').on('click', function () {
//    console.log('Don\'t press my buttons!');
//});


// Quick Review
var add = function(a, b, c) {
    console.log(arguments);
    return b + c;
}

add(3, 4, 5); // 7

add(8, 10, 3); // 13?

var addAll = function(a, b) {
    results = 0;

    for(var i = 0; i < arguments.length; i++) {
        results += arguments[i];
    }
    console.log(results);
}

var arrayLikeAddObject = function(a, b) {
    Array.prototype.slice.call(arguments, 0);
    return a + b;
};

console.log(arrayLikeAddObject(3, 10, 5)); // 13

// Functions are Objects
var addAgain = function(a, b) {
    return a + b;
};
addAgain.example = 'testing 123!';
console.log(addAgain.example); // 'testing 123!'