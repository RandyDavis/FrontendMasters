// Nesting - Exercise

// Previous Exercise Code
var AnimalTestUser = function(username) {
    var argsLength = arguments.length;
    var otherArgs = [];

    if (argsLength > 1) {
        for(var i = 1; i < argsLength; i++) {
            otherArgs.push(arguments[i]);
        }
    }
}

var AnimalCreator = function(username, species, tagline, noises) {
    return {
        username: username,
        species: species,
        tagline: tagline,
        noises: noises,
        friends: []
    }
}

var addFriend = function(animal, friend) {
    animal.friends.push(friend.username);
}


var sheep = AnimalCreator('Cloudy', 'sheep', 'Baaaah Fool', ['Baaaah', 'Baaaaaaaaaaah', 'baahbaah']);
var cow = AnimalCreator('Bessy', 'cow', 'Moooo Fool', ['Mooooo', 'Mooooooooove', 'moomoo']);
var llama = AnimalCreator('Edward', 'llama', 'Llama Sound Fool', ['Llama Sound', 'Coffee?', 'Perhaps Tea?']);

var myFarm = [sheep, cow, llama];
addFriend(cow, sheep);
addFriend(llama, cow);
console.log(myFarm);

var addMatchesArray = function(farm) {
    for (var animal in farm) {
        farm[animal].matches = [];
    }
}

var giveMatches = function(farm) {
    for (var animal in farm) {
        farm[animal].matches.push(farm[animal].friends[0]);
    }
}

// Nesting Exercise Code Here //

var friendUsernames = [];

var friends = [];

var animals = myFarm;
friends.push(animals[0].username, animals[1].username);

console.log(friends); // --> Array["Cloudy", "Bessy"]

var relationships = {};

relationships.friends = friends;
console.log(relationships); // --> Object { friends: Array[2]} --- contains "Cloudy" and "Bessy" in friends Array

console.log(Object.keys(relationships).length); // --> 1

var matches = [];

relationships.matches = matches;
relationships.matches.push('pig');
console.log(relationships); // --> Object { friends: Array[2], matches: Array[1] } --> matches array contains "pig" at 0 index

for (var i = 0; i < animals.length; i++) {
    animals[i].relationships = relationships;
}

console.log(animals);

