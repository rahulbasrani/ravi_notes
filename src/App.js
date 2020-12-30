import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';


const App=()=>{
  const[dta,setDta]=useState([]);

  const deleteIt=(id)=>{
    setDta((prevsItems)=>
      prevsItems.filter((vals,indx)=>{
        return indx!==id;
      })
    );
      
  };

  const addItem=(note)=>{
    // alert("I am clicked");

    setDta((prevValue)=>{
      return [...prevValue,note];
    });
    // console.log(note);
  };
  
  return(
    <>
      <Header/>
      <CreateNote placenote={addItem}/>
      {dta.map((val,index)=>{
        return<Note
          key={index}
          id={index}
          title={val.title}
          content={val.content}
          deleteItem={deleteIt}
        />
      })}
      <Footer/>

      

    </>
  );
};
export default App;