import "./style.css";
const modal = document.querySelector("#modal");
const resetBtn = document.querySelector("#dismiss");
const addBtn = document.querySelector("#add");
const flyoutBtns = document.querySelectorAll(".flyout-btn");

// Show / Hide flyout
flyoutBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const parent = btn.closest(".relative");
    const flyout = parent.querySelector(".flyout");
    flyout.classList.toggle("hidden");
  });
});

// Show / Hide modal
addBtn.addEventListener("click", () => {
  modal.classList.toggle("hidden");
});

// Hide modal
resetBtn.addEventListener("click", () => {
  modal.classList.toggle("hidden");
});

// fetch data from API
const fetchNotes = async () => {};

// Render Notes in Page
const renderNotes = async () => {};

// Add new note or edit existing note
form.addEventListener("submit", async (e) => {});

// Add new note
const addNote = async (note) => {};

// Edit existing note
const editNote = async (note) => {};

// Delete note
const deleteNote = async (id) => {};

// init app
fetchNotes();
