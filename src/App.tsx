import "./App.css";
import MessageList from "./components/MessageList";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="App-logo" />
        <h1>
          <span className="highlightA">A</span>
          <span className="highlightI">I</span> History
        </h1>
        {/* <h3>Chat History</h3> */}
      </header>
      <div className="chat-container-wrapper">
        <MessageList />
      </div>
    </div>
  );
}

export default App;
