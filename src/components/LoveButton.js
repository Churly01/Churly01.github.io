import {useState, useEffect} from 'react';
import paris                 from "../Paris.jpg";
import Button                from '@mui/material/Button';
import { FontAwesomeIcon }   from '@fortawesome/react-fontawesome';
import { faHeart }        from '@fortawesome/free-solid-svg-icons';


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
      <FontAwesomeIcon icon ={faHeart}/>
      {is_open &&
       <dialog
         open
         style={{
           fontSize:"clamp(1rem, 3vh, 10rem)",
           top:"10vh",
           left:"5vw",
           position:"absolute",
           width: "clamp(19rem, 50vw, 100rem)",
         }}
       >
         Eres lo mejor que me ha pasado en la vida. Te quiero infinito amor
         <img
           src={paris}
           alt="Elena y yo en paris"
           style = {{
             marginLeft: "auto",
             marginRight: "auto",
             width: "clamp(18rem, 45vw, 50rem)",
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
