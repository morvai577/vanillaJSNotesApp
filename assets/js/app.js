// Variables
const notes = document.getElementById('tweet-list');

// Event Listeners
eventListeners();

function eventListeners() {

    // Form Submission
    document.querySelector('#form').addEventListener('submit', newNote);

    // Remove note from the list
    notes.addEventListener('click', removeNote);
}

// Functions
function newNote(e) {
    e.preventDefault();

    // Read the textarea value
    const note = document.getElementById('tweet').value;

    // Create the remove button
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';

    // Create a <li> element
    const li = document.createElement('li');
    li.textContent = note;

    // Add the remove button to each note
    li.appendChild(removeBtn);

    // Add to the list
    notes.appendChild(li);

    console.log(note);
}

// Removes the notes from the DOM
function removeNote(e) {
    if(e.target.classList.contains('remove-tweet')) {
        e.target.parentElement.remove();
    }
}