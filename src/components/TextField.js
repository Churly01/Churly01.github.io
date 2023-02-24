import { useState } from 'react'

const TextField = (style) => {

  const [val, setVal] = useState("Hola Amorcito escribe aqui");

  const onChange = event => {
    setVal(event.target.value);
  }

  const onClick = () => {
    //TODO CREATE API CALL TO STORE THE MESSAGE
    alert("Lo siento gordi por ahora no se pueden guardar mensajes, pero es lo siguiente por hacer")
  }

  return (
    <div
      style={{display:"inline-block", marginTop:"10px", marginLeft:"5px"}}
    >

      <input
        onChange={onChange}
        value={val}
        style={{fontSize:"2em", marginRight:'10px'}}
      />

      <button
        onClick={onClick}
        style={{fontSize:"1.5em"}}
      >
        Dale aqui para guardar guapi
      </button>

    </div>

  );
};

export default TextField;
