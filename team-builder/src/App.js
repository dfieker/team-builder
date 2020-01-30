import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [list, setList] = useState([
    {
      Name: 'Daniel',
      Email: 'daniel1972846293847102937@yoohoo.com',
      Role: 'WebDev'
    }
  ])
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
