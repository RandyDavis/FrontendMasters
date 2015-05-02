// Functions - Constructors

function AnimalMaker(name) {
    return {
        speak: function() {
            console.log("my name is ", name);
        }
    };
};

var animalNames = ['Sheep', 'Liger', 'Big Bird'];