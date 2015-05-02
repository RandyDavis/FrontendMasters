// Functions - Body/Invocation and call-time

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
myArr.forEach(function(val){ console.log(val);});

$('button').on('click', function () {
    console.log('Don\'t press my buttons!');
});

