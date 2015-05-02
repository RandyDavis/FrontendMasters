// Functions - Looping

var AnimalMaker = function(name) {
    return {
        speak: function() {
            console.log("my name is ", name);
        },
        name: name,
        owner: 'Randy'
    };
};

var animalNames = ['Sheep', 'Liger', 'Big Bird'];

var farm = [];

for(var i = 0; i < animalNames.length; i++) {
    //var myAnimal = new AnimalMaker(animalNames[i]); // OR
    var myAnimal= AnimalMaker(animalNames[i])
    farm.push(myAnimal);
    // The next line shows the previous 2 lines condensed onto one
    // farm.push(AnimalMaker(animalNames[i]));
    console.log(myAnimal.speak());
}

for(var i =0; i < farm.length; i++) {
    farm[i].speak();
}