import './App.css';
import Main from './screens/Main.js';
import TripsScreen from './screens/TripsScreen.js';
import DiaryScreen from './screens/DiaryScreen.js';
import MessagesScreen from './screens/MessagesScreen.js';
import {Route, Routes} from "react-router-dom";
import TopBar from './components/TopBar.js';

function App() {
  return (
    <div style={{position:'fixed', width: '100%',height:'100%',backgroundColor:'rgba(180, 80, 80, 0.2)', overflow:'scroll', overflowX:'hidden'}}>
      <TopBar/>
      <Routes>
        <Route path="/" element = {<Main/>}/>
        <Route path= "/mensajitos" element={<MessagesScreen/>}/>
        <Route path="/diario" element={<DiaryScreen/>}/>
        <Route path="/viajes" element={<TripsScreen/>}/>
      </Routes>
    </div>
  );
}

export default App;
