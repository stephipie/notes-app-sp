import "./style.css";
const API_URL = 'http://localhost:8080/'
const modal = document.querySelector("#modal");
const resetBtn = document.querySelector("#dismiss");
const addBtn = document.querySelector("#add");
const notes = document.querySelector("#notes");


// Show / Hide modal
addBtn.addEventListener("click", () => {
  modal.classList.toggle("hidden");
});

// Hide modal
resetBtn.addEventListener("click", () => {
  modal.classList.toggle("hidden");
});

// fetch data from API
const fetchNotes = async () => {
  const res = await fetch(`${API_URL}notes`);
  const data = await res.json();
  //console.log(data);
  renderNotes(data);
};

// Render Notes in Page
const renderNotes = async (data) => {
  console.log(data);
  notes.innerHTML = "";
  data.forEach((note) => {
    const date = new Date(note.date);
    const day = date.getDate();
    const month = date.toLocaleString("de-DE", { month: "long" });
    const li = document.createElement("li");
    li.classList.add("my-2", "mb-4", "flex", "gap-4", "rounded-lg", "bg-slate-100", "p-4", "shadow-lg");
    li.innerHTML = `
    <div
    class="flex max-h-16 flex-col items-center rounded-lg bg-slate-500 p-2 text-white">
    <span class="text-2xl leading-6">${day}</span>
    <span class="text-sm">${month}</span>
    </div>
    <div>
    <h3 class="text-xs text-slate-700">${note.author}</h3>
    <p class="font-semibold text-gray-800">
    ${note.note}
    </p>
    </div>
    <div class="relative">
    <button class="flyout-btn">...</button>
    <div class="flyout absolute right-6 top-0 hidden">
    <ul class="flex flex-col gap-2 rounded-lg bg-white p-2 shadow-lg">
    <li class="rounded-lg p-2 hover:bg-gray-100">Edit</li>
    <li class="rounded-lg p-2 hover:bg-gray-100">Delete</li>
    </ul>
    </div>
    </div>
    `;
    notes.appendChild(li);
    // Show / Hide flyout
    const flyoutBtn = li.querySelector(".flyout-btn");
    flyoutBtn.addEventListener("click", (e) => {
      const parent = flyoutBtn.closest(".relative");
      const flyout = parent.querySelector(".flyout");
      flyout.classList.toggle("hidden");
    });
  });
};


// Add new note or edit existing note
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const note = document.getElementById('note').value;
  const author = document.getElementById('author').value;
  const date = new Date();
  const formData = {
    note: note,
    author: author,
    date: date
  }
  addNote(formData);
});

// Add new note
const addNote = async (note) => {
  const response = await fetch(`${API_URL}notes`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
  })

};

// Edit existing note
const editNote = async (note) => {};

// Delete note
const deleteNote = async (id) => {};

// init app
fetchNotes();
