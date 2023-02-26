import TextField from '../components/TextField';
import apiRequest from '../apiRequest.js';
import React, { useState, useEffect } from 'react';


const MessagesScreen = () => {
  const [is_loading, setIsLoading] = useState(true);
  const [messages, setMessages] = useState({});


  useEffect( () => {
    apiRequest("https://api-online.onrender.com/messages", "GET")
      .then(response => response.json())
      .then(messages => {
        console.log('HOLA');
        setIsLoading(false);
        console.log(messages);
        setMessages(messages);
    });
  }, []);

  return(
    <div>
      { is_loading? 'cargando':
        <div>
          <TextField style ={{display:"block", margin:"50px", position:"relative"}}/>

          <ul>
            { messages.map( message => <li key = {message._id}>{message.messageText}</li>)}
          </ul>
        </div>
      }

    </div>
  );
};

export default MessagesScreen;
