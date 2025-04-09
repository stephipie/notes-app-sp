const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.NOTES_API_PORT || 8080;

// Middleware json-Format
app.use(express.json());

// Middleware cors
const corsOptions = {
  origin: "http://20.79.183.124",
};
app.use(cors(corsOptions));

let notes = [
  {
    id: 1,
    note: "My new Note",
    author: "Max Mustermann",
    date: "2025-01-15",
  },
];

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});

app.get("/", (request, response) => {
  response.send("Hello World");
});

app.get("/notes", (request, response) => {
  response.json(notes);
});

app.get("/notes/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const note = notes.find((note) => note.id === id);
  if (note) {
    response.json(note);
  } else {
    response.status(404).json({ message: `Note with id ${id} not found` });
  }
});

app.post("/notes", (request, response) => {
  const lastId = notes.length > 0 ? notes[notes.length - 1].id : 0;
  const newNote = {
    id: lastId + 1,
    note: request.body.note,
    author: request.body.author,
    date: new Date(),
  };
  notes.push(newNote);
  response.json(notes);
});

app.put("/notes/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const note = notes.find((note) => note.id === id);
  if (note) {
    note.note = request.body.note;
    note.author = request.body.author;
    note.date = request.body.date;
    response.json(notes);
  } else {
    response.status(404).json({ message: `Note with id ${id} not found` });
  }
});

app.delete("/notes/:id", (request, response) => {
  const id = parseInt(request.params.id);
  notes = notes.filter((note) => note.id !== id);
  // notes.forEach((note) => {
  //     let newId = parseInt(note.id);
  //     if (id < newId) {
  //         newId = newId - 1;
  //         note.id = newId;
  //     };
  // });
  response.json(notes);
});
