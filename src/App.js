import heart from './cercle.png';
import whatsapp from './WhatsApp.svg.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="heart_img" src={heart} alt="Raj Mini" />
        <div className="textabsolute">
          <div className="mobile_screen">
            <h3 className="leftName_mobile"> Raj</h3>
            <img style={{ width: '40px', margin: '0 15px' }} src={heart} alt="Raj Mini" />
            <h3 className="rightName_mobile"> Taruna</h3>
          </div>
          <h1 className="savethedate">Save the Date</h1>
          <h1 className="datevalue">10<sup>th</sup> Feb 2022</h1>

          <h3 className="leftName"> Raj</h3>
          <h3 className="rightName"> Taruna</h3>
        </div>
        <h2 style={{ color: '#ff8300' }} className="venue">Venue :- Pt. Ramswaroop Upadhyay Mahavidhyalay Murwan Banda (U.P.)</h2>
        <h5 style={{ margin: 0, color: '#ff8300' }}>Call : 9584562228 </h5>
        <a href="https://api.whatsapp.com/send?phone=+919584562228">
          <img style={{ width: '50px' }} src={whatsapp} alt="Whatsapp" />
        </a>
      </header>
    </div>
  );
}

export default App;
