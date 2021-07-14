import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";

function App() {

const [notes,setNotes]=useState([]);

function addNote(note){
setNotes(prevNotes => {
  return [...prevNotes, note]
})
}

function deleteNote(id) {
  setNotes(prevNotes => {
    return prevNotes.filter((noteItem, index) => {
      return index !== id;
    });
  });
}
  return (
    <div>
      <Header />
     <CreateNote onAdd={addNote}></CreateNote>
     {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            titleText={noteItem.title}
            contentText={noteItem.content}
            onDelete={deleteNote}
           
          />
        );
      })}
      <Footer />
    </div>
  )
}

export default App;
