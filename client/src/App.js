import React from 'react';
import WebSocketInitiator from './components/WebSocketInitiator';
import ChatWindow from './components/ChatWindow';
import './App.css';

function App() {
  return (
    <div className="App">
      <WebSocketInitiator>
        <ChatWindow />
      </WebSocketInitiator>
    </div>
  );
}

export default App;
