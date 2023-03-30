import TopButton  from './TopButton.js';
import LoveButton from './LoveButton.js';
import {
  faEnvelope,
  faSuitcaseRolling
}                 from '@fortawesome/free-solid-svg-icons';
import UserPopover from '../components/UserPopover';


const TopBar = () => {
  return (
    <div
      style= {{
        backgroundColor: 'rgb(255, 230, 230)',
        top: '0px',
        left: '0px',
        height: 'clamp(4rem, 6vh, 10rem)',
        width: '100%',
        position:'sticky',
        display: 'flex',
      }}
    >
      <LoveButton/>
      <TopButton
        element='Mensajitos bonitos'
        to="/mensajitos"
        icon={faEnvelope}
      />
      <TopButton
        to="/"
        element={'Para Elenita'}/>

      <TopButton
        to="/viajes"
        element='Viajes Guays'
        icon={faSuitcaseRolling}
      />
      <TopButton
        to="/userConfig"
        element={<UserPopover/>}
      />
    </div>
  );
};


export default TopBar;
