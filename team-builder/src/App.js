import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMembers from "./TeamMembers";
import Form from "./Form";

function App() {
  const [list, setList] = useState([
    {
      Name: 'Daniel',
      Email: 'daniel1972846293847102937@yoohoo.com',
      Role: 'WebDev'
    }
  ]);
  const addNewMember = member => {
    const newMember = {
      id: 
    }
  }
  return (
    <div className="App">
      <TeamMembers />
      <Form />
    </div>
  );
}

export default App;
