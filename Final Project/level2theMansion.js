// JavaScript source code
//level 2 the mansion javascript file
// HorrorMystery Written by Jeff Tufts 12/10/24

function LevelTwo() {
    alert("Welcome to The Mansion.");
    document.write("You are standing in front of a large mansion in an empty field. You don't remember how you got here and honestly don't remember your own name. Suprisingly you remember what a name is.");
}


// Define the game's scenes and questions in an array
const scenes =
    [
        { //0
            text: "The front door to the mansion is large and elegant. You see no lights and hear no noise. There are no neighbors for miles. You start to worry that something weird is going on.",
            options: [
                { choice: "Knock on the door.", message: "You knock on the door but there is no answer." },
                { choice: "Peer through the window.", message: "You look through the front window. You can't see anything." },
                { choice: "Go around to the back.", message: "You walk around the mansion to the back." }
            ],
            nextScene: [1, 2, 3] // Indices of the next scenes
        },
        { //1
            text: "After knocking you wait a few minutes before knocking again. No answer.",
            options: [
                { choice: "Peer through the window.", message: "You look through the front window. You can't see anything." },
                { choice: "Go around to the back.", message: "You walk around the mansion to the back." }
            ],
            nextScene: [2, 3] 
        },
        { //2
            text: "You back away from the window look around the old porch. You see nothing of importance.",
            options: [
                { choice: "Go around to the back.", message: "You walk around the mansion to the back." },
                { choice: "Go over to the garage and look around", message: "You walk over to the garage. You hear something crack in the distance." },
            ],
            nextScene: [3, 5]
        },
        { //3
            text: "You make your way around the back of the mansion. As you reach the back of the building you see a cellar entrance and a rear door the house.",
            options: [
                { choice: "Open the cellar doors.", message: "You see a dark stairway leading into the cellar. It is too dark to see.", },
                { choice: "Move over to the rear door of the house.", message: "The door is locked. There is a small window.", }
            ],
            nextScene: [4, 6]
        },
        { //4
            text: "You are staring into the dark cellar, do you want to go down?",
            options: [
                { choice: "Yes", message: "You make your way down into the cellar.", },
                { choice: "No", message: "You close the doors and move away from the cellar and towards the door.", }
            ],
            nextScene: [7, 6]
        },
        { //5
            text: "You are in front of the garage. You try to make out if you can see something in the distance. ",
            options: [
                { choice: "Walk around to the left side", message: "You make your way to the left side of the garage. You see a window.", },
                { choice: "Walk around to the right side", message: "You make your way to the right side of the garage. You see a door.", },
                { choice: "Walk to the back of the garage", message: "You approach the back of the garage and hear another noise.", }
            ],
            nextScene: [8, 9, 10]
        },
        { //6
            text: "The door has a small window on it. You could break it and unlock the door...",
            options: [
                { choice: "Break the window and unlock the door.", message: "You wrap your fist in your shirt and punch the window. You reach down and unlock the door...", },
                { choice: "Ignore the door for now.", message: "You ignore the door and window and make your way to the other side of the house.", }
            ],
            nextScene: [8, 9]
        },
        { //7
            text: "You slowly step down into the cellar. It is cold, dark, and drafty. You reach the floor and start to slowly walk around...",


        },
    ];

let currentScene = 0; // Start at the first scene
let userChoices = []; // Array to store the user's choices
let sceneHistory = []; // Array for text of previous scenes

// Function to start the game
function startGame() {
    currentScene = 0; // Reset the game to the first scene
    userChoices = []; // Reset the user's choices
    sceneHistory = [];
    document.getElementById('output').innerHTML = ""; // Clear any previous output
    document.getElementById('start').style.display = 'none'; // Hide the Start Game button
    showScene(); // Show the first scene
}

// Function to show the current scene
function showScene() {
    const scene = scenes[currentScene]; // Get the current scene
    let output = "";

    sceneHistory.forEach(text => {
        output += `<p>${text}</p>`;
    });



    // Display the user's previous choices above the current options
    if (userChoices.length > 0) {
        output += '<ul>';
        userChoices.forEach(choice => {
            output += `<li>${choice}</li>`;
        });
        output += `</ul>`;
    }

    output += `<p>${scene.text}</p>`;

    // Display the options as clickable buttons
    output += `<ul>`;
    scene.options.forEach((option, index) => {
        output += `<li><button onclick="chooseOption(${index}, '${option.message}')">${option.choice}</button></li>`;
    });
    output += `</ul>`;

    document.getElementById('output').innerHTML = output; // Update the output section
}

// Function to handle the player's choice
function chooseOption(choiceIndex, message) {
    const scene = scenes[currentScene]; // Get the current scene
    userChoices.push(message); // Add the corresponding message to the user's choices
    currentScene = scene.nextScene[choiceIndex]; // Move to the next scene based on the choice
    showScene(); // Show the next scene
}

/* function to check inventory of found items
function checkInventory() {
    const Inventory = []
    
}
*/