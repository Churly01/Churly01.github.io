import TopButton from './TopButton.js';
import LoveButton from './LoveButton.js';

const TopBar = () => {
  return (
    <div
      style= {{
        backgroundColor: 'rgb(255, 230, 230)',
        top: '0px',
        left: '0px',
        height: '6vw',
        width: '100%',
        position:'relative',
        display: 'flex',
      }}
    >
      <LoveButton/>
      <TopButton
        text='Mensajitos bonitos'
        to="/mensajitos"
      />

      <TopButton
        to="/"
        text='Para Elenita'/>

      <TopButton
        to="/viajes"
        text='Viajes Guays'
      />

      <TopButton
        to='/diario'
        text='Diario Conjunto'
      />

    </div>
  );
};


export default TopBar;
