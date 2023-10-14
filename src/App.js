import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import './App.css';

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

function App() {
  return (
    <div className="App">
      <div style = {{ width: "1000px" }}>
        <Chatbot 
          config={config} 
          actionProvider={ActionProvider} 	    
          messageParser={MessageParser}
        />
      </div>
    </div>
  );
}

export default App;
