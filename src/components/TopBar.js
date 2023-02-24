import TopButton from './TopButton.js'
import LoveButton from './LoveButton.js'

const TopBar = () => {
  return (

 	  <div
      style= {{
        backgroundColor: 'rgb(255, 230, 230)',
        top: '0px',
        left: '0px',
        height: '5%',
        width: '100%',
        position:'relative',
        display: 'flex',
      }}
    >
      <LoveButton/>
      <TopButton
        text='Mensajitos bonitos'
      />

      <div style={{
        fontSize: '40px',
        textAlign: 'center',
        color: 'black',
        flex:1
      }}>
        Para Elena
      </div>

      <TopButton
        text='Ideas de Viajes Guays'
      />
      <TopButton
        text='Diario Conjunto'
      />

    </div>
  );
};


export default TopBar;
