import {useState, useEffect} from 'react';
import paris                 from "../Paris.jpg";
const LoveButton = () =>{


  const [is_open, setIsOpen] = useState(false);

  useEffect( ()=> {
    if(is_open) console.log('OPEN');
  }, [is_open]);

  return (
    <button
      onClick={()=>setIsOpen(a=>!a)}
      style={{flex:1}}
    >
      TE QUIERO MUCHO ELENA
      {is_open &&
       <dialog
         open
         style={{fontSize:"25px"}}
       >
         Eres lo mejor que me ha pasado en la vida. Te quiero infinito amor
         <img
           src={paris}
           alt="Elena y yo en paris"
           style = {{
             width:"1000px",
             display:"block"
           }}
         />
       </dialog >
      }
    </button>

  );
};

export default LoveButton;
