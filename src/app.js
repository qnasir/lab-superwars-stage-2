const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    for (var i=0; i<PLAYERS.length; i++) {
        var player = {
            name: PLAYERS[i];
            strength: getRandomStrength();
            image: `images/hero-${i+1}.png`;
            type: getRandomType();
        }
    }
    

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    return Math.ceil(Math.random()*101)
}

let arr = ["hero", "villian"];
function getRandomType () {
    var type = arr[Math.floor(Math.random()*arr.length)]
    return type;
}

const buildPlayers = (players, type) => {
    let fragment = '';

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    if (type == "hero") {
        for (var i=0; i<players.length; i++) {
            if (players[i].type == "hero") {
                fragment = fragment + `<div class="player">
                <img src="${players[i].image}">
                <div class="name">${players[i].name}</div>
                <div class="strength">${players[i].strength}</div>
             </div>`
            }
        }
    }


    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}