// Variables
const notes = document.getElementById('tweet-list');

// Event Listeners
eventListeners();

function eventListeners() {

    // Form Submission
    document.querySelector('#form').addEventListener('submit', newNote);
}

// Functions
function newNote(e) {
    e.preventDefault();

    // Read the textarea value
    const note = document.getElementById('tweet').value;

    // Create a <li> element
    const li = document.createElement('li');
    li.textContent = note;
    notes.appendChild(li);

    console.log(note);
}