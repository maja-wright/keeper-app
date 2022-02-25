import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){

    const [notes, setNotes] = useState([]);

    function addNote(note){
        setNotes(prevNotes => {
            return [...prevNotes, note];
        });
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((note, index) => {
                return index !== id;
            });
        });
    }

    // filter function can take up to three arguments, so in order to delete we have to check which ones we want to filter out.
    // first is the value we are currently loopin in array and this is note item, second one is index of the item
    // we want to return all the notes where the index is not equal to id of the note which has to be deleted
    // this way we should end up with array that contains everything in the previose notes other than the ones that index mathes id of the note to be deleted


    return (
    <div>
        <Header />
        <CreateArea 
            addNote={addNote} />
        {notes.map((noteItem, index) => (
        <Note 
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onClick={deleteNote}
        />
        ))}
        <Footer />
    </div>
    );
}

export default App;

//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.