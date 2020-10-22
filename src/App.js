import React from 'react';
import './App.css';
import ModalComponent from './Modal/Modal';
import Taskbox from './Taskbox/Taskbox';

function App() {
  return (
      <div>
        <Taskbox/>
        <ModalComponent/>
      </div>
  );
}

export default App;
