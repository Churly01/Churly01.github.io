import { useState } from 'react'

const TextField = ({
  onSaveMessage,
}) => {

  const [val, setVal] = useState("Hola Amorcito escribe aqui");

  const onChange = event => {
    setVal(event.target.value);
  };
  const onClick = () => {
    onSaveMessage({
      messageText: val,
      messageTitle: "Elena me da amor"
    });
  };
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
