const addBtn = document.querySelector(".btn");
const notesContainer = document.querySelector(".notes-container");

// reloads Notes
window.addEventListener("load", () => {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
});

// Save notes to localStorage
function saveNotes() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Add new note
addBtn.addEventListener("click", () => {
    const noteBox = document.createElement("div");
    noteBox.className = "input-box";

    const text = document.createElement("span");
    text.contentEditable = "true";

    const trash = document.createElement("i");
    trash.className = "fa-solid fa-trash-can";

    noteBox.appendChild(text);
    noteBox.appendChild(trash);
    notesContainer.appendChild(noteBox);

    saveNotes();
});

// Delete note
notesContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-trash-can")) {
        e.target.parentElement.remove();
        saveNotes();
    }
});

// Auto-save 
notesContainer.addEventListener("input", () => {
    saveNotes();
});
