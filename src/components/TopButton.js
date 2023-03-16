import Button              from '@mui/material/Button';
import { Link }            from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const TopButton = ({
  text,
  to,
  icon,
}) =>{


  return (
    <Link to={to}  style = {{
      flex:1,
    }}>
      <Button
        style={{height:'100%', width:'100%'}}
        variant="contained"
      >
        {
          icon !=null ?  <FontAwesomeIcon  icon={icon} style={{fontSize:'2em'}}/>
          : <b style={{fontSize:'1.5em'}}>{text}</b>
        }
      </Button>
    </Link>
  );
}

export default TopButton;
