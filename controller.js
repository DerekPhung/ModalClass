// Create list of people objects
// using list of people populate cards with their info
// inside card put a circle with their age in it
// next to the circle have their name displayed
// on the right of the card display their place
// round out the edges
// have the top border more promounced
// have space between each of the cards
// have each card highlight when hovering over it
// have the card grow when hovering over it

// phase 2 of test
// create class
// create constructor
// create + shape button to add new form
// create a page to act as a form
// create submit button to add to array and reload page
// create x button to get out of the form page

class Person{

    age;
    place;
    name;

    constructor(userAge, userPlace, userName){
        this.age = userAge;
        this.place = userPlace;
        this.name = userName;
    }
}

let card = [
    {
       age: 10000,
       place: "1st",
       name: "Diablo" 
    },

    {
        age: 16,
        place: "2nd",
        name: "Derek" 
     },

     new Person(31, "3rd","Jimmay")
];

function webPage(){
    document.getElementById("bigBox").innerHTML = ``;

    for(let i = 0; i < card.length; i++){
        document.getElementById("bigBox").innerHTML += `
        <div class="card">
            <div class="age">${card[i].age}</div>
            <div class="place">${card[i].place}</div>
            <div class="name">${card[i].name}</div>
        </div>
    `;
    }
    document.getElementById("bigBox").innerHTML += `
    <button id="btn" onclick="createForm()">+</button>
    `;
}

function createForm(){
    document.getElementById("bigBox").innerHTML += `
    <div id="form">
        <div id="formCenterBox">

            <div class="constraint">
                <div class="lbl">Age:</div>
                <input class="input" type="number" id="ageInput"/>
            </div>

            <div class="constraint">
                <div class="lbl">Place:</div>
                <input class="input" type="text" id="placeInput"/>
            </div>

            <div class="constraint">
                <div class="lbl">Name:</div>
                <input class="input" type="text" id="nameInput"/>
            </div>

            <!--submit button-->
            <div id="works">
                <button id="sbtn" onclick="addToArray()">Submit</button>
            </div>
        </div>
        
    </div>
    `;
}

function addToArray(){
    let age = document.getElementById("ageInput").value;
    let place = document.getElementById("placeInput").value;
    let name = document.getElementById("nameInput").value;
    card.push(new Person(age, place, name));
    webPage();
}

webPage();