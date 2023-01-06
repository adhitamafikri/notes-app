import React, { useMemo } from "react";
import NoteCard from "./components/NoteCard";
import NoteForm from "./components/NoteForm";
import "./App.css";

// note: {
//   title: "",
//   body: "",
//   color: "white",
// }

function App() {
  /**
   * @returns {Array}
   */
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

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          marginTop: 56,
        }}
      >
        {!!notes.length > 0 &&
          notes.map((note) => (
            <NoteCard title={note.title} body={note.body} color={note.color} />
          ))}
      </div>
    </div>
  );
}

export default App;
