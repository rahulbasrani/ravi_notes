import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


const CreateNote=(props)=>{
    const[note,setData]=useState({
        title:"",
        content:"",
    });

    const [expand,setExpand]=useState(false);
    
    const addItems=()=>{
        props.placenote(note);
        setData({
            title:"",
            content:"",
        });


    };

    const InputEvent=(event)=>{
        const name=event.target.name;
        const value=event.target.value;

        setData((prevData)=>{
            return{
            ...prevData,
            [name]:value,
            };
        
        }
    );
    console.log(note);
    };

    const expandIt=()=>{
        setExpand(true);
    }

    const btonom=()=>{
        setExpand(false);
    }
   
    
    return(
        <>
            <div className="main_note" onDoubleClick={btonom}>
                <form>
                    {expand?<input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title"    />:null}
                    <textarea rows="" column="" name="content" value={note.content} onChange={InputEvent} placeholder="Write a Note" onClick={expandIt} />
                    {expand?<Button onClick={addItems}>
                        <AddIcon className="plus_sign"/>
                    </Button>:null}
                </form>
            </div>
        </>
    );
};

export default CreateNote;