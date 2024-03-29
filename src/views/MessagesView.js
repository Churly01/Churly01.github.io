import Message                        from '../components/Message';
import TextField                      from '../components/TextField';
import useApiRequest                  from '../hooks/useApiRequest.js';
import React, { useState, useEffect } from 'react';
import {useAuth}                      from '../contexts/AuthContext.js';

function MessagesView(){
  const apiRequest = useApiRequest();
  const {user} = useAuth();
  const [is_loading, setIsLoading] = useState(true);
  const [messages, setMessages] = useState({});
  const onClickTrash = (id) => {
    apiRequest(`/messages/${id}`, "DELETE")
      .then(response => response.json());
    setMessages(messages.filter(elem => elem._id !== id));
  };

  useEffect(() => {
    apiRequest('/messages', "GET")
      .then(response => response.json())
      .then(messages => {
        setIsLoading(false);
        const sorted_messages = messages.sort((a,b) => a > b ? 1 : -1);
        setMessages(sorted_messages);
      });
  }, [apiRequest]);

  const onSaveMessage = (message) => {
    const date = new Date();
    const complete_message = {
      ...message,
      creator_firebase_id: user.uid,
      creationDate: date.getDate(),
    };
    const options = {
      body: JSON.stringify(complete_message),
      headers: {
        "Content-Type": "application/json",
      }
    };
    apiRequest('/messages/', "POST", options);
    setMessages([
      complete_message,
      ...messages
    ]);
  };

  if(is_loading) return <div> cargando</div>;
  return (
    <ul>
      <TextField style={{}} onSaveMessage={onSaveMessage}/>
      {messages.map(message => (
        <li key={message._id}>
            <Message message={message} onClickTrash={onClickTrash}/>
        </li>
      ))}
    </ul>
  );
}

export default MessagesView;
