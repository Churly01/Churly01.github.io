import {useState, useEffect} from 'react';
import paris                 from "../Paris.jpg";
import Button from '@mui/material/Button';

const LoveButton = () =>{
  const [is_open, setIsOpen] = useState(false);

  useEffect( ()=> {
    if(is_open) console.log('OPEN');
  }, [is_open]);

  return (
    <Button
      onClick={()=>setIsOpen(a=>!a)}
      style={{flex:1}}
      variant="contained"
    >
      <b style={{fontSize:'2vw', color:'pink'}}>TE QUIERO MUCHO ELENA</b>
      {is_open &&
       <dialog
         open
         style={{
             fontSize:"2vw",
             top:"8vw",
             left:"30vw",
             position:"absolute",
             width:"30vw"
         }}
       >
         Eres lo mejor que me ha pasado en la vida. Te quiero infinito amor
         <img
           src={paris}
           alt="Elena y yo en paris"
           style = {{
               marginLeft: "auto",
               marginRight: "auto",
               width:"60%",
               zIndex:1000,
               display:"block"
           }}
         />
       </dialog >
      }
    </Button>

  );
};

export default LoveButton;
