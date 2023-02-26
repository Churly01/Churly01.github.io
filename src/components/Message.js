

const Message = ({
  message
}) => {
  return (
    <div>
      <h1>{message.messageTitle}</h1>
      {message.messageText}

    </div>
  );
};

export default Message;
