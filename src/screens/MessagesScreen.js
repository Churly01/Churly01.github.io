import TextField                      from '../components/TextField';
import apiRequest                     from '../apiRequest.js';
import React, { useState, useEffect } from 'react';
import MessagesView                   from '../views/MessagesView';

const MessagesScreen = () => {
  const [is_loading, setIsLoading] = useState(true);
  const [messages, setMessages] = useState({});

  const onSaveMessage = (message) => {
    const options = {
      body: JSON.stringify(message),
      headers: {
        "Content-Type": "application/json",
      }
    };
    console.log(message);
    apiRequest("https://api-online.onrender.com/messages/", "POST", options);
    setMessages([
      message,
      ...messages
    ]);
  };

  useEffect(() => {
    apiRequest("https://api-online.onrender.com/messages", "GET")
      .then(response => response.json())
      .then(messages => {
        setIsLoading(false);
        setMessages(messages);
    });
  }, []);


  return(
    <div>
      { is_loading? 'cargando':
        <div>
          <TextField onSaveMessage={onSaveMessage}/>
          <MessagesView
            messages={messages}

          />
        </div>
      }
    </div>
  );
};

export default MessagesScreen;
