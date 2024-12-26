import React from "react";
import "./App.css";
import MessageList from "./components/MessageList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Messenger</h1>
      </header>
      <div className="chat-container-wrapper">
        <MessageList />
      </div>
    </div>
  );
}

export default App;
