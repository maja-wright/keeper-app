import React, { useState } from "react";
import Zoom from '@material-ui/core/Zoom';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

 function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function expand(){
        setExpanded(true);
    }

     return (
         <div>
             <form className="create-note">
                {isExpanded && (
                    <input 
                        onChange={handleChange} 
                        value={note.title} 
                        name="title" 
                        placeholder="Title" 
                    />
                )}
                <textarea 
                    onClick={expand} 
                    onChange={handleChange} 
                    value={note.content} 
                    name="content" 
                    placeholder="Take a note..." 
                    rows={isExpanded ? 3 : 1}
                />
                <Zoom in={isExpanded}>
                    <Fab onClick={(event) => {
                        props.addNote(note);
                        setNote({
                            title: "",
                            content: ""
                        });
                        event.preventDefault();
                    }}>
                    <AddIcon />
                    </Fab>
                </Zoom>
             </form>
         </div>
     );
 }

 export default CreateArea;

//  Creating a new const that keeps track of the title and content
// distracting the event so we get the value and name
// now we can use name and value as separate concepts
// setNote is going to be able to receive previuse Note and add a new one
// return a new object with a previose note, and in addion adding a new name and value
// [name] this sentacts simply turns this name key from just string to the actual value of the constent name ES6
// ...this is spread operator that takes previosly made objects