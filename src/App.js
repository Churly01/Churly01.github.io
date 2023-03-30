import './App.css';
import Main            from './screens/Main.js';
import TripsScreen     from './screens/TripsScreen.js';
import DiaryScreen     from './screens/DiaryScreen.js';
import MessagesScreen  from './screens/MessagesScreen.js';
import LoginScreen     from './screens/LoginScreen';
import SignUpScreen    from './screens/SignUpScreen';
import UserConfig      from './screens/UserConfig.js';
import {Route, Routes} from "react-router-dom";
import TopBar          from './components/TopBar.js';
import Register        from  './auth/Register.js';
import {AuthProvider}  from './contexts/AuthContext.js';
import { useEffect }   from 'react';
import PrivateRoutes   from './routes/PrivateRoutes.js';

function App() {

  useEffect(()=> {document.title ='La web de mi Elenita';}, []);

  return (
    <AuthProvider>
      <div style={{position:'fixed', width: '100%',height:'100%',backgroundColor:'rgba(180, 80, 80, 0.2)', overflow:'scroll', overflowX:'hidden'}}>
        <TopBar/>
        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route path="/" exact element={<Main/>}/>
            <Route path="/signup" element={<SignUpScreen/>}/>
            <Route path="/login" element={<LoginScreen/>}/>
            <Route path="/mensajitos" element={<MessagesScreen/>}/>
            <Route path="/diario" element={<DiaryScreen/>}/>
            <Route path="/viajes" element={<TripsScreen/>}/>
            <Route path="/userConfig" element={<UserConfig/>}/>
          </Route>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
