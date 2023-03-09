import Message from '../components/Message';
import TextField                      from '../components/TextField';
import apiRequest                     from '../apiRequest.js';
import React, { useState, useEffect } from 'react';

function MessagesView(){

  const [is_loading, setIsLoading] = useState(true);
  const [messages, setMessages] = useState({});

  useEffect(() => {
    apiRequest("https://api-online.onrender.com/messages", "GET")
      .then(response => response.json())
      .then(messages => {
        setIsLoading(false);
        setMessages(messages);
    });
  }, []);

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

  console.log(messages);
  if(is_loading) return <div> cargando</div>;
  return (
    <ul>
      <TextField onSaveMessage={onSaveMessage}/>
      {messages.map(message => <li><Message key ={message._id}message={message}/></li>)}
    </ul>
  );
}

export default MessagesView;
