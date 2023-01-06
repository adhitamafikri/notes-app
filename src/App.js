import "./App.css";
import NoteCard from "./components/NoteCard";
import NoteForm from "./components/NoteForm";

function App() {
  return (
    <div className="App">
      <NoteForm />
      <NoteCard title="Example" body="This is body of note" color="beige" />
      <NoteCard title={24} body="Body ke dua" color="beige" />
    </div>
  );
}

export default App;
