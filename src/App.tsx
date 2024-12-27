import "./App.css";
import MessageList from "./components/MessageList";
import logo from "./assets/logo.png";
import { useState } from "react";

function App() {
  /* UNa funcion para ocultar y mostrar los mensajes */
  const [showMessages, setShowMessages] = useState(false);

  const toggleMessages = () => {
    setShowMessages(!showMessages);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="App-logo" />
        <h1>
          <span className="highlightA">A</span>
          <span className="highlightI">I</span> History
        </h1>
        <button
          className={`button-custom ${showMessages ? "button-clicked" : ""}`}
          onClick={toggleMessages}
        >
          {showMessages ? "Hide" : "Show"} Messages
        </button>
        {/* <h3>Chat History</h3> */}
      </header>
      <div className="chat-container-wrapper">
        {showMessages && <MessageList />}
      </div>
    </div>
  );
}

export default App;
