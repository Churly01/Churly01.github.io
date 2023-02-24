import Button from '@mui/material/Button';

const TopButton = ({
  text,
}) =>{


  return (

    <Button
      style = {{
        flex:1,
      }}
      variant="contained"
    >
      <b>{text}</b>
    </Button>

  );
}

export default TopButton;
