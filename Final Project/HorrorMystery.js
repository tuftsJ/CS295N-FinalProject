// JavaScript source code
// HorrorMystery Written by Jeff Tufts 12/7/24
function WelcomePrompt()
{
    alert("Welcome to Castle Dread! \nDo your best to solve the mystery and make it out alive! HAHAHA!");
}

    
function LevelOne()
{
    alert("You are standing in front of a large castle.\nIt is foggy, dark, and cold.\nYou look up and see that there are lights on coming from the upper story windows.\nYou make your way to the door.");
    document.write("You are standing in front of a large castle.\nIt is foggy, dark, and cold.\nYou look up and see that there are lights on coming from the upper story windows.\nYou make your way to the door.");
    document.write("You are stanidng in front of the front door. The wind is blowing and you hear the tress rustling.");
}


// Define the game's scenes and questions in an array
const scenes =
[
    { //0
        text: "The door is old  and wooden. It is covered in spider webs and you can see moss growing from the cracks. The wind is blowing, but there is no noise coming from inside the house. What do you do?",
        options: [
            { choice: "Open the door and make your way inside.", message: "You open the door and make your way to the foyer. You look around and see lots of dust. A few lit candles. There is a grandfather clock standing to your left, a desk with some items on it to the right." },
            { choice: "Knock.", message: "You, knock on the door. There is no answer." }
        ],
        nextScene: [1, 4] // Indices of the next scenes
    },
    { //1
        text: "As you land in the foyer, the grandfather clocks begin to ring loud as it strikes 9pm. ",
        options: [
            { choice: "Inspect the grandfather clock.", message: "The clock's main compartment door is loose." },
            { choice: "Move into the next room on the right.", message: "You move on into the next room." }
        ],
        nextScene: [2, 7] // Next scene choices
    },
    { //2
        text: "You inspect the clock. There doesn't seem to be anything strange about it. You pull the compartment door open, the grandfather clocks begin to ring loud as it strikes 10pm. ",
        options: [
            { choice: "Continue inspecting", message: "You see an inscription on the back of the compartment door. It says: 'blank'. " },
            { choice: "Move on from the grandfather clock.", message: "You stop inspecting the clock. You see two rooms. One to the right and the living room straight ahead." }
        ],
        nextScene: [, 3] // Next scene choices
    },
    { //3
        text: "You see a room passed the one you are in. You see the living room straight ahead. ",
        options: [
            { choice: "Yes, move into the living room", message: "You step inside and feel the cold air. You can barely make out the shape of furniture in the dim light. A few candles flicker on a nearby table." },
            { choice: "Move into the next room on the right.", message: "You move on into the next room." }
        ],
        nextScene: [6, 7] // Next scene choices
    },
    { //4
        text: "You knock on the door, but no one answers. You wait.",
        options: [
            { choice: "Try knocking again", message: "You knock again, louder this time. After a long pause, you hear something from inside, but no one comes to the door." },
            { choice: "Leave", message: "You give up and turn away from the door. There's a sense of unease, but you decide to move on." }
        ],
        nextScene: [4, 0] // Next scene choices
    },
    { //5
        text: "The wind blows cold as you make your way to your car. ",
        options: [{ choice: "", message: "" }],
        nextScene: [1, 1] // Next scene choices
    },
    { //6
        text: "You are in the living room. It is dark. A few candles are lit. You see a bookshelf and the faint outlines of two doors. ",
        options: [
            { choice: "Light the other candles.", message: "You use the already lit candles to light the other few. The room is slightly brighter. You can make out the furniture and the other doors better." },
            { choice: "Inspect the door on the left.", message: "There are odd carvings on the front of the door. It looks like a wolf and an eagle." },
            { choice: "Inspect the door on the right.", message: "The door on the right is old and falling apart. It is still in one piece. For now."}
        ],
        nextScene: [8, , ] // Next scene choices
    },
    { //7
        text: "You move into the room next room on the right. It is a small sitting room with two chairs, a small table, and a large walk-in room with a clear door and some sort of gauge on it.",
        options: [
            { choice: "Walk up to the door to inspect", message: "You peer into the room through the glass door. You see shelves with small boxes on them. You look closer and can see what looks like cigars. The gauge measures humidity and temperature." },
            { choice: "Sit in the chair.", message: "You sit down to catch your breath. As you lean back, you feel something from within the cushion." },
            { choice: "Inspect the small table.", message: "You look at the table. There is nothing special about it." },
            { choice: "Turn around and head towards the living room.", message: "You decide to turn around and go into the living room."}
        ],
        nextScene: [ , , , 6] // Next scene choices
    },
    { //8
        text: "Now that there is more light in the room, you can see the bookshelf more clearly. There are some things sitting on a bookless shelf. ",
        options: [
            { choice: "You fart.", message: "You accidentally fart and stink up the place. You are now being haunted by the ghost of the castle." },
            { choice: "You Inspect the books.", message: "You go up to the bookshelf and inspect all of the books. You see some familiar, some unfamiliar, and some that look ancient." }
        ],
        nextScene: [0, 13] // Next scene choices
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



