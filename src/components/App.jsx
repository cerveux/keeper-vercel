import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {


  const [notas, setNotas] = useState([]);
  

  function addNote(nuevaNota){
    setNotas([...notas, nuevaNota]);
  }
  function delNote(chauNota){
    setNotas((prevValue)=>prevValue.filter((nota, index)=> index !== chauNota))
  }



  return (
    <div>
      <Header  />
      <CreateArea addNote={addNote} />
      {notas.map((nota, index)=> <Note key={index} title={nota.title} content={nota.content} id={index} delNote={delNote} />)}

     
      <Footer />
    </div>
  );
}

export default App;
