import React from 'react';

import ButtonAppBar from './ButtonAppBar.js';
import '../styles/App.css';
import TextInput from './TextInput.js';
import AlignItemsList from './AlignItemsList';

function App() {
  return (
    <React.Fragment>
      <ButtonAppBar />
      <div className="App">
        <AlignItemsList />
        <TextInput />
      </div>
    </React.Fragment>
  );
}

export default App;
