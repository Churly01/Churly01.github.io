import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const TopButton = ({
  text,
  to,
}) =>{


  return (
    <Link to={to}  style = {{
      flex:1,
    }}>
      <Button
        style={{height:'100%', width:'100%'}}
        variant="contained"
      >
        <b >{text}</b>
      </Button>
    </Link>
  );
}

export default TopButton;
