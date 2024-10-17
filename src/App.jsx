import React from 'react';
import ModalExample from './ModalExample';
import LanguageSwitcher from './components/footer/LanguageSwitcher';
import { MusicPlayer } from './components/footer/MusicPlayer';

function App() {
  return (
    <div className="App">
      <LanguageSwitcher />
      <MusicPlayer />
      <ModalExample />
    </div>
  );
}

export default App;
