import "./App.css";

import Block from "./components/generalinfo/Block";
import Streetname from "./components/generalinfo/Streetname";

function App() {
  return (
    <div className="App">
      <h1 className="heading">Tax Calculator</h1>
      <div className="generalinfo">
        <Block />
        <Streetname />
      </div>
    </div>
  );
}

export default App;
