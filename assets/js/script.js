//DOM
const startbutton = document.querySelector("#begin");
const quizcard = document.querySelector("#quiz_container");
const question = document.getElementById("question");
const choices = document.getElementById("choices");
const next = document.querySelector("#next");
const finalpage = document.querySelector(".results");
const score = document.getElementById("score");
let questionchoices = document.querySelector(".ABCD");
let timeleft = 120;
let timestate;
var current = 0; 

//start
document.querySelector(".start_button").addEventListener("click", startQuiz);
function startQuiz() {
    quizcard.removeAttribute("class");
    timestate = setInterval(timerdecrement, 1000);
    displayquestions ();
}

//timer
const timer = document.getElementById("countdown");
function timerdecrement () {
    timeleft -- 
    timer.textContent = timeleft;
    if (timeleft <= 0) {
        clearInterval(timestate);
        finalpage.removeAttribute("class", "hidden");
    }
}

function displayquestions () {
    let questionsindex = questions[current];
    question.textContent = questionsindex.question;
    questionchoices.innerHTML = "";
    questionsindex.choices.forEach (function (choice) {
        let answerbutton = document.createElement ("button");
        answerbutton.setAttribute ("class", "option");
        answerbutton.setAttribute ("value", choice);
        answerbutton.textContent = choice; 
        answerbutton.onclick = checkanswer;
        questionchoices.appendChild (answerbutton);


    })
}

function checkanswer () {
    if (this.value === questions[current].answer) {
        console.log("correct");
    }
    else {
        console.log("incorrect");
        timeleft = timeleft - 10;
        timer.textContent = timeleft;
    }
    current ++;
    if (current === questions.length) {
        //call quiz end function
    }
    else {
        displayquestions ();
    }

}

//questions 
const questions = [
    {
        question: "How many infinity stones are there?",
        choices: ["a. 6", "b. 7", "c. 5", "d. 4"],
        answer: "a. 6"
    },
    {
        question: "What does SHIELD stand for?",
        choices: ["a. Strategic Homeland Intervention, Engineering, and Logistics", "b. Strategic Homeland Invention, Enforcement, and Logistics", "c. Strategic Homeland Intervention, Enforcement, and Logistics", "d. Strategic Homeland Intervention, Enforcement, and Lifeforms"],
        answer: "c. Strategic Homeland Intervention, Enforcement, and Logistics"
    },
    {
        question: "What is Doctor Strange’s medical specialty before he loses his ability to use his hands?",
        choices: ["a. Cardiac Surgeon", "b. Neurosurgeon", "c. Psychiatry", "d. General Surgeon"],
        answer: "b. Neurosurgeon"
    },
    {
        question: "Who was responsible for the death of King T’Chaka’s death in the bombing of the Accords?",
        choices: ["a. Red Skull", "b. Zemo", "c. White Wolf", "d. Steve Rogers"],
        answer: "b. Zemo"
    },
    {
        question: "The Soul Stone, found originally by Gamora, is found on what planet?",
        choices: ["a. Ego", "b. Xandar", "c. Vormir", "d. Sakaar"],
        answer: "c. Vormir"
    },
    {
        question: "What is Pepper Potts allergic to?",
        choices: ["a. Alcohol", "b. Shrimp", "c. Bananas", "d. Strawberries"],
        answer: "d. Strawberries"
    },
    {
        question: "In the cinematic universe of the MCU, how many children does Hawkeye have?",
        choices: ["a. 3", "b. 2", "c. 1", "d. 0"],
        answer: "a. 3"
    },
    {
        question: "What eye does Nick Fury have an eyepatch covering?",
        choices: ["a. Left", "b. Right", "c. Third-eye", "d. He doesn't have an eyepatch"],
        answer: "a. Left"
    },
    {
        question: "What is the name of Thor’s hammer?",
        choices: ["a. Odinsword", "b. Mjolnir", "c. Jarnbjorn", "d. Uru Destroyer"],
        answer: "b. Mjolnir"
    },
    {
        question: "Before Mark Ruffalo’s appearance as the Hulk in “The Avengers (2012),” who originally played Hulk in “The Incredible Hulk (2008)?”",
        choices: ["a. Lou Ferrigno", "b. Christian Bale", "c. Brandon Routh", "d. Edward Norton"],
        answer: "d. Edward Norton"
    },
    {
        question: "Before Captain America saves the world from the destructive hands of the Red Skull (Johann Schmidt), what club does Peggy Carter say they can meet up at for a dance?",
        choices: ["a. The Rockettes", "b. The Stork Club", "c. Brooklyn Bar", "d. Bar and Stool"],
        answer: "b. The Stork Club"
    },
    {
        question: "Who is the founder of SHIELD’s sister agency, SWORD?",
        choices: ["a. Monica Rambeau", "b. Nick Fury", "c. Maria Rambeau", "d. Phil Coulson"],
        answer: "c. Maria Rambaeu"
    },
    {
        question: "In the piloting series WandaVision, what do Wanda and Vision name their twin boys?",
        choices: ["a. Billy and Tommy", "b. Billy and Johnny", "c. Johnny and Billy", "d. Tommy and Luke"],
        answer: "a. a. Billy and Tommy"
    },
    {
        question: "What play did Trevor Slattery perform for the Ten Rings that spared his life?",
        choices: ["a. Midsommer's Night Dream", "b. Macbeth", "c. Hamlet", "d. Romeo and Juliet"],
        answer: "b. Macbeth"
    },
    {
        question: "What movie did Stan Lee make his final cameo in?",
        choices: ["a. Avengers: Infinity War", "b. Spiderman Homecoming", "c. Black Widow", "d. Avengers: Endgame"],
        answer: "d. Avengers: Endgame"
    },
    {
        question: "At the end of Captain Marvel, Nick Fury gets scratched across his eye by a creature named (in the cinematic universe) Goose. What race of aliens, that closely resembles Earth’s cats, resulted in SHIELDs’ head director’s signature eye patch?",
        choices: ["a. Deviant", "b. Skrull", "c. Flerken", "d. Kree"],
        answer: "b. Flerken"
    },
    {
        question: "What is the pseudonym Natasha Romanoff uses when she goes undercover as Tony Stark’s new assistant?",
        choices: ["a. Natasha Rushman", "b. Nicky Rome", "c. Sierra River", "d. Nat Gilmore"],
        answer: "a. Natasha Rushman"
    },
    {
        question: "In the first Guardians of the Galaxy movie, what three items does Rocket tell the group he needs to execute their plan of escape from The Kyln?",
        choices: ["a. A security band, a battery, and a prosthetic eye", "b. A security band, a prosthetic leg, and a battery", "c. An arm, a leg, and a battery", "d. A power source, muscle, and a prosthetic leg"],
        answer: "b. A security band, a prosthetic leg, and a battery"
    },
    {
        question: "What is the only Marvel movie to not have a post-credit scene?",
        choices: ["a. Avengers: Infinity War", "b. Black Panther", "c. Avengers: Endgame", "d. Captain Marvel"],
        answer: "c. Avengers: Endgame"
    },
    {
        question: "What is the metal that Wolverine’s claws are coated in?",
        choices: ["a. Adamantium", "b. Vibranium", "c. Mithril", "d. Saronite"],
        answer: "a. Adamantium"
    },
]; 

//move to results page
document.querySelector(".next_button").addEventListener("click", showResults);
function showResults() {
    finalpage.removeAttribute("class", "hidden");
}

//scores
var formEl = document.querySelector("#task_form"); 
var InitialsListed = document.querySelector("#previous");

var createTaskHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;


    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    var InitialsInfoEl = document.createElement("div");
    InitialsInfoEl.className = "task-info";

    listItemEl.textContent = "Initials";
    InitialsListed.appendChild(listItemEl);
    console.log(event);

    var InitialsInput = document.querySelector("input[name='task-name']");
    console.dir(InitialsInput);
};
formEl.addEventListener("submit", createTaskHandler);

