import './App.css';
import BlueColor from './BlueColor';
import RedColor from './RedColor';
import GreenColor from './GreenColor';
import ColorButton from './ColorButton';
import ColorCard from './ColorCard';


import {useState} from 'react'

function App() {
  const [color, setColor] = useState("");
  const [counter, setCounter] = useState(0);
  const data = [
    {
        name: "Red",
        color: "Red"
    },
    {
        name: "Blue",
        color: "Blue"
    },
    {
        name: "Green",
        color: "Green"
    }
]
const divStyle = {
  color: 'black',
  backgroundColor: color,
  height: "100vh"
};
  console.log(`This is the color in state: `, color, counter);
  return (
    <div className="app" style={divStyle}>
      <h1>Welcome to the world of Colors</h1>
      <ColorButton onClick={() =>{
        setColor(data[counter].name)
        if (counter < 2) {
           setCounter(counter + 1) 
        } else {
          setCounter(0)
        }
        } 
        } />
      <ColorCard color={color} />
      <GreenColor/>
      <RedColor />
      <BlueColor />
      {/* <ColorData onClick={color}/> */}
    </div>
   
      
  
  );
}

export default App;
