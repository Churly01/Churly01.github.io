import Message from '../components/Message'


function MessagesView({
  messages
}
){
  console.log(messages);
  return (
      <div>
        {messages.map(message => <Message key ={message._id}message={message}/>)}
      </div>
  );
}

export default MessagesView;
