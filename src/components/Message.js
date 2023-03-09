import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash }         from '@fortawesome/free-solid-svg-icons';

const Message = ({
  message,
  onClickTrash
}) => {
  const created_date = new Date(message.creationDate);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const year = created_date.getFullYear();
  const month = months[created_date.getMonth()];
  const date = created_date.getDate();
  const hour = created_date.getHours();
  const min = created_date.getMinutes();
  const time = date + ' de ' + month + ' ' + year + ' ' + hour + ':' + min ;    // final date with time, you can use this according your requirement

  return (
    <div>
      <FontAwesomeIcon onClick={() => onClickTrash(message._id)} icon={faTrash} style={{marginRight:'0.3em'}}/>
      {message.messageText} <br/>
      {time}
    </div>
  );
};

export default Message;
