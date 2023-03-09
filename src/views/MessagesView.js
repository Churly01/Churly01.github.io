import Message from '../components/Message';
import TextField                      from '../components/TextField';
import apiRequest                     from '../apiRequest.js';
import React, { useState, useEffect } from 'react';
function MessagesView(){

  const [is_loading, setIsLoading] = useState(true);
  const [messages, setMessages] = useState({});

  const onClickTrash = (id) => {
    apiRequest(`https://api-online.onrender.com/messages/${id}`, "DELETE")
      .then(response => console.log(response.json()));
    setMessages(messages.filter(elem => elem._id !== id));
  };

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
      {messages.map(message => (
        <li key={message._id}>
          <div style={{
                 display:'flex',
                 padding:'0.2em',
                 border: '2px solid grey',
                 margin: '0.3em'
               }}>
            <Message message={message} onClickTrash={onClickTrash}/>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default MessagesView;
