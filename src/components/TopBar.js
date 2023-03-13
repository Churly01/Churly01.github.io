import TopButton from './TopButton.js';
import LoveButton from './LoveButton.js';
import { faEnvelope,
         faBook,
         faSuitcaseRolling
       }         from '@fortawesome/free-solid-svg-icons';



const TopBar = () => {
  return (
    <div
      style= {{
        backgroundColor: 'rgb(255, 230, 230)',
        top: '0px',
        left: '0px',
        height: 'clamp(4rem, 6vw, 10rem)',
        width: '100%',
        position:'relative',
        display: 'flex',
      }}
    >
      <LoveButton/>
      <TopButton
        text='Mensajitos bonitos'
        to="/mensajitos"
        icon={faEnvelope}
      />

      <TopButton
        to="/"
        text='Para Elenita'/>

      <TopButton
        to="/viajes"
        text='Viajes Guays'
        icon={faSuitcaseRolling}
      />

      <TopButton
        to='/diario'
        text='Diario Conjunto'
        icon={faBook}
      />

    </div>
  );
};


export default TopBar;
