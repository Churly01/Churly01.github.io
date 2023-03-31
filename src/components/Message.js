import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash }         from '@fortawesome/free-solid-svg-icons';
import useApiRequest  from '../hooks/useApiRequest';
import { useEffect, useState } from 'react';
import '../static/styles/marvelous.css';

const Message = ({
  message,
  onClickTrash
}) => {

  const apiRequest = useApiRequest();
  const [creator, setCreator] = useState('No se sabe quien');
  const created_date = new Date(message.creationDate);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const year = created_date.getFullYear();
  const month = months[created_date.getMonth()];
  const date = created_date.getDate();
  const hour = created_date.getHours();
  const min = created_date.getMinutes();
  const time = date + ' de ' + month + ' ' + year + ' ' + hour + ':' + min ;    // final date with time, you can use this according your requirement

  useEffect( () => {
    apiRequest(`/users/firebase/${message.creator_firebase_id}`, "GET")
          .then(response => response.json())
          .then(user => {
            setCreator(user);
          });
  },[apiRequest, message.creator_firebase_id]);
  return (
    <div className='darker' style={{
            display:'flex',
            padding:'0.3em',
            border: '2px solid grey',
            margin: '0.3em'
          }}>
      <FontAwesomeIcon onClick={() => onClickTrash(message._id)} icon={faTrash} style={{marginRight:'0.3em'}}/>
      {message.messageText} <br/>
      {time}<br/>{creator[0]?.first_name}
    </div>
  );
};

export default Message;
