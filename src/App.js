import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Pages/HomePage";
import Chats from "./Pages/ChatsPage";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/chat" component={Chats} />
    </div>
  );
}

export default App;
