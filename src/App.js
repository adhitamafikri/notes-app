import React, { useMemo } from "react";
import NoteCard from "./components/NoteCard";
import NoteForm from "./components/NoteForm";
import "./App.css";

function App() {
  const notes = useMemo(() => {
    const result = localStorage.getItem("notes");
    if (!!result) {
      return JSON.parse(result);
    }
    return [];
  }, []);

  return (
    <div className="App">
      <NoteForm />
      <NoteCard title="Example" body="This is body of note" color="beige" />
      <NoteCard title={24} body="Body ke dua" color="beige" />
    </div>
  );
}

export default App;
