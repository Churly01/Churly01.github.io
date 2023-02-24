import TopBar from '../components/TopBar.js';
import TextField from '../components/TextField.js';

const Main = () => {
  return (

    <div style ={{width:"100%", height:"100%"}}>
      <TopBar />
      <TextField style ={{display:"block", margin:"50px", position:"relative"}}/>
    </div>
    );
}

export default Main;
