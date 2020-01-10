import React from 'react';
import './App.css';
import Topnav from './components/Topnav/topnav.js'
import Content from './components/Content/content.js'

function App() {
  const url = window.location.href;
  return (
    <div>

      <Topnav />
      <Content url={url} />
    </div>
  );
}

export default App;
