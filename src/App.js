
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { changeInstrument, changePower, changeSound, changeVolume } from './actionCreators';
import { useEffect } from 'react';


function App() {

  const isPowerOn = useSelector(state => state.power);
  const instrumentSelected = useSelector(state => state.instrument);
  const display = useSelector(state => state.display);
  const dispatch = useDispatch();
  const audioFile = useSelector(state => state.audio);
  const clicked = useSelector(state => state.clicked);
  const volume = useSelector(state => state.volume);

  const handlePowerChange = (event) => {
    dispatch(changePower(!isPowerOn));
  }

  const handleInstrumentChange = (event) => {
    if (isPowerOn) {
      if (instrumentSelected == "PIANO") {
        dispatch(changeInstrument("Heater Kit", "DRUM"))
      } else if (instrumentSelected == "DRUM") {
        dispatch(changeInstrument("Smooth Piano Kit", "PIANO"))
      }
    }
  }

  const playAudio = () => {
    const audio = new Audio(audioFile);
    audio.volume = volume/100;
    audio.play();
  }

   const handleQSoundChange = () => {
    if (isPowerOn) {
      dispatch(changeSound(instrumentSelected, "Q"))
    }
  }

  const handleWSoundChange = () => {
    if (isPowerOn) {
      dispatch(changeSound(instrumentSelected, "W"))
    }

  }

  const handleESoundChange = () => {
    if (isPowerOn) {
      dispatch(changeSound(instrumentSelected, "E"))
    }
  }

  const handleASoundChange = () => {
    if (isPowerOn) {
      dispatch(changeSound(instrumentSelected, "A"))
    }
  }

  const handleSSoundChange = () => {
    if (isPowerOn) {
      dispatch(changeSound(instrumentSelected, "S"))
    }
  }

  const handleDSoundChange = () => {
    if (isPowerOn) {
      dispatch(changeSound(instrumentSelected, "D"))
    }
  }

  const handleZSoundChange = () => {
    if (isPowerOn) {
      dispatch(changeSound(instrumentSelected, "Z"))
    }
  }

  const handleXSoundChange = () => {
    if (isPowerOn) {
      dispatch(changeSound(instrumentSelected, "X"))
    }
  }

  const handleCSoundChange = () => {
    if (isPowerOn) {
      dispatch(changeSound(instrumentSelected, "C"))
    }
  }

  
  useEffect(() => {
    if (audioFile || clicked) {
      playAudio();
    }
  }, [audioFile, clicked]);

  const handleInstrumentSelected = (inst) => {
    if (inst == "PIANO") {
      return true;
    } else {
      return false;
    }
  }

  const keyboardEventListener = (event) => {
    if (event.key === "q") {
      event.preventDefault();
      setTimeout(function() {
        document.getElementById("Q").click();
      }, 100); // add a delay of 100 milliseconds
    } else if (event.key === 'w') {
      event.preventDefault();
      setTimeout(function() {
        document.getElementById("W").click();
      }, 100);
    } else if (event.key === 'e') {
      event.preventDefault();
      setTimeout(function() {
        document.getElementById("E").click();
      }, 100);
    } else if (event.key === 'a') {
      event.preventDefault();
      setTimeout(function() {
        document.getElementById("A").click();
      }, 100);
    } else if (event.key === 's') {
      event.preventDefault();
      setTimeout(function() {
        document.getElementById("S").click();
      }, 100);
    } else if (event.key === 'd') {
      event.preventDefault();
      setTimeout(function() {
        document.getElementById("D").click();
      }, 100);
    } else if (event.key === 'z') {
      event.preventDefault();
      setTimeout(function() {
        document.getElementById("Z").click();
      }, 100);
    } else if (event.key === 'x') {
      event.preventDefault();
      setTimeout(function() {
        document.getElementById("X").click();
      }, 100);
    } else if (event.key === 'c') {
      event.preventDefault();
      setTimeout(function() {
        document.getElementById("C").click();
      }, 100);
    }
  };

  useEffect(() =>
  {
    document.body.addEventListener('keydown', keyboardEventListener);
    return () =>
      {
        document.body.removeEventListener('keydown', keyboardEventListener);
      }
  }, [])

  const handleRelease = (event) => {
    dispatch(changeVolume(event.target.value))
  }
  

  return (
    <div className="App">
      <div id="drumkit">
        <p id="coder">by Alex Aney</p>
        <div className='row'>
          <div className='grid'>
            <button id="Q" className='item' onClick={handleQSoundChange}>Q</button>
            <button id="W" className='item' onClick={handleWSoundChange}>W</button>
            <button id="E" className='item' onClick={handleESoundChange}>E</button>
            <button id="A" className='item' onClick={handleASoundChange}>A</button>
            <button id="S" className='item' onClick={handleSSoundChange}>S</button>
            <button id="D" className='item' onClick={handleDSoundChange}>D</button>
            <button id="Z" className='item' onClick={handleZSoundChange}>Z</button>
            <button id="X" className='item' onClick={handleXSoundChange}>X</button>
            <button id="C" className='item' onClick={handleCSoundChange}>C</button>
          </div>
          <div className="settings">
            <div>
              <h3>Power</h3>
              <label className='switch'>
                <input type="checkbox" id="power-checkbox" value={isPowerOn} onChange={handlePowerChange}/>
                <span className="slider"></span>
              </label>
            </div>
            <div className='display'>{display}</div>
            <input type='range' min='1' max='100' id='slider' onChange={handleRelease}></input>
            <div>
              <h3>Bank</h3>
              <label className='switch'>
                <input type="checkbox" id="bank-checkbox" value={handleInstrumentSelected(instrumentSelected)} onChange={handleInstrumentChange} disabled={!isPowerOn}/>
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
