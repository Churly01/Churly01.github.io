import './App.css';
import { useState } from  'react';
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
import { useAuth}  from './contexts/AuthContext.js';
import { useEffect }   from 'react';
import PrivateRoutes   from './routes/PrivateRoutes.js';
import { useDispatch } from 'react-redux';
import { add } from './reducers/userSlice';
import useApiRequest from './hooks/useApiRequest';

function App() {

  const dispatch = useDispatch();
  const auth = useAuth();
  const user = auth?.user;
  const apiRequest = useApiRequest();
  const [loading, setLoading] = useState(true);
  console.log(auth);

  useEffect(()=> {document.title ='La web de mi Elenita';}, []);

  useEffect(()=> {
    if(user){
      apiRequest(`/users/firebase/${user.uid}`)
        .then(res => res.json())
        .then(userInfo => {
          dispatch(add(userInfo[0]));
          setLoading(false);
        });
    }
  }, [apiRequest, dispatch, auth, user]);

  return (
    <>
      {loading ? 'cargando' :(
          <div style={{position:'fixed', width: '100%',height:'100%',backgroundColor:'rgba(180, 80, 80, 0.2)', overflow:'scroll', overflowX:'hidden'}}>
            <TopBar/>
            <Routes>
              <Route path="/register" exact element={<Register/>}/>
              <Route path="/login" exact element={<SignUpScreen/>}/>
              <Route element={<PrivateRoutes/>}>
                <Route path="/" exact element={<Main/>}/>
                <Route path="/signup" element={<SignUpScreen/>}/>
                <Route path="/login" element={<LoginScreen/>}/>
                <Route path="/mensajitos" element={<MessagesScreen/>}/>
                <Route path="/diario" element={<DiaryScreen/>}/>
                <Route path="/viajes" element={<TripsScreen/>}/>
                <Route path="/userConfig" element={<UserConfig/>}/>
              </Route>
            </Routes>
          </div>
      )}
    </>
  );
}

export default App;
