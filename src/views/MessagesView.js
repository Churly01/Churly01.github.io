import Message from '../components/Message';


function MessagesView({
  messages
}
){
  console.log(messages);
  return (
      <ul>
        {messages.map(message => <li><Message key ={message._id}message={message}/></li>)}
      </ul>
  );
}

export default MessagesView;
