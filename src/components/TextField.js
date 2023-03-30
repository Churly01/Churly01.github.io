import { useState } from 'react'

const TextField = ({
  onSaveMessage,
}) => {

  const [val, setVal] = useState();

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
      style={{display:"inline-block", marginTop:"10px", marginLeft:"5px", width:'80%'}}
    >
      <input
        onChange={onChange}
        value={val}
        style={{fontSize:"1em", marginRight:'10px', type:'text', width:'100%', height:'4rem'}}
        placeholder='Escribe aqui guapi'
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
