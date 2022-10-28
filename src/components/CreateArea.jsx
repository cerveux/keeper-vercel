import React, { useState } from "react";
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';


function CreateArea(props) {
  const [create, setCreate] = useState({title:"", content: ""});
  const [estado, setEstado] = useState(false);
  function crearNota(event){
    const {name, value} = event.target;
    setCreate((prevValue)=>{
      return {
        ...prevValue,
        [name]: value
      }
    }
    )
  }
  return (
    <div>
      <form className="create-note" onMouseOver={()=>setEstado(true)} >

        {estado && <input onChange={crearNota} name="title" placeholder="Title" value={create.title} />}
        
        <textarea onChange={crearNota} name="content" placeholder="Take a note..." value={create.content} rows={estado? "3":"1"} />
        
        <Zoom in={estado}>
        <Fab onClick={(event)=>{

        if(create.title !== "" && create.content !== "" ){props.addNote(create);
        event.preventDefault();
        setCreate({title:"", content: ""});}
      
      }}><AddIcon /></Fab>
      </Zoom>
        
        
      </form>
    </div>
  );
}

export default CreateArea;
