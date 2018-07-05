// Variables
const notesList = document.getElementById('tweet-list');

// Event Listeners
eventListeners();

function eventListeners() {

    // Form Submission
    document.querySelector('#form').addEventListener('submit', newNote);

    // Remove note from the list
    notesList.addEventListener('click', removeNote);

    // Document
    document.addEventListener('DOMContentLoaded', localStorageOnLoad());
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
    notesList.appendChild(li);

    // Call to add to local storage
    addNoteToLocalStorage(note);

}

// Removes the notes from the DOM
function removeNote(e) {
    if(e.target.classList.contains('remove-tweet')) {
        e.target.parentElement.remove();
    }
}

// Save note to local storage
function addNoteToLocalStorage(note) {
    let notes = getNoteFromLocalStorage();

    // Add note to array
    notes.push(note);

    // Convert notes array to string
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Get note from local storage
function getNoteFromLocalStorage() {
    let notes;
    const notesList = localStorage.getItem('notes');
    // Get the value, if null is returned then create an empty array
    if (notesList === null) {
        notes = [];
    } else {
        notes = JSON.parse(notesList);
    }

    return notes;
}

// Prints local storage notes on load
function localStorageOnLoad() {
    let notes = getNoteFromLocalStorage();

    // Loop throughout storage and then print the values
    notes.forEach(function(note) {
        
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
        notesList.appendChild(li);
    });
}