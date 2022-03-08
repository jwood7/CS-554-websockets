import React, {useState, useCallback} from 'react';
import './App.css';
import Callback from './Callback';
import NoCallback from './NoCallback';

function App() {
  return (
    <div className='App'>
      Using useCallback
      <Callback />
      Not using useCallback
      <NoCallback />
    </div>
  );
}

export default App;
